// i18next 配置和翻譯資源

const translations = {
    zh: {
        // 應用標題和導航
        app: {
            title: "🎌 日文五十音練習器",
            guestMode: "遊客模式",
            guestWarning: "您的學習紀錄將不會被保存",
            loginRegister: "登入/註冊",
            backToGuest: "返回遊客模式",
            login: "登入",
            register: "註冊",
            logout: "登出"
        },
        
        // 導航標籤
        nav: {
            practice: "練習模式",
            chart: "五十音表",
            statistics: "學習統計"
        },
        
        // 認證表單
        auth: {
            loginAccount: "帳號或信箱",
            password: "密碼",
            username: "使用者名稱",
            email: "電子郵件",
            displayName: "顯示名稱",
            displayNamePlaceholder: "選填",
            preferredLanguage: "偏好語言",
            confirmPassword: "確認密碼",
            loggingIn: "登入中...",
            registering: "註冊中...",
            googleLogin: "使用 Google 登入",
            googleLoginBtn: "Google 登入",
            orDivider: "或",
            googleLoginSuccess: "使用 Google 登入成功！",
            googleRegisterSuccess: "使用 Google 註冊並登入成功！",
            googleRegisterBtn: "使用 Google 註冊",
            completeProfile: "完成個人資料",
            nickname: "暱稱",
            nicknamePlaceholder: "選填，用於顯示您的名稱",
            birthDate: "出生日期",
            birthDatePlaceholder: "選填",
            skipSetup: "跳過設定",
            saveProfile: "保存並完成",
            passwordReq: {
                length: "至少8個字元",
                letter: "包含英文字母",
                number: "包含數字"
            },
            passwordMismatch: "密碼不一致"
        },
        
        // 假名類型和類別
        kana: {
            types: {
                hiragana: "平假名 (ひらがな)",
                katakana: "片假名 (カタカナ)",
                mixed: "混合練習"
            },
            categories: {
                basic: "清音",
                dakuten: "濁音",
                handakuten: "半濁音",
                youon: "拗音",
                sokuon: "促音",
                chouon: "長音",
                basicWithExample: "清音 (五十音)",
                dakutenWithExample: "濁音 (が,ざ,だ,ば)",
                handakutenWithExample: "半濁音 (ぱ行)",
                youonWithExample: "拗音 (きゃ,しゃ,ちゃ...)",
                dakutenKatakana: "濁音 (ガ,ザ,ダ,バ)",
                handakutenKatakana: "半濁音 (パ行)",
                youonKatakana: "拗音 (キャ,シャ,チャ...)"
            },
            groups: {
                basic: "基本音",
                dakuten: "濁音",
                handakuten: "半濁音",
                youon: "拗音",
                sokuon: "促音",
                chouon: "長音"
            }
        },
        
        // 練習模式
        practice: {
            title: "練習模式",
            selectType: "選擇假名類型：",
            selectCategory: "選擇練習類別：",
            startBtn: "開始練習",
            backBtn: "返回主選單",
            submitAnswer: "提交",
            nextQuestion: "下一題",
            backToSetup: "返回設定",
            restartPractice: "重新練習",
            practiceComplete: "練習完成",
            enterRomaji: "請輸入羅馬字",
            reviewMode: "錯題複習模式",
            selectTypeAlert: "⚠️ 請至少選擇一種練習類型！"
        },
        
        // 五十音表
        chart: {
            title: "五十音表",
            hiragana: "平假名",
            katakana: "片假名",
            sokuonDesc: "小つ (っ)，發音時停頓一拍",
            sokuonExample: "例：きっぷ (kippu)、がっこう (gakkou)",
            chouonDesc: "母音延長，持續兩拍",
            chouonExample: "例：おかあさん (okaasan)、コーヒー (koohii)",
            tableRow: "行",
            yaColumn: "や段",
            yuColumn: "ゆ段",
            yoColumn: "よ段"
        },
        
        // 統計頁面
        stats: {
            title: "學習統計",
            loading: "載入中...",
            loginRequired: "請先登入查看學習統計",
            cannotLoad: "無法載入統計數據",
            totalSessions: "練習次數",
            totalQuestions: "總題數",
            totalCorrect: "正確數",
            avgAccuracy: "平均正確率",
            totalTime: "練習時間(分)",
            totalPractice: "總練習",
            recentSessions: "最近練習記錄",
            categoryPerformance: "各類別表現",
            noRecords: "暫無練習記錄",
            noCategoryStats: "暫無類別統計",
            clickForDetail: "點擊查看詳情 »"
        },
        
        // 練習記錄詳情
        sessionDetail: {
            title: "練習記錄詳情",
            loading: "載入中...",
            practiceType: "練習類型",
            practiceRange: "練習範圍",
            startTime: "開始時間",
            endTime: "結束時間",
            duration: "練習時長",
            result: "成績",
            answerRecords: "答題記錄",
            correct: "正確",
            reviewWrongAnswers: "錯題複習",
            noAnswerRecords: "無答題記錄",
            cannotLoadDetails: "無法載入詳情",
            reviewFailed: "無法開始錯題複習"
        },
        
        // 通用詞彙
        common: {
            questions: "題",
            correct: "正確",
            incorrect: "錯誤",
            score: "分數",
            time: "時間",
            seconds: "秒",
            minutes: "分鐘",
            times: "次",
            loading: "載入中...",
            error: "錯誤",
            success: "成功",
            cancel: "取消",
            confirm: "確認",
            close: "關閉",
            currentQuestion: "當前題目",
            accuracy: "正確率",
            saveRecordsPrompt: "想要保存學習紀錄嗎？",
            registerPrompt: "註冊帳號即可追蹤您的學習進度和統計數據！",
            registerNow: "立即註冊",
            loginToTrack: "請登入或註冊以追蹤學習進度"
        }
    },
    
    en: {
        // 應用標題和導航
        app: {
            title: "🎌 Japanese Kana Practice",
            guestMode: "Guest Mode",
            guestWarning: "Your learning records will not be saved",
            loginRegister: "Login/Register",
            backToGuest: "Back to Guest Mode",
            login: "Login",
            register: "Register",
            logout: "Logout"
        },
        
        // 導航標籤
        nav: {
            practice: "Practice Mode",
            chart: "Kana Chart",
            statistics: "Learning Statistics"
        },
        
        // 認證表單
        auth: {
            loginAccount: "Username or Email",
            password: "Password",
            username: "Username",
            email: "Email",
            displayName: "Display Name",
            displayNamePlaceholder: "Optional",
            preferredLanguage: "Preferred Language",
            confirmPassword: "Confirm Password",
            loggingIn: "Logging in...",
            registering: "Registering...",
            googleLogin: "Sign in with Google",
            googleLoginBtn: "Google Login",
            orDivider: "or",
            googleLoginSuccess: "Successfully logged in with Google!",
            googleRegisterSuccess: "Successfully registered and logged in with Google!",
            googleRegisterBtn: "Sign up with Google",
            completeProfile: "Complete Your Profile",
            nickname: "Nickname",
            nicknamePlaceholder: "Optional, for displaying your name",
            birthDate: "Birth Date",
            birthDatePlaceholder: "Optional",
            skipSetup: "Skip Setup",
            saveProfile: "Save & Complete",
            passwordReq: {
                length: "At least 8 characters",
                letter: "Include letters",
                number: "Include numbers"
            },
            passwordMismatch: "Passwords do not match"
        },
        
        // 假名類型和類別
        kana: {
            types: {
                hiragana: "Hiragana (ひらがな)",
                katakana: "Katakana (カタカナ)",
                mixed: "Mixed Practice"
            },
            categories: {
                basic: "Basic",
                dakuten: "Dakuten",
                handakuten: "Handakuten",
                youon: "Youon",
                sokuon: "Sokuon",
                chouon: "Chouon",
                basicWithExample: "Basic (gojuon)",
                dakutenWithExample: "Dakuten (が,ざ,だ,ば)",
                handakutenWithExample: "Handakuten (ぱ行)",
                youonWithExample: "Youon (きゃ,しゃ,ちゃ...)",
                dakutenKatakana: "Dakuten (ガ,ザ,ダ,バ)",
                handakutenKatakana: "Handakuten (パ行)",
                youonKatakana: "Youon (キャ,シャ,チャ...)"
            },
            groups: {
                basic: "Basic",
                dakuten: "Dakuten",
                handakuten: "Handakuten",
                youon: "Youon",
                sokuon: "Sokuon",
                chouon: "Chouon"
            }
        },
        
        // 練習模式
        practice: {
            title: "Practice Mode",
            selectType: "Select Kana Type:",
            selectCategory: "Select Practice Categories:",
            startBtn: "Start Practice",
            backBtn: "Back to Menu",
            submitAnswer: "Submit",
            nextQuestion: "Next",
            backToSetup: "Back to Setup",
            restartPractice: "Restart Practice",
            practiceComplete: "Practice Complete",
            enterRomaji: "Enter romaji",
            reviewMode: "Wrong Answer Review Mode",
            selectTypeAlert: "⚠️ Please select at least one practice type!"
        },
        
        // 五十音表
        chart: {
            title: "Kana Chart",
            hiragana: "Hiragana",
            katakana: "Katakana",
            sokuonDesc: "Small tsu (っ), pause for one beat",
            sokuonExample: "Example: きっぷ (kippu), がっこう (gakkou)",
            chouonDesc: "Vowel extension, lasts two beats",
            chouonExample: "Example: おかあさん (okaasan), コーヒー (koohii)",
            tableRow: "Row",
            yaColumn: "ya",
            yuColumn: "yu",
            yoColumn: "yo"
        },
        
        // 統計頁面
        stats: {
            title: "Learning Statistics",
            loading: "Loading...",
            loginRequired: "Please login to view learning statistics",
            cannotLoad: "Cannot load statistics",
            totalSessions: "Practice Sessions",
            totalQuestions: "Total Questions",
            totalCorrect: "Correct Answers",
            avgAccuracy: "Average Accuracy",
            totalTime: "Practice Time (min)",
            totalPractice: "Total Practice",
            recentSessions: "Recent Practice Sessions",
            categoryPerformance: "Category Performance",
            noRecords: "No practice records",
            noCategoryStats: "No category statistics",
            clickForDetail: "Click for details »"
        },
        
        // 練習記錄詳情
        sessionDetail: {
            title: "Session Details",
            loading: "Loading...",
            practiceType: "Practice Type",
            practiceRange: "Practice Range",
            startTime: "Start Time",
            endTime: "End Time",
            duration: "Duration",
            result: "Result",
            answerRecords: "Answer Records",
            correct: "Correct",
            reviewWrongAnswers: "Review Wrong Answers",
            noAnswerRecords: "No answer records",
            cannotLoadDetails: "Cannot load details",
            reviewFailed: "Cannot start wrong answer review"
        },
        
        // 通用詞彙
        common: {
            questions: "questions",
            correct: "Correct",
            incorrect: "Incorrect",
            score: "Score",
            time: "Time",
            seconds: "seconds",
            minutes: "minutes",
            times: "times",
            loading: "Loading...",
            error: "Error",
            success: "Success",
            cancel: "Cancel",
            confirm: "Confirm",
            close: "Close",
            currentQuestion: "Current Question",
            accuracy: "Accuracy",
            saveRecordsPrompt: "Want to save your learning records?",
            registerPrompt: "Register an account to track your learning progress and statistics!",
            registerNow: "Register Now",
            loginToTrack: "Please login or register to track learning progress"
        }
    }
};

// i18next 初始化
async function initI18n() {
    const savedLang = localStorage.getItem('language');
    const deviceLang = navigator.language.toLowerCase();
    const defaultLang = savedLang || (deviceLang.startsWith('zh') ? 'zh' : 'en');
    
    await i18next.init({
        lng: defaultLang,
        fallbackLng: 'zh',
        resources: {
            zh: { translation: translations.zh },
            en: { translation: translations.en }
        },
        interpolation: {
            escapeValue: false
        }
    });
    
    // 保存語言設定
    localStorage.setItem('language', i18next.language);
    
    return i18next.language;
}

// 翻譯輔助函數
function t(key, options = {}) {
    return i18next.t(key, options);
}

// 類型翻譯（兼容現有代碼）
function translateType(type) {
    // 先嘗試在 kana.categories 中查找
    if (i18next.exists(`kana.categories.${type}`)) {
        return t(`kana.categories.${type}`);
    }
    // 再嘗試在 kana.groups 中查找
    if (i18next.exists(`kana.groups.${type}`)) {
        return t(`kana.groups.${type}`);
    }
    // 嘗試在 kana.types 中查找
    if (i18next.exists(`kana.types.${type}`)) {
        return t(`kana.types.${type}`);
    }
    // 最後返回原值
    return type;
}

// 語言切換
async function changeLanguage(lng) {
    await i18next.changeLanguage(lng);
    localStorage.setItem('language', lng);
    localStorage.setItem('preferredLanguage', lng);
    updateAllTexts();
    
    // 同步所有語言選擇器（如果同步函數存在）
    if (window.syncAllLanguageSelectors) {
        window.syncAllLanguageSelectors();
    }
}

// 獲取當前語言
function getCurrentLanguage() {
    return i18next.language || 'zh';
}

// 更新所有文字
function updateAllTexts() {
    // 更新應用標題
    const appTitle = document.getElementById('app-title');
    const title = document.getElementById('title');
    const authTitle = document.getElementById('auth-title');
    if (appTitle) appTitle.textContent = t('app.title');
    if (title) title.textContent = t('app.title');
    if (authTitle) authTitle.textContent = t('app.title');
    
    // 更新用戶狀態
    const guestWarning = document.getElementById('guest-warning');
    const loginRegisterBtn = document.getElementById('login-register-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (guestWarning) guestWarning.textContent = t('app.guestWarning');
    if (loginRegisterBtn) loginRegisterBtn.textContent = t('app.loginRegister');
    if (logoutBtn) logoutBtn.textContent = t('app.logout');
    
    // 更新導航標籤
    const practiceTab = document.querySelector('.nav-tab[data-tab="practice"]');
    const chartTab = document.querySelector('.nav-tab[data-tab="chart"]');
    const statsTab = document.querySelector('.nav-tab[data-tab="statistics"]');
    
    if (practiceTab) practiceTab.textContent = t('nav.practice');
    if (chartTab) chartTab.textContent = t('nav.chart');
    if (statsTab) statsTab.textContent = t('nav.statistics');
    
    // 更新具體的導航元素
    const navPractice = document.getElementById('nav-practice');
    const navChart = document.getElementById('nav-chart');
    const navStatistics = document.getElementById('nav-statistics');
    if (navPractice) navPractice.textContent = t('nav.practice');
    if (navChart) navChart.textContent = t('nav.chart');
    if (navStatistics) navStatistics.textContent = t('nav.statistics');
    
    // 更新認證頁面所有硬編碼文字
    const backToGuest = document.getElementById('back-to-guest');
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginIdentifierLabel = document.getElementById('login-identifier-label');
    const loginPasswordLabel = document.getElementById('login-password-label');
    const loginButton = document.getElementById('login-button');
    const registerUsernameLabel = document.getElementById('register-username-label');
    const registerEmailLabel = document.getElementById('register-email-label');
    const registerDisplayNameLabel = document.getElementById('register-display-name-label');
    const registerLanguageLabel = document.getElementById('register-language-label');
    const registerPasswordLabel = document.getElementById('register-password-label');
    const registerPasswordConfirmLabel = document.getElementById('register-password-confirm-label');
    const registerButton = document.getElementById('register-button');
    const displayNameInput = document.getElementById('register-display-name');
    const reqLengthText = document.getElementById('req-length-text');
    const reqLetterText = document.getElementById('req-letter-text');
    const reqNumberText = document.getElementById('req-number-text');
    
    if (backToGuest) backToGuest.textContent = t('app.backToGuest');
    if (loginTab) loginTab.textContent = t('app.login');
    if (registerTab) registerTab.textContent = t('app.register');
    if (loginIdentifierLabel) loginIdentifierLabel.textContent = t('auth.loginAccount');
    if (loginPasswordLabel) loginPasswordLabel.textContent = t('auth.password');
    if (loginButton) loginButton.textContent = t('app.login');
    if (registerUsernameLabel) registerUsernameLabel.textContent = t('auth.username');
    if (registerEmailLabel) registerEmailLabel.textContent = t('auth.email');
    if (registerDisplayNameLabel) registerDisplayNameLabel.textContent = t('auth.displayName');
    if (registerLanguageLabel) registerLanguageLabel.textContent = t('auth.preferredLanguage');
    if (registerPasswordLabel) registerPasswordLabel.textContent = t('auth.password');
    if (registerPasswordConfirmLabel) registerPasswordConfirmLabel.textContent = t('auth.confirmPassword');
    if (registerButton) registerButton.textContent = t('app.register');
    if (displayNameInput) displayNameInput.placeholder = t('auth.displayNamePlaceholder');
    if (reqLengthText) reqLengthText.textContent = t('auth.passwordReq.length');
    if (reqLetterText) reqLetterText.textContent = t('auth.passwordReq.letter');
    if (reqNumberText) reqNumberText.textContent = t('auth.passwordReq.number');
    
    // 更新主應用界面元素
    const guestModeTitle = document.getElementById('guest-mode-title');
    const guestWarningText = document.getElementById('guest-warning-text');
    const loginSignupBtn = document.getElementById('login-signup-btn');
    const statCurrent = document.getElementById('stat-current');
    const statTotal = document.getElementById('stat-total');
    const statScore = document.getElementById('stat-score');
    const statAccuracy = document.getElementById('stat-accuracy');
    const startBtn = document.getElementById('start-btn');
    const answerInput = document.getElementById('answer');
    const submitBtn = document.getElementById('submit-btn');
    const sessionDetailTitle = document.getElementById('session-detail-title');
    
    if (guestModeTitle) guestModeTitle.textContent = t('app.guestMode');
    if (guestWarningText) guestWarningText.textContent = t('app.guestWarning');
    if (loginSignupBtn) loginSignupBtn.textContent = t('app.loginRegister');
    if (statCurrent) statCurrent.textContent = t('common.currentQuestion');
    if (statTotal) statTotal.textContent = t('stats.totalQuestions');
    if (statScore) statScore.textContent = t('stats.totalCorrect');
    if (statAccuracy) statAccuracy.textContent = t('common.accuracy');
    if (startBtn) startBtn.textContent = t('practice.startBtn');
    if (answerInput) answerInput.placeholder = t('practice.enterRomaji');
    if (submitBtn) submitBtn.textContent = t('practice.submitAnswer');
    if (sessionDetailTitle) sessionDetailTitle.textContent = t('sessionDetail.title');
    
    // 更新練習類型選項文字
    const typeHiragana = document.getElementById('type-hiragana');
    const typeKatakana = document.getElementById('type-katakana');
    const typeMixed = document.getElementById('type-mixed');
    if (typeHiragana) typeHiragana.textContent = t('kana.types.hiragana');
    if (typeKatakana) typeKatakana.textContent = t('kana.types.katakana');
    if (typeMixed) typeMixed.textContent = t('kana.types.mixed');
    
    // 更新五十音表頁面的選項文字
    const chartHiraganaLabel = document.getElementById('chart-hiragana-label');
    const chartKatakanaLabel = document.getElementById('chart-katakana-label');
    if (chartHiraganaLabel) chartHiraganaLabel.textContent = t('chart.hiragana');
    if (chartKatakanaLabel) chartKatakanaLabel.textContent = t('chart.katakana');
    
    // 更新促音和長音說明（在圖表頁面）
    const sokuonDesc = document.getElementById('sokuon-desc');
    const sokuonExample = document.getElementById('sokuon-example');
    const chouonDesc = document.getElementById('chouon-desc');
    const chouonExample = document.getElementById('chouon-example');
    if (sokuonDesc) sokuonDesc.textContent = t('chart.sokuonDesc');
    if (sokuonExample) sokuonExample.textContent = t('chart.sokuonExample');
    if (chouonDesc) chouonDesc.textContent = t('chart.chouonDesc');
    if (chouonExample) chouonExample.textContent = t('chart.chouonExample');
    
    // 更新當前顯示的標籤內容
    updateCurrentTabTexts();
    
    // 更新動態創建的練習元素
    updateDynamicPracticeElements();
}

// 更新當前標籤的文字
function updateCurrentTabTexts() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    const tabId = activeTab.id;
    
    switch(tabId) {
        case 'practice-tab':
            updatePracticeTexts();
            break;
        case 'chart-tab':
            updateChartTexts();
            break;
        case 'statistics-tab':
            updateStatisticsTexts();
            break;
        case 'auth-tab':
            updateAuthTexts();
            break;
    }
}

// 更新練習頁面文字
function updatePracticeTexts() {
    const practiceTitle = document.getElementById('practice-title');
    const typeHiragana = document.getElementById('type-hiragana');
    const typeKatakana = document.getElementById('type-katakana');
    const typeMixed = document.getElementById('type-mixed');
    const startBtn = document.getElementById('start-practice-btn');
    const quizTitle = document.getElementById('quiz-title');
    const submitAnswerBtn = document.getElementById('submit-answer-btn');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const backToSetupBtn = document.getElementById('back-to-setup-btn');
    const restartBtn = document.getElementById('restart-practice-btn');
    const resultTitle = document.getElementById('result-title');
    const answerInput = document.getElementById('answer-input');
    
    if (practiceTitle) practiceTitle.textContent = t('practice.title');
    if (typeHiragana) typeHiragana.textContent = t('kana.types.hiragana');
    if (typeKatakana) typeKatakana.textContent = t('kana.types.katakana');
    if (typeMixed) typeMixed.textContent = t('kana.types.mixed');
    if (startBtn) startBtn.textContent = t('practice.startBtn');
    if (quizTitle) quizTitle.textContent = t('practice.title');
    if (submitAnswerBtn) submitAnswerBtn.textContent = t('practice.submitAnswer');
    if (nextQuestionBtn) nextQuestionBtn.textContent = t('practice.nextQuestion');
    if (backToSetupBtn) backToSetupBtn.textContent = t('practice.backToSetup');
    if (restartBtn) restartBtn.textContent = t('practice.restartPractice');
    if (resultTitle) resultTitle.textContent = t('practice.practiceComplete');
    if (answerInput) answerInput.placeholder = t('practice.enterRomaji');
    
    // 更新練習類別標籤 - 使用帶示例的版本
    const catBasic = document.getElementById('cat-basic');
    const catDakuten = document.getElementById('cat-dakuten');
    const catHandakuten = document.getElementById('cat-handakuten');
    const catYouon = document.getElementById('cat-youon');
    const groupDakuten = document.getElementById('group-dakuten');
    const groupHandakuten = document.getElementById('group-handakuten');
    const groupYouon = document.getElementById('group-youon');
    
    if (catBasic) catBasic.textContent = t('kana.categories.basicWithExample');
    if (catDakuten) catDakuten.textContent = t('kana.categories.dakutenWithExample');
    if (catHandakuten) catHandakuten.textContent = t('kana.categories.handakutenWithExample');
    if (catYouon) catYouon.textContent = t('kana.categories.youonWithExample');
    if (groupDakuten) groupDakuten.textContent = t('kana.groups.dakuten');
    if (groupHandakuten) groupHandakuten.textContent = t('kana.groups.handakuten');
    if (groupYouon) groupYouon.textContent = t('kana.groups.youon');
    
    // 更新其他群組標題
    const groupBasic = document.getElementById('group-basic');
    const groupSokuon = document.getElementById('group-sokuon');
    const groupChouon = document.getElementById('group-chouon');
    if (groupBasic) groupBasic.textContent = t('kana.groups.basic');
    if (groupSokuon) groupSokuon.textContent = t('kana.groups.sokuon');
    if (groupChouon) groupChouon.textContent = t('kana.groups.chouon');
}

// 更新五十音表文字
function updateChartTexts() {
    const chartTitle = document.querySelector('#chart-tab h2');
    
    if (chartTitle) chartTitle.textContent = t('chart.title');
    
    // 更新圖表選項標籤
    const chartHiraganaLabel = document.getElementById('chart-hiragana-label');
    const chartKatakanaLabel = document.getElementById('chart-katakana-label');
    
    if (chartHiraganaLabel) chartHiraganaLabel.textContent = t('chart.hiragana');
    if (chartKatakanaLabel) chartKatakanaLabel.textContent = t('chart.katakana');
    
    // 更新促音和長音說明
    const groupSokuon = document.getElementById('group-sokuon');
    const groupChouon = document.getElementById('group-chouon');
    const sokuonDesc = document.getElementById('sokuon-desc');
    const sokuonExample = document.getElementById('sokuon-example');
    const chouonDesc = document.getElementById('chouon-desc');
    const chouonExample = document.getElementById('chouon-example');
    
    if (groupSokuon) groupSokuon.textContent = t('kana.groups.sokuon');
    if (groupChouon) groupChouon.textContent = t('kana.groups.chouon');
    if (sokuonDesc) sokuonDesc.textContent = t('chart.sokuonDesc');
    if (sokuonExample) sokuonExample.textContent = t('chart.sokuonExample');
    if (chouonDesc) chouonDesc.textContent = t('chart.chouonDesc');
    if (chouonExample) chouonExample.textContent = t('chart.chouonExample');
}

// 更新統計頁面文字
function updateStatisticsTexts() {
    const totalSessionsLabel = document.getElementById('total-sessions-label');
    const totalQuestionsLabel = document.getElementById('total-questions-label');
    const totalCorrectLabel = document.getElementById('total-correct-label');
    const avgAccuracyLabel = document.getElementById('avg-accuracy-label');
    const totalTimeLabel = document.getElementById('total-time-label');
    const recentSessionsTitle = document.getElementById('recent-sessions-title');
    const categoryStatsTitle = document.getElementById('category-stats-title');
    
    if (totalSessionsLabel) totalSessionsLabel.textContent = t('stats.totalSessions');
    if (totalQuestionsLabel) totalQuestionsLabel.textContent = t('stats.totalQuestions');
    if (totalCorrectLabel) totalCorrectLabel.textContent = t('stats.totalCorrect');
    if (avgAccuracyLabel) avgAccuracyLabel.textContent = t('stats.avgAccuracy');
    if (totalTimeLabel) totalTimeLabel.textContent = t('stats.totalTime');
    if (recentSessionsTitle) recentSessionsTitle.textContent = t('stats.recentSessions');
    if (categoryStatsTitle) categoryStatsTitle.textContent = t('stats.categoryPerformance');
    
    // 練習時的統計標籤
    const statTotal = document.getElementById('stat-total');
    const statScore = document.getElementById('stat-score');
    if (statTotal) statTotal.textContent = t('stats.totalQuestions');
    if (statScore) statScore.textContent = t('stats.totalCorrect');
}

// 更新認證頁面文字
function updateAuthTexts() {
    const authTitle = document.getElementById('auth-title');
    const loginModeBtn = document.getElementById('login-mode-btn');
    const registerModeBtn = document.getElementById('register-mode-btn');
    
    if (authTitle) authTitle.textContent = t('app.loginRegister');
    if (loginModeBtn) loginModeBtn.textContent = t('app.login');
    if (registerModeBtn) registerModeBtn.textContent = t('app.register');
    
    // 更新表單標籤
    const loginIdentifierLabel = document.querySelector('label[for="login-identifier"]');
    const loginPasswordLabel = document.querySelector('label[for="login-password"]');
    const loginSubmitBtn = document.getElementById('login-submit-btn');
    
    if (loginIdentifierLabel) loginIdentifierLabel.textContent = t('auth.loginAccount');
    if (loginPasswordLabel) loginPasswordLabel.textContent = t('auth.password');
    if (loginSubmitBtn) loginSubmitBtn.textContent = t('app.login');
    
    // 更新註冊表單
    const registerLabels = [
        { id: 'register-username', key: 'auth.username' },
        { id: 'register-email', key: 'auth.email' },
        { id: 'register-display-name', key: 'auth.displayName' },
        { id: 'register-password', key: 'auth.password' },
        { id: 'register-confirm-password', key: 'auth.confirmPassword' },
        { id: 'register-language', key: 'auth.preferredLanguage' }
    ];
    
    registerLabels.forEach(({ id, key }) => {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label) label.textContent = t(key);
    });
    
    const registerSubmitBtn = document.getElementById('register-submit-btn');
    const displayNameInput = document.getElementById('register-display-name');
    
    if (registerSubmitBtn) registerSubmitBtn.textContent = t('app.register');
    if (displayNameInput) displayNameInput.placeholder = t('auth.displayNamePlaceholder');
    
    // 更新密碼要求
    const requirements = document.querySelectorAll('.password-requirement');
    if (requirements.length >= 3) {
        requirements[0].textContent = t('auth.passwordReq.length');
        requirements[1].textContent = t('auth.passwordReq.letter');
        requirements[2].textContent = t('auth.passwordReq.number');
    }
    
    // 更新 Google OAuth 元素
    const oauthDividerText = document.getElementById('oauth-divider-text');
    const oauthDividerTextRegister = document.getElementById('oauth-divider-text-register');
    if (oauthDividerText) oauthDividerText.textContent = t('auth.orDivider');
    if (oauthDividerTextRegister) oauthDividerTextRegister.textContent = t('auth.orDivider');
    
    // 動態更新註冊語言選擇器選項
    const registerLanguageSelect = document.getElementById('register-language');
    if (registerLanguageSelect) {
        const currentValue = registerLanguageSelect.value;
        registerLanguageSelect.innerHTML = '';
        
        const zhOption = document.createElement('option');
        zhOption.value = 'zh';
        zhOption.textContent = getCurrentLanguage() === 'en' ? 'Chinese' : '中文';
        
        const enOption = document.createElement('option');
        enOption.value = 'en';
        enOption.textContent = 'English';
        
        registerLanguageSelect.appendChild(zhOption);
        registerLanguageSelect.appendChild(enOption);
        registerLanguageSelect.value = currentValue || getCurrentLanguage();
    }
}

// 更新動態創建的練習元素
function updateDynamicPracticeElements() {
    // 更新練習模式中動態創建的元素
    const quizHeader = document.getElementById('quiz-header');
    if (quizHeader) {
        const backButton = quizHeader.querySelector('button');
        const title = quizHeader.querySelector('h2');
        if (backButton) backButton.innerHTML = "← " + t('practice.backBtn');
        if (title) title.textContent = t('practice.title');
    }
    
    // 更新動態創建的答案輸入框和提交按鈕
    const answerInput = document.getElementById('answer');
    const submitBtn = document.getElementById('submit-btn');
    if (answerInput) answerInput.placeholder = t('practice.enterRomaji');
    if (submitBtn) submitBtn.textContent = t('practice.submitAnswer');
    
    // 更新統計標籤文字 (不是數值)
    const statCurrent = document.getElementById('stat-current');
    const statTotal = document.getElementById('stat-total');
    const statScore = document.getElementById('stat-score');
    const statAccuracy = document.getElementById('stat-accuracy');
    if (statCurrent) statCurrent.textContent = t('common.currentQuestion');
    if (statTotal) statTotal.textContent = t('stats.totalQuestions');
    if (statScore) statScore.textContent = t('stats.totalCorrect');
    if (statAccuracy) statAccuracy.textContent = t('common.accuracy');
    
    // 更新練習頁面中的語言選擇器標籤
    const languageLabel = document.getElementById('language-label');
    if (languageLabel) languageLabel.textContent = '🌐 Language:';
    
    // 更新所有可能的練習相關按鈕文字
    const startBtn = document.getElementById('start-btn');
    if (startBtn && startBtn.style.display !== 'none') {
        startBtn.textContent = t('practice.startBtn');
    }
    
    // 更新練習模式中的語言選擇器
    const practiceLanguageSelect = document.getElementById('practice-language');
    if (practiceLanguageSelect) {
        practiceLanguageSelect.value = getCurrentLanguage();
    }
    
    // 更新錯題複習模式中的語言選擇器
    const reviewLanguageSelect = document.getElementById('review-language');
    if (reviewLanguageSelect) {
        reviewLanguageSelect.value = getCurrentLanguage();
    }
    
    // 如果處於錯題複習模式，調用專門的更新函數
    if (window.updateReviewModeTexts && document.getElementById('review-language')) {
        window.updateReviewModeTexts();
    }
}