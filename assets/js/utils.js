/**
 * 公共工具函数库
 * 所有页面共享的工具函数
 */

// Cookie 操作工具
window.CookieUtil = {
    /**
     * 读取 Cookie
     * @param {string} name - Cookie 名称
     * @returns {string} Cookie 值
     */
    get: function(name) {
        const match = document.cookie.split(';')
            .map(c => c.trim())
            .find(c => c.startsWith(name + '='));
        return match ? match.substring(name.length + 1) : '';
    },

    /**
     * 设置 Cookie
     * @param {string} name - Cookie 名称
     * @param {string} value - Cookie 值
     * @param {object} options - 选项（expires, secure, sameSite）
     */
    set: function(name, value, options = {}) {
        let cookie = `${name}=${value}; path=/`;
        if (options.expires) {
            cookie += `; expires=${new Date(options.expires).toUTCString()}`;
        }
        if (options.secure) cookie += '; secure';
        if (options.sameSite) cookie += `; samesite=${options.sameSite}`;
        document.cookie = cookie;
    },

    /**
     * 删除 Cookie
     * @param {string} name - Cookie 名称
     */
    delete: function(name) {
        this.set(name, '', { expires: new Date(0) });
    }
};

// UUID 生成器
window.generateUUID = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

// 文件大小格式化
window.formatFileSize = function(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// 图片缓存到 localStorage
window.cacheImage = function(proxyUrl, originalUrl) {
    try {
        localStorage.setItem(originalUrl, proxyUrl);
    } catch (e) {
        console.warn('localStorage 不可用:', e);
    }
};

// HTML 转义（防 XSS）
window.escapeHtml = function(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
};

// 安全设置 HTML 内容
window.setSafeHtml = function(element, content) {
    if (element && content !== undefined && content !== null) {
        element.textContent = String(content);
    }
};

// 获取代理图片 URL
window.getProxyImageUrl = function(originalUrl) {
    const config = window.APP_CONFIG;
    if (!config || !config.PROXY) return originalUrl;
    
    try {
        const cached = localStorage.getItem(originalUrl);
        if (cached) return cached;
    } catch (e) {}
    
    return config.PROXY.image + encodeURIComponent(originalUrl);
};

// 带退避策略的轮询请求
window.pollRequest = function(url, options = {}) {
    const {
        interval = 5000,
        maxRetries = 10,
        backoffFactor = 1.5,
        onUpdate,
        onError,
        headers
    } = options;
    
    let currentInterval = interval;
    let retryCount = 0;
    let isStopped = false;
    
    const doFetch = async function() {
        if (isStopped) return;
        
        try {
            const response = await fetch(url, { headers: headers });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            onUpdate && onUpdate(data);
            retryCount = 0;
            currentInterval = interval;
        } catch (error) {
            retryCount++;
            if (retryCount >= maxRetries) {
                onError && onError(error);
                return;
            }
            currentInterval *= backoffFactor;
            onError && onError(error);
        }
        
        setTimeout(doFetch, currentInterval);
    };
    
    doFetch();
    
    // 返回停止函数
    return function stop() {
        isStopped = true;
    };
};
