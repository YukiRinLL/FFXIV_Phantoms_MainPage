/**
 * 共享模块加载器
 * 在所有使用共享模块的页面引入此文件即可
 * 
 * 使用方法：在 <head> 或 <body> 底部引入
 *   <script src="./assets/js/shared-loader.js"></script>
 *   或在子目录页面使用：
 *   <script src="../assets/js/shared-loader.js"></script>
 * 
 * 引入后可使用：
 *   window.APP_CONFIG       - 全局配置
 *   window.getApiUrl(key)   - 获取 API URL
 *   window.getSupabaseConfig() - 获取 Supabase 配置
 *   window.SupabaseClient   - Supabase REST 客户端
 *   window.CookieUtil       - Cookie 工具
 *   window.generateUUID()   - UUID 生成
 *   window.formatFileSize() - 文件大小格式化
 *   window.escapeHtml(str)  - HTML 转义防 XSS
 *   window.pollRequest(url, options) - 轮询请求
 */

(function() {
    var scriptsLoaded = {};
    var basePath = '';
    
    // 确定 basePath（根据当前页面路径深度）
    var pathParts = window.location.pathname.split('/');
    // 假设 assets/js/ 在根目录下
    // 检查是否在子目录中
    var scriptTag = document.currentScript || (function() {
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    })();
    
    if (scriptTag && scriptTag.src) {
        basePath = scriptTag.src.replace(/shared-loader\.js.*$/, '');
    } else {
        // fallback: 检查路径深度
        var depth = (window.location.pathname.split('/').length - 2);
        basePath = '../'.repeat(depth) + 'assets/js/';
    }
    
    // 加载顺序：config.js -> utils.js -> supabase-client.js
    var loadOrder = [
        basePath + 'config.js',
        basePath + 'utils.js',
        basePath + 'supabase-client.js'
    ];
    
    function loadScript(src) {
        return new Promise(function(resolve, reject) {
            if (scriptsLoaded[src]) {
                resolve();
                return;
            }
            
            var script = document.createElement('script');
            script.src = src;
            script.onload = function() {
                scriptsLoaded[src] = true;
                resolve();
            };
            script.onerror = function() {
                console.warn('共享模块加载失败:', src);
                // 不阻塞，继续加载其他脚本
                resolve();
            };
            document.head.appendChild(script);
        });
    }
    
    // 按顺序加载
    var chain = Promise.resolve();
    loadOrder.forEach(function(src) {
        chain = chain.then(function() {
            return loadScript(src);
        });
    });
    
    // 暴露加载完成事件
    window.SharedModulesReady = chain;
})();
