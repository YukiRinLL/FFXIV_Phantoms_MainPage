# FFXIV Phantoms FC 主页 — 代码重复问题专项分析报告

**生成日期**: 2026-07-30
**最后更新**: 2026-07-30（去重执行完成）
**分析范围**: 全项目 HTML / JS 文件
**分析目标**: 识别并量化代码重复，提出去重方案

---

## 零、执行结果总览（已完成的去重工作）

| 重复类型 | 原涉及文件数 | 已修改文件数 | 状态 |
|----------|-------------|-------------|------|
| Supabase API 配置硬编码 | 24 | 22 | ✅ 已完成 |
| `getCookie()` 函数 | 8 | 8 | ✅ 已完成 |
| 后端 API URL 硬编码 | 15 | 12 | ✅ 已完成 |
| `generateUUID()` 函数 | 2 | 2 | ✅ 已完成 |
| `cacheImage()` / `formatFileSize()` | 5 | 5 | ✅ 已完成 |
| jQuery `.load()` 菜单加载模式 | 30+ | - | ⏳ 待后续处理 |
| `tools/` 下 HTML 模板克隆 | 3 | - | ⏳ 待后续处理 |
| Kook/Oopz 页面克隆 | 2 | - | ⏳ 待后续处理 |

**剩余硬编码 API Key 位置**（合理保留）：
- `assets/js/config.js` — 配置中心（唯一真实来源）
- `lib/discussbase/.env` — 环境变量文件
- `.github/workflows/keep-supabase-active.yml` — CI/CD 脚本

---

## 一、重复问题统计总览（原始状态）

| 重复类型 | 涉及文件数 | 重复次数 | 严重程度 |
|----------|-----------|---------|----------|
| Supabase API 配置硬编码 | 24 | 24+ | 🔴 严重 |
| `getCookie()` 函数 | 8 | 8 | 🟡 中等 |
| 后端 API URL 硬编码 | 15 | 20+ | 🟡 中等 |
| `tools/` 下 HTML 模板克隆 | 3 | 3 | 🟠 较高 |
| Kook/Oopz 页面克隆 | 2 | 2 | 🟠 较高 |
| `generateUUID()` 函数 | 2 | 2 | 🟡 中等 |
| `cacheImage()` / `formatFileSize()` | 3 | 5 | 🟡 中等 |
| jQuery `.load()` 菜单加载模式 | 30+ | 30+ | 🟠 较高 |
| Font Awesome 引用方式不统一 | 全项目 | - | 🟢 较低 |
| 注释代码/废弃文件 | 10+ | - | 🟢 较低 |

---

## 二、详细重复清单

### 2.1 🔴 Supabase API 配置硬编码（最严重）

**涉及文件（24 个）**:

| # | 文件路径 | 重复内容 |
|---|---------|---------|
| 1 | [visitor-tracker.js](file:///d:/FFXIV_Phantoms_MainPage/visitor-tracker.js) | `https://dshmbsawwrbuycnivcjs.supabase.co` + Anon Key |
| 2 | [messageBoard.js](file:///d:/FFXIV_Phantoms_MainPage/messageBoard/asserts/js/messageBoard.js) | API Key + Authorization Bearer Token |
| 3 | [readMessage.js](file:///d:/FFXIV_Phantoms_MainPage/messageBoard/asserts/js/readMessage.js) | 同上 |
| 4 | [registerUser.js](file:///d:/FFXIV_Phantoms_MainPage/messageBoard/asserts/js/registerUser.js) | 同上 |
| 5 | [readMessageWithProfile.js](file:///d:/FFXIV_Phantoms_MainPage/messageBoard/asserts/js/readMessageWithProfile.js) | 同上 |
| 6 | [updateProfilie.html](file:///d:/FFXIV_Phantoms_MainPage/messageBoard/user_conf/updateProfilie.html) | 同上 |
| 7 | [userListWithProfile.html](file:///d:/FFXIV_Phantoms_MainPage/messageBoard/user_conf/userListWithProfile.html) | 同上 |
| 8 | [QQchat.js](file:///d:/FFXIV_Phantoms_MainPage/Napcat/QQchat.js) | 同上 |
| 9 | [editableTable.js](file:///d:/FFXIV_Phantoms_MainPage/expeditionary/editableTable.js) | 同上 |
| 10 | [editableTable-mobile.html](file:///d:/FFXIV_Phantoms_MainPage/expeditionary/editableTable-mobile.html) | 同上 |
| 11 | [chatRecords_formed.html](file:///d:/FFXIV_Phantoms_MainPage/chatRecords_formed.html) | 同上 |
| 12 | [SMS_forward.html](file:///d:/FFXIV_Phantoms_MainPage/SMS_forward.html) | 同上 |
| 13 | [visitor-stats.html](file:///d:/FFXIV_Phantoms_MainPage/visitor-stats.html) | 同上 |
| 14 | [storage/files.html](file:///d:/FFXIV_Phantoms_MainPage/storage/files.html) | 同上 |
| 15 | [storage/resumable-upload-uppy.html](file:///d:/FFXIV_Phantoms_MainPage/storage/resumable-upload-uppy.html) | 同上 |
| 16 | [additions/foot/login.html](file:///d:/FFXIV_Phantoms_MainPage/additions/foot/login.html) | 同上 |
| 17 | [additions/foot/profile-round.html](file:///d:/FFXIV_Phantoms_MainPage/additions/foot/profile-round.html) | 同上 |
| 18 | [album/uploadImage.html](file:///d:/FFXIV_Phantoms_MainPage/album/uploadImage.html) | 同上 |
| 19 | [album/showImages.html](file:///d:/FFXIV_Phantoms_MainPage/album/showImages.html) | 同上 |
| 20 | [album/dynamic/showImages.html](file:///d:/FFXIV_Phantoms_MainPage/album/dynamic/showImages.html) | 同上 |
| 21 | [album/dynamic/uploadImage.html](file:///d:/FFXIV_Phantoms_MainPage/album/dynamic/uploadImage.html) | 同上 |
| 22 | [lib/discussbase/utils/supabaseClient.js](file:///d:/FFXIV_Phantoms_MainPage/lib/discussbase/utils/supabaseClient.js) | 使用 JWT Secret（更严重） |
| 23 | [lib/discussbase/utils/supabaseClientAdmin.js](file:///d:/FFXIV_Phantoms_MainPage/lib/discussbase/utils/supabaseClientAdmin.js) | 使用 Service Key |
| 24 | [.github/workflows/keep-supabase-active.yml](file:///d:/FFXIV_Phantoms_MainPage/.github/workflows/keep-supabase-active.yml) | CI/CD 中硬编码 |

**重复代码量**: 每个文件约 5-10 行配置代码，总计约 **150+ 行**重复

---

### 2.2 🟡 `getCookie()` 函数重复（8 处）

**涉及文件**:

| # | 文件路径 | 行号 |
|---|---------|------|
| 1 | [Napcat/QQchat.js](file:///d:/FFXIV_Phantoms_MainPage/Napcat/QQchat.js#L395) | 395 |
| 2 | [messageBoard.js](file:///d:/FFXIV_Phantoms_MainPage/messageBoard/asserts/js/messageBoard.js#L121) | 121 |
| 3 | [registerUser.js](file:///d:/FFXIV_Phantoms_MainPage/messageBoard/asserts/js/registerUser.js#L125) | 125 |
| 4 | [readMessageWithProfile.js](file:///d:/FFXIV_Phantoms_MainPage/messageBoard/asserts/js/readMessageWithProfile.js#L119) | 119 |
| 5 | [profile-round.html](file:///d:/FFXIV_Phantoms_MainPage/additions/foot/profile-round.html#L399) | 399 |
| 6 | [updateProfilie.html](file:///d:/FFXIV_Phantoms_MainPage/messageBoard/user_conf/updateProfilie.html#L224) | 224 |
| 7 | [chatRecords_formed.html](file:///d:/FFXIV_Phantoms_MainPage/chatRecords_formed.html#L1552) | 1552 |
| 8 | [cookie_test.html](file:///d:/FFXIV_Phantoms_MainPage/cookie_test.html#L22) | 22 |

**重复代码**:
```javascript
// 每个文件中都有几乎相同的实现
function getCookie(name) {
    let cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name + "=") == 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return "";
}
```

**重复代码量**: 每处约 8 行，总计约 **64 行**重复

---

### 2.3 🟡 后端 API URL 硬编码（20+ 处）

**涉及文件**:

| # | 文件路径 | 行号 | URL |
|---|---------|------|-----|
| 1 | [FC-Card.html](file:///d:/FFXIV_Phantoms_MainPage/FC-Card.html#L203) | 203 | `.../api/risingstones/guild-info` |
| 2 | [guild-member-dynamic.html](file:///d:/FFXIV_Phantoms_MainPage/risingstones/guild-member-dynamic.html#L716) | 716 | `.../api/risingstones/guild-member-dynamic` |
| 3 | [guild-member-dynamic-backup.html](file:///d:/FFXIV_Phantoms_MainPage/risingstones/guild-member-dynamic-backup.html#L715) | 715 | 同上 |
| 4 | [guild-members.html](file:///d:/FFXIV_Phantoms_MainPage/risingstones/guild-members.html#L247) | 247 | `.../api/risingstones/user-info` |
| 5 | [guild-members.html](file:///d:/FFXIV_Phantoms_MainPage/risingstones/guild-members.html#L466) | 466 | `.../api/risingstones/guild-member` |
| 6 | [guild-member_formed.html](file:///d:/FFXIV_Phantoms_MainPage/risingstones/guild-member_formed.html#L528) | 528 | `.../api/risingstones/user-info` |
| 7 | [guild-member_formed.html](file:///d:/FFXIV_Phantoms_MainPage/risingstones/guild-member_formed.html#L731) | 731 | `.../api/risingstones/guild-member` |
| 8 | [guild-members-TestingDetail.html](file:///d:/FFXIV_Phantoms_MainPage/risingstones/guild-members-TestingDetail.html#L189) | 189 | `.../api/risingstones/guild-member` |
| 9 | [QQchat.js](file:///d:/FFXIV_Phantoms_MainPage/Napcat/QQchat.js#L116) | 116 | `.../onebot/latest` |
| 10 | [QQchat.js](file:///d:/FFXIV_Phantoms_MainPage/Napcat/QQchat.js#L457) | 457 | `.../onebot/send-to-group` |
| 11 | [chatRecords.html](file:///d:/FFXIV_Phantoms_MainPage/Napcat/chatRecords.html#L58) | 58 | `.../onebot/latest/text` |
| 12 | [chatRecords_formed.html](file:///d:/FFXIV_Phantoms_MainPage/chatRecords_formed.html#L1241) | 1241 | `.../onebot/latest` |
| 13 | [chatRecords_formed.html](file:///d:/FFXIV_Phantoms_MainPage/chatRecords_formed.html#L1636) | 1636 | `.../onebot/send-to-group` |
| 14 | [getMonthlyStats.html](file:///d:/FFXIV_Phantoms_MainPage/Napcat/getMonthlyStats.html#L829) | 829 | `.../onebot/monthly-stats` |
| 15 | [getMonthlyStats.html](file:///d:/FFXIV_Phantoms_MainPage/Napcat/getMonthlyStats.html#L830) | 830 | `.../onebot/user-stats` |
| 16 | [sendGroupMessage.html](file:///d:/FFXIV_Phantoms_MainPage/Napcat/sendGroupMessage.html#L146) | 146 | `.../onebot/send-to-group` |
| 17 | [TTS.html](file:///d:/FFXIV_Phantoms_MainPage/Napcat/TTS.html#L76) | 76 | `.../onebot/latest` |
| 18 | [backend-login.html](file:///d:/FFXIV_Phantoms_MainPage/backend-login.html#L296) | 296 | `...` (baseUrl) |
| 19 | [game.js](file:///d:/FFXIV_Phantoms_MainPage/phantom_canvas_game/js/game.js#L105) | 105 | `.../onebot/latest/text` |
| 20 | [Recruitment.html](file:///d:/FFXIV_Phantoms_MainPage/Littlenightmare/Recruitment.html#L1046) | 1046 | `.../api/recruitments` |

**重复代码量**: 每个 URL 硬编码约 1-2 行，总计约 **25+ 行**重复，但更重要的是维护成本

---

### 2.4 🟠 `tools/` 下 HTML 模板克隆（3 个文件结构 90% 相同）

**涉及文件**:

| # | 文件路径 | 唯一差异 |
|---|---------|---------|
| 1 | [tools/wakingsands.html](file:///d:/FFXIV_Phantoms_MainPage/tools/wakingsands.html) | iframe src: `https://strings.wakingsands.com/` |
| 2 | [tools/crafter.html](file:///d:/FFXIV_Phantoms_MainPage/tools/crafter.html) | iframe src: `https://yyyy.games/fco/#/simulator` |
| 3 | [tools/what-zc-today.html](file:///d:/FFXIV_Phantoms_MainPage/tools/what-zc-today.html) | iframe src: `https://nekowoods.github.io/what-zc-today/` |

**相同部分（约 85 行）**:
- `<head>` 结构完全相同（CSS 引入顺序、Meta 标签）
- jQuery `.load()` 菜单加载逻辑完全相同
- Footer 结构完全相同
- Mobirise 底部脚本完全相同

**唯一差异**: `<iframe src="...">` 和工具来源说明文字

**重复代码量**: 每个文件约 100 行，3 个文件约 **255 行**完全重复

---

### 2.5 🟠 Kook.html / Oopz.html 页面克隆（2 个文件 95% 相同）

**涉及文件**:

| # | 文件路径 | 唯一差异 |
|---|---------|---------|
| 1 | [Kook.html](file:///d:/FFXIV_Phantoms_MainPage/Kook.html) | iframe src: `https://kaihei.co/Pz0Q4r` |
| 2 | [Oopz.html](file:///d:/FFXIV_Phantoms_MainPage/Oopz.html) | iframe src: `https://oopz.cn/i/9XgUt9` |

**相同部分（约 120 行）**:
- `<head>` 结构完全相同
- CSS `.header1`、`.mbr-overlay`、`iframe` 样式完全相同
- jQuery `.load()` 菜单加载逻辑完全相同
- `history.pushState` SPA 切换逻辑完全相同
- Footer 结构完全相同
- Mobirise 底部脚本完全相同

**唯一差异**: iframe src 和工具来源说明

**重复代码量**: 每个文件约 130 行，2 个文件约 **120 行**完全重复

---

### 2.6 🟡 工具函数重复

#### `generateUUID()` 函数（2 处）

| # | 文件路径 | 行号 |
|---|---------|------|
| 1 | [expeditionary/editableTable.js](file:///d:/FFXIV_Phantoms_MainPage/expeditionary/editableTable.js#L9) | 9-15 |
| 2 | [expeditionary/editableTable-mobile.html](file:///d:/FFXIV_Phantoms_MainPage/expeditionary/editableTable-mobile.html#L859) | 859-865 |

**重复代码量**: 约 **14 行**

#### `cacheImage()` 函数（3 处）

| # | 文件路径 | 行号 |
|---|---------|------|
| 1 | [Napcat/QQchat.js](file:///d:/FFXIV_Phantoms_MainPage/Napcat/QQchat.js#L24) | 24-26 |
| 2 | [chatRecords_formed.html](file:///d:/FFXIV_Phantoms_MainPage/chatRecords_formed.html#L1156) | 1156-1158 |
| 3 | [guild-members-TestingDetail.html](file:///d:/FFXIV_Phantoms_MainPage/risingstones/guild-members-TestingDetail.html#L80) | 80-82 |

#### `formatFileSize()` 函数（2 处）

| # | 文件路径 | 行号 |
|---|---------|------|
| 1 | [Napcat/QQchat.js](file:///d:/FFXIV_Phantoms_MainPage/Napcat/QQchat.js#L302) | 302-308 |
| 2 | [chatRecords_formed.html](file:///d:/FFXIV_Phantoms_MainPage/chatRecords_formed.html#L1465) | 1465-1471 |

---

### 2.7 🟠 jQuery `.load()` 菜单加载模式重复

**涉及文件（30+）**:

几乎每个子页面都包含以下代码模式：
```javascript
<script src="./assets/web/assets/jquery/jquery.min.js"></script>
<script>
    $(document).ready(function () {
        $("#menu").load("./additions/menu/menu1.html", function() {
            adjustLinks();
            window.addEventListener('resize', adjustLinks);
        });
    });
</script>
```

**问题**: 
- 每次页面加载都重新加载菜单 HTML
- `adjustLinks()` 函数定义在 `menu1.html` 中，依赖全局作用域
- 无缓存机制

**重复代码量**: 每个文件约 8 行，30+ 文件约 **240+ 行**

---

### 2.8 🟢 Font Awesome 引用方式不统一

**两种引用方式并存**:

| 方式 | 使用文件 |
|------|---------|
| 本地文件 `<link rel="stylesheet" href="assets/web/assets/fontawesome.css">` | Kook.html, Oopz.html, Napcat/* |
| CDN `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">` | getMonthlyStats.html, editableTable-mobile.html |
| CDN `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">` | FC-Card.html |

**问题**: 3 种不同版本的 Font Awesome（本地版、6.4.0 CDN、6.5.0 CDN），增加加载时间和维护成本

---

### 2.9 🟢 注释代码/废弃文件

**废弃文件**:
- `risingstones/guild-member-dynamic-backup.html` — 备份文件
- `risingstones/guild-member_formed.html` — 重构版本
- `risingstones/guild-members-TestingDetail.html` — 测试版本
- `chatRecords_formed.html` — 重构版本
- `cookie_test.html` — 测试文件

**大段注释代码**:
- [index.html](file:///d:/FFXIV_Phantoms_MainPage/index.html) — 约 200 行注释的旧视频播放器代码
- [what-zc-today.html](file:///d:/FFXIV_Phantoms_MainPage/tools/what-zc-today.html) — 约 40 行注释的旧 iframe 实现
- [messageBoard.js](file:///d:/FFXIV_Phantoms_MainPage/messageBoard/asserts/js/messageBoard.js) — 遮罩层代码注释
- [QQchat.js](file:///d:/FFXIV_Phantoms_MainPage/Napcat/QQchat.js) — 音频处理代码注释

---

## 三、重复代码量化总结

| 类别 | 重复次数 | 估算重复行数 | 风险等级 |
|------|---------|-------------|---------|
| Supabase 配置硬编码 | 24 | ~150 | 🔴 严重 |
| `getCookie()` 函数 | 8 | ~64 | 🟡 中等 |
| API URL 硬编码 | 20 | ~25 | 🟡 中等 |
| 工具页面模板克隆 | 3 | ~255 | 🟠 较高 |
| Kook/Oopz 克隆 | 2 | ~120 | 🟠 较高 |
| `generateUUID()` | 2 | ~14 | 🟡 中等 |
| `cacheImage()` / `formatFileSize()` | 5 | ~30 | 🟡 中等 |
| jQuery `.load()` 模式 | 30+ | ~240 | 🟠 较高 |
| 注释/废弃代码 | 10+ | ~500 | 🟢 较低 |
| **总计** | **104+** | **~1400+** | - |

---

## 四、去重解决方案

### 方案一：创建共享模块（推荐）

#### 4.1 创建 `assets/js/config.js` — 统一配置中心

```javascript
/**
 * 项目全局配置
 * 所有配置在此处集中管理，其他文件通过引用此文件获取
 */

// Supabase 配置
export const SUPABASE = {
    url: 'https://dshmbsawwrbuycnivcjs.supabase.co',
    anonKey: 'YOUR_ANON_KEY', // 应从环境变量获取
    serviceKey: 'YOUR_SERVICE_KEY' // 仅服务端使用
};

// 后端 API 配置
export const API = {
    baseUrl: 'https://phantoms-backend.onrender.com',
    endpoints: {
        guildInfo: '/api/risingstones/guild-info',
        guildMember: '/api/risingstones/guild-member',
        guildMemberDynamic: '/api/risingstones/guild-member-dynamic',
        userInfo: '/api/risingstones/user-info',
        onebotLatest: '/onebot/latest',
        onebotSendGroup: '/onebot/send-to-group',
        onebotMonthlyStats: '/onebot/monthly-stats',
        onebotUserStats: '/onebot/user-stats',
        recruitments: '/api/recruitments'
    }
};

// 图片代理配置
export const PROXY = {
    image: 'https://images.weserv.nl/?url=',
    // audio 占位符，实际部署时替换
};

// API Key（仅前端可见，暴露 RLS 限制）
// 注意：此 key 应仅限匿名可读权限
export const ANON_KEY = 'YOUR_ANON_KEY';
```

#### 4.2 创建 `assets/js/utils.js` — 公共工具函数

```javascript
/**
 * 公共工具函数库
 */

// Cookie 操作
export const CookieUtil = {
    get(name) {
        const match = document.cookie.split(';')
            .map(c => c.trim())
            .find(c => c.startsWith(name + '='));
        return match ? match.substring(name.length + 1) : '';
    },
    set(name, value, options = {}) {
        let cookie = `${name}=${value}; path=/`;
        if (options.expires) {
            cookie += `; expires=${new Date(options.expires).toUTCString()}`;
        }
        if (options.secure) cookie += '; secure';
        if (options.sameSite) cookie += `; samesite=${options.sameSite}`;
        document.cookie = cookie;
    },
    delete(name) {
        this.set(name, '', { expires: new Date(0) });
    }
};

// UUID 生成
export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// 文件大小格式化
export function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 图片缓存
export function cacheImage(proxyUrl, originalUrl) {
    try {
        localStorage.setItem(originalUrl, proxyUrl);
    } catch (e) {
        console.warn('localStorage 不可用:', e);
    }
}

// HTML 转义（防 XSS）
export function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// 安全的 innerHTML 设置
export function setSafeHtml(element, content) {
    element.textContent = content;
}

// 轮询请求（带退避策略）
export async function pollRequest(url, options = {}) {
    const {
        interval = 5000,
        maxRetries = 10,
        backoffFactor = 1.5,
        onUpdate,
        onError
    } = options;
    
    let currentInterval = interval;
    let retryCount = 0;
    
    const doFetch = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            onUpdate?.(data);
            retryCount = 0;
            currentInterval = interval;
        } catch (error) {
            retryCount++;
            if (retryCount >= maxRetries) {
                onError?.(error);
                return;
            }
            currentInterval *= backoffFactor;
            onError?.(error);
        }
        setTimeout(doFetch, currentInterval);
    };
    
    doFetch();
}
```

#### 4.3 创建 `assets/js/supabase-client.js` — Supabase 封装

```javascript
/**
 * Supabase 客户端封装
 * 统一所有 Supabase API 调用
 */
import { SUPABASE, ANON_KEY } from './config.js';

const HEADERS = {
    'apikey': ANON_KEY,
    'Authorization': `Bearer ${ANON_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal'
};

export const SupabaseClient = {
    // 查询
    async from(table, select = '*', filters = {}) {
        let url = `${SUPABASE.url}/rest/v1/${table}?select=${select}`;
        for (const [key, value] of Object.entries(filters)) {
            url += `&${key}=eq.${value}`;
        }
        const response = await fetch(url, { headers: HEADERS });
        if (!response.ok) throw new Error(`Supabase 查询失败: ${response.status}`);
        return response.json();
    },
    
    // 插入
    async insert(table, data) {
        const response = await fetch(`${SUPABASE.url}/rest/v1/${table}`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`Supabase 插入失败: ${response.status}`);
        return response.json();
    },
    
    // 更新
    async update(table, data, filter) {
        let url = `${SUPABASE.url}/rest/v1/${table}`;
        if (filter) {
            const params = new URLSearchParams(filter);
            url += `?${params.toString()}`;
        }
        const response = await fetch(url, {
            method: 'PATCH',
            headers: HEADERS,
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`Supabase 更新失败: ${response.status}`);
        return response.json();
    },
    
    // 删除
    async remove(table, filter) {
        let url = `${SUPABASE.url}/rest/v1/${table}`;
        if (filter) {
            const params = new URLSearchParams(filter);
            url += `?${params.toString()}`;
        }
        const response = await fetch(url, {
            method: 'DELETE',
            headers: HEADERS
        });
        if (!response.ok) throw new Error(`Supabase 删除失败: ${response.status}`);
        return response.json();
    }
};
```

#### 4.4 创建 `pages/tool-template.html` — 工具页模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <!-- 统一的 Mobirise 基础结构 -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
    
    <!-- 统一 favicon -->
    <link rel="shortcut icon" href="./assets/images/frame-1-121x121.png" type="image/x-icon">
    
    <!-- 统一 CSS -->
    <link rel="stylesheet" href="./assets/web/assets/mobirise-icons2/mobirise2.css">
    <link rel="stylesheet" href="./assets/tether/tether.min.css">
    <link rel="stylesheet" href="./assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/bootstrap/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="./assets/bootstrap/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="./assets/dropdown/css/style.css">
    <link rel="stylesheet" href="./assets/socicon/css/styles.css">
    <link rel="stylesheet" href="./assets/theme/css/style.css">
    <link rel="preload" as="style" href="./assets/mobirise/css/mbr-additional.css">
    <link rel="stylesheet" href="./assets/mobirise/css/mbr-additional.css" type="text/css">
    <link rel="stylesheet" href="./additions/mouse.css">
    
    <!-- SEO -->
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:image:src" content="assets/images/index-meta.jpg">
    <meta property="og:image" content="assets/images/index-meta.jpg">
    
    <!-- 页面标题（由子页面注入） -->
    <title>__TITLE__</title>
</head>

<body>
    <!-- 导航菜单（统一加载） -->
    <div id="menu"></div>
    <script src="./assets/web/assets/jquery/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $("#menu").load("./additions/menu/menu2.html", function() {
                adjustLinks();
                window.addEventListener('resize', adjustLinks);
            });
        });
    </script>

    <!-- 子页面内容（由子页面注入） -->
    <!-- __CONTENT__ -->

    <!-- 统一 Footer -->
    <section class="footer7 cid-seeJHoNSny" once="footers" id="footer7-p">
        <div class="container">
            <div class="media-container-row align-center mbr-white">
                <div class="col-12">
                    <p class="mbr-text mb-0 mbr-fonts-style display-7">
                        Copyright (C) SQUARE ENIX CO., LTD. All Rights Reserved.<br>
                        Copyright (C) Crystal Alliance cir. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- 统一底部脚本 -->
    <script src="./assets/popper/popper.min.js"></script>
    <script src="./assets/tether/tether.min.js"></script>
    <script src="./assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="./assets/smoothscroll/smooth-scroll.js"></script>
    <script src="./assets/dropdown/js/nav-dropdown.js"></script>
    <script src="./assets/dropdown/js/navbar-dropdown.js"></script>
    <script src="./assets/touchswipe/jquery.touch-swipe.min.js"></script>
    <script src="./assets/theme/js/script.js"></script>
    
    <!-- 公共页脚 JS -->
    <script src="./additions/foot/common.js"></script>
</body>
</html>
```

---

## 五、执行步骤（分阶段）

### 阶段 1：创建共享模块（预计 2 小时）

| 步骤 | 任务 | 产出 |
|------|------|------|
| 1.1 | 创建 `assets/js/config.js` | 统一配置中心 |
| 1.2 | 创建 `assets/js/utils.js` | 公共工具函数 |
| 1.3 | 创建 `assets/js/supabase-client.js` | Supabase 封装 |
| 1.4 | 创建 `pages/tool-template.html` | 工具页模板 |

### 阶段 2：逐步替换（预计 4-6 小时）

| 步骤 | 任务 | 影响文件数 |
|------|------|-----------|
| 2.1 | 替换 Supabase 配置引用 | 24 |
| 2.2 | 替换 `getCookie()` 引用 | 8 |
| 2.3 | 替换 API URL 引用 | 15 |
| 2.4 | 替换工具函数引用（UUID、缓存等） | 5 |
| 2.5 | 基于模板重建 `tools/` 下页面 | 3 |
| 2.6 | 基于模板重建 `Kook.html` / `Oopz.html` | 2 |
| 2.7 | 统一 Font Awesome 引用 | 10+ |

### 阶段 3：清理废弃代码（预计 1 小时）

| 步骤 | 任务 |
|------|------|
| 3.1 | 删除注释代码 |
| 3.2 | 删除备份/测试文件 |
| 3.3 | 验证所有页面功能正常 |

---

## 六、注意事项

1. **ES Module 兼容性**: 部分旧页面使用普通 `<script>` 标签，不支持 `import/export`。可使用 `<script type="module">` 或构建时转译
2. **相对路径**: 子页面引用路径差异大，需统一处理
3. **向后兼容**: 确保旧页面功能完全不受影响
4. **渐进式重构**: 可按阶段逐步替换，每阶段完成后测试

---

## 七、预期效果

| 指标 | 当前 | 去重后 | 改善 |
|------|------|--------|------|
| 重复代码行数 | ~1400+ | < 100 | -93% |
| 配置修改时需改文件数 | 24 | 1 | -96% |
| 工具函数修改时需改文件数 | 8 | 1 | -87% |
| 新增工具页面开发时间 | 30min+ | 5min | -83% |
| 维护成本 | 高 | 低 | 显著降低 |

---

**报告完成，请确认是否按此方案执行。**