/**
 * 菜单加载器
 * 自动根据页面层级加载统一的 menu.html 并修正路径
 * 
 * 使用方式：
 *   在 <div id="menu"></div> 之后引入：
 *   <script src="./assets/js/menu-loader.js"></script>
 *   或通过已有方式：
 *   $("#menu").load("./additions/menu/menu.html");
 *   然后调用 MenuLoader.init();
 */

(function(window, document) {
    'use strict';

    /**
     * 菜单加载器
     */
    const MenuLoader = {
        // 配置
        config: {
            // 统一菜单模板路径（相对于根目录）
            menuPath: 'additions/menu/menu.html',
            // 需要修正的属性名
            attrs: ['href', 'src', 'data-mobile-href', 'data-original-href'],
            // 需要跳过的 URL 类型
            skipPatterns: [
                /^https?:\/\//,      // 外部链接
                /^mailto:/,           // 邮件链接
                /^tel:/,              // 电话链接
                /^#/,                 // 锚点
                /^javascript:/        // JS 链接
            ]
        },

        /**
         * 检测当前页面的相对路径前缀
         * @returns {string} 例如 './' 或 '../' 或 '../../'
         */
        detectPathPrefix: function() {
            // 尝试从 script 标签位置推断
            const scripts = document.getElementsByTagName('script');
            for (let i = scripts.length - 1; i >= 0; i--) {
                const src = scripts[i].getAttribute('src') || '';
                if (src.includes('menu-loader.js')) {
                    // src 格式: ./assets/js/menu-loader.js 或 ../assets/js/menu-loader.js
                    const prefix = src.replace(/assets\/js\/menu-loader\.js.*$/, '');
                    return prefix || './';
                }
            }

            // 回退：从 URL 路径深度推断
            const pathname = window.location.pathname;
            const pathParts = pathname.split('/').filter(p => p.length > 0);
            
            // 如果是文件路径（如 /tools/wakingsands.html），深度 = 目录层数
            // 根目录: /index.html -> './'
            // 一级: /tools/wakingsands.html -> '../'
            // 二级: /tools/sub/page.html -> '../../'
            let depth = 0;
            if (pathParts.length > 0) {
                // 最后一部分是文件名，前面的是目录
                depth = pathParts.length - 1;
                // 如果根路径没有文件名（如 /tools/），depth 就是目录数
                if (pathname.endsWith('/')) {
                    depth = pathParts.length;
                }
            }

            if (depth === 0) return './';
            return '../'.repeat(depth);
        },

        /**
         * 修正单个 URL 的路径前缀
         * @param {string} url - 原始 URL
         * @param {string} prefix - 要添加的前缀
         * @returns {string} 修正后的 URL
         */
        fixUrl: function(url, prefix) {
            if (!url) return url;

            // 跳过不需要处理的 URL
            for (const pattern of this.config.skipPatterns) {
                if (pattern.test(url)) return url;
            }

            // 已经是相对路径 (./ 或 ../ 开头)
            if (url.startsWith('./') || url.startsWith('../')) {
                // 移除原有的相对路径前缀，然后添加正确的前缀
                let cleanUrl = url.replace(/^\.\//, '').replace(/^\.\.\//, '');
                return prefix + cleanUrl;
            }

            // 以 / 开头的绝对路径
            if (url.startsWith('/')) {
                return prefix + url.substring(1);
            }

            // 其他相对路径（如 "index.html", "tools/wakingsands.html"）
            return prefix + url;
        },

        /**
         * 修正菜单容器内所有链接的路径
         * @param {HTMLElement} container - 菜单容器元素
         * @param {string} prefix - 路径前缀
         */
        fixLinks: function(container, prefix) {
            const self = this;
            
            // 修正所有 a 标签的链接
            const links = container.querySelectorAll('a[href]');
            links.forEach(function(link) {
                const href = link.getAttribute('href');
                const newHref = self.fixUrl(href, prefix);
                if (newHref !== href) {
                    link.setAttribute('href', newHref);
                    // 保存原始 href 用于移动端切换
                    if (!link.hasAttribute('data-original-href')) {
                        link.setAttribute('data-original-href', href);
                    }
                }

                // 修正 data-mobile-href
                const mobileHref = link.getAttribute('data-mobile-href');
                if (mobileHref) {
                    const newMobileHref = self.fixUrl(mobileHref, prefix);
                    if (newMobileHref !== mobileHref) {
                        link.setAttribute('data-mobile-href', newMobileHref);
                    }
                }
            });

            // 修正所有 img 标签的 src
            const images = container.querySelectorAll('img[src]');
            images.forEach(function(img) {
                const src = img.getAttribute('src');
                const newSrc = self.fixUrl(src, prefix);
                if (newSrc !== src) {
                    img.setAttribute('src', newSrc);
                }
            });

            // 修正所有 link 标签的 href (样式表)
            const stylesheets = container.querySelectorAll('link[href]');
            stylesheets.forEach(function(link) {
                const href = link.getAttribute('href');
                if (link.getAttribute('rel') === 'stylesheet') {
                    const newHref = self.fixUrl(href, prefix);
                    if (newHref !== href) {
                        link.setAttribute('href', newHref);
                    }
                }
            });

            // 修正所有 script 标签的 src
            const scripts = container.querySelectorAll('script[src]');
            scripts.forEach(function(script) {
                const src = script.getAttribute('src');
                const newSrc = self.fixUrl(src, prefix);
                if (newSrc !== src) {
                    script.setAttribute('src', newSrc);
                }
            });
        },

        /**
         * 修正 EorzeaTime 类引用（菜单加载后需要重新加载 JS）
         * @param {HTMLElement} container - 菜单容器
         * @param {string} prefix - 路径前缀
         */
        fixScripts: function(container, prefix) {
            const self = this;
            
            // 查找需要重新加载的脚本
            const scripts = container.querySelectorAll('script[src]');
            scripts.forEach(function(script) {
                const originalSrc = script.getAttribute('src');
                const newSrc = self.fixUrl(originalSrc, prefix);
                
                // 创建新的 script 标签替换
                const newScript = document.createElement('script');
                newScript.src = newSrc;
                
                // 替换原脚本
                script.parentNode.replaceChild(newScript, script);
            });
        },

        /**
         * 调整移动端链接（原 menu 中的 adjustLinks 功能）
         */
        setupMobileAdjust: function(container) {
            let linkObserver = null;

            function initLinkStorage() {
                const links = container.querySelectorAll('a[data-mobile-href]');
                links.forEach(function(link) {
                    if (!link.hasAttribute('data-original-href')) {
                        link.setAttribute('data-original-href', link.getAttribute('href'));
                    }
                });
            }

            function isMobileDevice() {
                return window.innerWidth <= 768 ||
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            }

            function adjustLinks() {
                const links = container.querySelectorAll('a[data-mobile-href]');
                const isMobile = isMobileDevice();

                links.forEach(function(link) {
                    if (isMobile) {
                        const mobileHref = link.getAttribute('data-mobile-href');
                        if (mobileHref && link.getAttribute('href') !== mobileHref) {
                            link.setAttribute('href', mobileHref);
                        }
                    } else {
                        const originalHref = link.getAttribute('data-original-href');
                        if (originalHref && link.getAttribute('href') !== originalHref) {
                            link.setAttribute('href', originalHref);
                        }
                    }
                });
            }

            // 初始化
            initLinkStorage();
            adjustLinks();

            // 监听窗口大小变化
            window.addEventListener('resize', adjustLinks);

            // 监听页面显示变化
            document.addEventListener('visibilitychange', function() {
                if (!document.hidden) {
                    setTimeout(adjustLinks, 100);
                }
            });

            // 确保在页面完全加载后再次检查
            window.addEventListener('load', function() {
                setTimeout(adjustLinks, 500);
            });

            // 监听 DOM 变化
            if (window.MutationObserver) {
                linkObserver = new MutationObserver(function(mutations) {
                    let shouldAdjust = false;
                    mutations.forEach(function(mutation) {
                        if (mutation.type === 'childList') {
                            mutation.addedNodes.forEach(function(node) {
                                if (node.nodeType === 1) {
                                    if (node.matches && node.matches('a[data-mobile-href]')) {
                                        shouldAdjust = true;
                                    }
                                    if (node.querySelectorAll) {
                                        const links = node.querySelectorAll('a[data-mobile-href]');
                                        if (links.length > 0) {
                                            shouldAdjust = true;
                                        }
                                    }
                                }
                            });
                        }
                    });
                    if (shouldAdjust) {
                        initLinkStorage();
                        adjustLinks();
                    }
                });

                // 监听 body 变化
                linkObserver.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            }
        },

        /**
         * 初始化菜单
         * @param {string} containerSelector - 容器选择器
         * @param {string} customPath - 自定义菜单路径（可选）
         * @returns {Promise} 加载完成的 Promise
         */
        init: function(containerSelector, customPath) {
            const self = this;
            const selector = containerSelector || '#menu';
            const menuPath = customPath || this.config.menuPath;
            
            return new Promise(function(resolve, reject) {
                const container = document.querySelector(selector);
                if (!container) {
                    reject(new Error('菜单容器未找到: ' + selector));
                    return;
                }

                // 检测路径前缀
                const prefix = self.detectPathPrefix();
                const fullMenuPath = prefix + menuPath;

                // 使用 fetch 加载菜单
                fetch(fullMenuPath)
                    .then(function(response) {
                        if (!response.ok) {
                            throw new Error('菜单加载失败: HTTP ' + response.status);
                        }
                        return response.text();
                    })
                    .then(function(html) {
                        // 将菜单 HTML 插入容器
                        container.innerHTML = html;

                        // 修正所有链接的路径
                        self.fixLinks(container, prefix);

                        // 重新加载脚本（如 EorzeaTime.js）
                        self.fixScripts(container, prefix);

                        // 设置移动端调整
                        self.setupMobileAdjust(container);

                        // 触发菜单加载完成事件
                        document.dispatchEvent(new CustomEvent('menu:loaded', {
                            detail: { container: container, prefix: prefix }
                        }));

                        resolve(container);
                    })
                    .catch(function(error) {
                        console.error('菜单加载失败:', error);
                        reject(error);
                    });
            });
        },

        /**
         * 便捷方法：自动检测并加载菜单
         * 在 DOMContentLoaded 后自动执行
         */
        autoInit: function() {
            const self = this;

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    self.init();
                });
            } else {
                self.init();
            }
        }
    };

    // 暴露到全局
    window.MenuLoader = MenuLoader;

    // 如果页面中有 #menu 容器且有 data-auto-init 属性，自动初始化
    document.addEventListener('DOMContentLoaded', function() {
        const menuContainer = document.querySelector('#menu[data-auto-init]');
        if (menuContainer) {
            MenuLoader.init('#menu');
        }
    });

})(window, document);
