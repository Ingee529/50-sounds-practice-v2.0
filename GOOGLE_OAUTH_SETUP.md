# Google OAuth 設置指南

## 1. 獲取 Google OAuth 憑證

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 創建新專案或選擇現有專案
3. 啟用 Google+ API 和 Google Identity Services
4. 前往「憑證」頁面
5. 點擊「建立憑證」→「OAuth 2.0 用戶端 ID」
6. 選擇「網路應用程式」
7. 設置授權重新導向 URI：
   - `http://localhost:8080` (開發環境)
   - `http://127.0.0.1:8080` (開發環境)
   - 您的生產環境域名

## 2. 配置後端

1. 複製 `backend/.env.example` 為 `backend/.env`
2. 設置 Google OAuth 配置：
```bash
GOOGLE_OAUTH2_CLIENT_ID=您的Google客戶端ID.apps.googleusercontent.com
GOOGLE_OAUTH2_CLIENT_SECRET=您的Google客戶端密鑰
```

## 3. 配置前端

1. 編輯 `js/config.js`：
```javascript
const appConfig = {
    googleClientId: '您的Google客戶端ID.apps.googleusercontent.com',
    enableGoogleOAuth: true
};
```

## 4. 安裝依賴

```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt
```

## 5. 運行數據庫遷移

```bash
python manage.py makemigrations
python manage.py migrate
```

## 6. 啟動服務

```bash
# 後端
cd backend
source venv/bin/activate
python manage.py runserver 8001

# 前端
cd ..
python3 -m http.server 8080
```

## 功能特性

- 🔐 安全的 Google OAuth 2.0 認證
- 👤 自動創建或關聯現有帳戶
- 🌐 支持中文/英文界面
- 📱 響應式設計
- 🔄 與現有登入系統完全整合

## 注意事項

- Google OAuth 按鈕只有在正確配置後才會顯示
- 現有郵箱用戶可以升級為 Google OAuth 登入
- 支持頭像和顯示名稱自動同步