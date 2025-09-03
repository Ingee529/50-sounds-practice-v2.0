// 應用配置
const appConfig = {
    // API 基礎 URL
    apiBaseUrl: 'http://127.0.0.1:8001/api',
    
    // Google OAuth 配置
    googleClientId: '535798863747-tufngbf1cet3582jq5nmvppr71phicti.apps.googleusercontent.com',
    
    // 是否啟用 Google OAuth
    enableGoogleOAuth: true,
    
    // Google OAuth 額外設定
    googleOAuthSettings: {
        ux_mode: 'popup',
        auto_select: false,
        use_fedcm_for_prompt: false
    }
};

// 檢查是否已配置 Google OAuth
function isGoogleOAuthConfigured() {
    return appConfig.enableGoogleOAuth && 
           appConfig.googleClientId && 
           appConfig.googleClientId !== 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
}