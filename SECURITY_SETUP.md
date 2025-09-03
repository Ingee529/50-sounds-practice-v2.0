# 日文假名練習器 - 軍事級安全部署指南

## 基於現有 starring-happiness 項目的安全配置

### 🛡️ 第一層：SSH 安全配置
```bash
# SSH 配置已經完成 (端口 2222, 密鑰認證)
# 無需額外配置
```

### 🔥 第二層：防火牆配置 (UFW + iptables)
```bash
# 基本防火牆 (已存在)
sudo ufw allow 2222/tcp  # SSH
sudo ufw allow 80/tcp    # HTTP  
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable

# 進階 iptables 規則 (參考現有配置)
# SSH 暴力破解防護、連接數限制、DDoS 防護
# 這些規則已在現有系統中配置完成
```

### 🔒 第三層：Nginx 安全配置
創建 `/etc/nginx/sites-available/kana-practice`:

```nginx
server {
    listen 80;
    server_name your-domain.duckdns.org;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.duckdns.org;
    
    # SSL 憑證 (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/your-domain.duckdns.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.duckdns.org/privkey.pem;
    
    # SSL 安全配置 (與 starring-happiness 相同)
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # 軍事級安全標頭
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # CSP 需要調整支援 Google OAuth
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://accounts.google.com https://apis.google.com; connect-src 'self' https://accounts.google.com; frame-src https://accounts.google.com;" always;
    
    server_tokens off;
    
    # Django 應用代理
    location / {
        proxy_pass http://127.0.0.1:8001;  # Django port
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        proxy_connect_timeout 30s;
        proxy_send_timeout 30s;
        proxy_read_timeout 30s;
    }
    
    # 靜態文件
    location /static {
        alias /home/ubuntu/kana-practice/backend/staticfiles;
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
    
    # 拒絕隱藏文件
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
```

### 🔐 第四層：Django 安全設定
在 `backend/kana_practice/settings.py` 添加：

```python
# 生產環境安全設定
if not DEBUG:
    SECURE_SSL_REDIRECT = True
    SECURE_HSTS_SECONDS = 31536000
    SECURE_HSTS_INCLUDE_SUBDOMAINS = True
    SECURE_HSTS_PRELOAD = True
    SECURE_CONTENT_TYPE_NOSNIFF = True
    SECURE_BROWSER_XSS_FILTER = True
    X_FRAME_OPTIONS = 'DENY'
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True
    SESSION_COOKIE_HTTPONLY = True
    CSRF_COOKIE_HTTPONLY = True
```

### 🚫 第五層：速率限制 (Django-ratelimit)
```bash
pip install django-ratelimit
```

### 🔄 第六層：自動化運維
```bash
# DuckDNS 自動更新 (crontab)
*/5 * * * * /home/ubuntu/duckdns/duck.sh >/dev/null 2>&1

# SSL 自動續訂
0 2 * * * /usr/bin/certbot renew --quiet
```

### 📊 安全檢查清單
- [ ] Nginx 配置檔案建立
- [ ] SSL 憑證申請 (Let's Encrypt)
- [ ] Django 安全設定
- [ ] Google OAuth 生產域名配置
- [ ] DuckDNS 設定
- [ ] 防火牆規則已存在 ✅
- [ ] SSH 安全已存在 ✅

### 🌐 部署後測試
- SSL Labs 測試：https://www.ssllabs.com/ssltest/
- 安全標頭檢查：https://securityheaders.com/
- Google OAuth 功能測試

這套配置可以達到與 starring-happiness 相同的 A+ 安全等級。