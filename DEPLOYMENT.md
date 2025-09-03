# 日文五十音練習器 - 部署指南

## 版本資訊
- 版本：v2.0 (含 Google OAuth 登入/註冊)
- 更新日期：2025-09-03

## 新功能
- ✅ Google OAuth 第三方登入/註冊
- ✅ 新用戶個人資料完成頁面
- ✅ 多語言支援 (中文/英文)
- ✅ 用戶暱稱和出生日期設定

## 部署前準備

### 1. Google Cloud Console 設定
在 Google Cloud Console 中添加生產域名到授權 JavaScript 來源：
```
https://your-domain.com
https://www.your-domain.com
```

### 2. 後端設定
1. 複製 `.env.production` 為 `.env`
2. 修改以下設定：
   - `SECRET_KEY`: 生成新的安全密鑰
   - `ALLOWED_HOSTS`: 設定你的域名
   - 資料庫連接資訊（如使用 MySQL）

### 3. 前端設定
1. 修改 `js/config.js` 中的 `apiBaseUrl` 為生產 API 網址
2. 或使用 `js/config.production.js` 替換 `js/config.js`

### 4. 資料庫遷移
```bash
cd backend
python manage.py migrate
python manage.py collectstatic
python create_admin.py  # 建立管理員帳號
```

## 部署檢查清單
- [ ] Google OAuth 域名已添加到 Google Cloud Console
- [ ] 生產環境變數已設定
- [ ] 資料庫已遷移
- [ ] 靜態文件已收集
- [ ] HTTPS 憑證已設定
- [ ] 測試 Google 登入/註冊功能

## 技術架構
- **前端**: 純 HTML/CSS/JavaScript + i18next
- **後端**: Django REST Framework + SQLite/MySQL
- **認證**: JWT + Google OAuth 2.0
- **國際化**: i18next (中文/英文)

## 主要文件
- `index.html`: 主應用程式
- `js/config.js`: 前端配置
- `backend/accounts/`: 用戶認證系統
- `backend/practice/`: 練習功能
- `backend/kana_practice/settings.py`: Django 設定