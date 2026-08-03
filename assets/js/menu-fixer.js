/**
 * 菜单路径修正器
 * 在菜单通过 jQuery .load() 加载完成后，调用 MenuFixer.fix(container) 修正路径
 * 
 * 使用方式（在现有 .load() 回调中添加一行）：
 *   $("#menu").load("./additions/menu/menu.html", function() {
 *       MenuFixer.fix('#menu');  // 添加这一行即可
 *       // ... 其他代码
 *   });
 */

(function(window, document) {
    'use strict';

    const MenuFixer = {
        /**
         * 检测页面的相对路径前缀
         */
        detectPrefix: function() {
            // 从当前页面 URL 深度推断
            const pathname = window.location.pathname;
            const pathParts = pathname.split('/').filter(p => p.length > 0);
            
            if (pathParts.length === 0) return './';
            
            let depth;
            if (pathname.endsWith('/')) {
                depth = pathParts.length;
            } else {
                depth = pathParts.length - 1;
            }

            if (depth === 0) return './';
            return '../'.repeat(depth);
        },

        /**
         * 修正 URL 的路径前缀
         */
        fixUrl: function(url, prefix) {
            if (!url) return url;

            // 跳过外部链接、锚点、邮件、JS 等
            if (/^(https?:\/\/|mailto:|tel:|#|javascript:)/.test(url)) {
                return url;
            }

            // 已经是相对路径 (./ 或 ../ 开头)
            if (url.startsWith('./') || url.startsWith('../')) {
                let cleanUrl = url.replace(/^\.\//, '').replace(/^\.\.\//, '');
                return prefix + cleanUrl;
            }

            // 绝对路径（以 / 开头）
            if (url.startsWith('/')) {
                return prefix + url.substring(1);
            }

            // 其他相对路径
            return prefix + url;
        },

        /**
         * 修正容器内所有链接和资源的路径
         * @param {string|HTMLElement} selectorOrElement - CSS 选择器或 DOM 元素
         * @param {string} [customPrefix] - 可选的自定义前缀（不传入则自动检测）
         */
        fix: function(selectorOrElement, customPrefix) {
            const container = typeof selectorOrElement === 'string' 
                ? document.querySelector(selectorOrElement) 
                : selectorOrElement;

            if (!container) {
                console.warn('MenuFixer: 容器未找到');
                return;
            }

            const prefix = customPrefix || this.detectPrefix();
            const self = this;

            // 修正所有 a 标签
            container.querySelectorAll('a[href]').forEach(function(link) {
                const href = link.getAttribute('href');
                const newHref = self.fixUrl(href, prefix);
                if (newHref !== href) {
                    link.setAttribute('href', newHref);
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

            // 修正所有 img 标签
            container.querySelectorAll('img[src]').forEach(function(img) {
                const src = img.getAttribute('src');
                const newSrc = self.fixUrl(src, prefix);
                if (newSrc !== src) {
                    img.setAttribute('src', newSrc);
                }
            });

            // 修正 stylesheet 链接
            container.querySelectorAll('link[rel="stylesheet"][href]').forEach(function(link) {
                const href = link.getAttribute('href');
                const newHref = self.fixUrl(href, prefix);
                if (newHref !== href) {
                    link.setAttribute('href', newHref);
                }
            });

            // 修正 script 标签的 src
            const scripts = container.querySelectorAll('script[src]');
            scripts.forEach(function(script) {
                const src = script.getAttribute('src');
                const newSrc = self.fixUrl(src, prefix);
                if (newSrc !== src) {
                    script.src = newSrc;
                }
            });

            // 重新执行容器内的脚本（如 EorzeaTime.js）
            const inlineScripts = container.querySelectorAll('script:not([src])');
            inlineScripts.forEach(function(oldScript) {
                const newScript = document.createElement('script');
                newScript.textContent = oldScript.textContent;
                oldScript.parentNode.replaceChild(newScript, oldScript);
            });

            console.log('MenuFixer: 路径修正完成, 前缀:', prefix);
        }
    };

    window.MenuFixer = MenuFixer;

})(window, document);
