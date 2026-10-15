(function () {
    'use strict';

    const MAX_CONCURRENT_CHECKS = 6;
    const REQUEST_TIMEOUT_MS = 8000;
    const queue = [];
    let activeChecks = 0;

    function createStatus(link) {
        const host = link.querySelector(':scope > button') || link;
        const content = document.createElement('span');
        content.className = 'tool-link-content';

        const icon = document.createElement('img');
        icon.className = 'tool-link-icon';
        icon.alt = '';
        icon.loading = 'lazy';
        icon.src = `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(link.href)}&sz=32`;
        icon.onerror = () => {
            icon.onerror = null;
            icon.src = `${new URL(link.href).origin}/favicon.ico`;
        };

        const label = document.createElement('span');
        label.className = 'tool-link-label';
        while (host.firstChild) label.appendChild(host.firstChild);

        const status = document.createElement('span');
        status.className = 'tool-link-status is-checking';
        status.textContent = '';
        status.title = '检测中';
        status.setAttribute('aria-label', '网站状态检测中');

        content.append(icon, label, status);
        host.appendChild(content);
        link.dataset.statusReady = 'true';
        link._toolStatus = status;
    }

    function updateStatus(link, online, elapsed) {
        const status = link._toolStatus;
        if (!status) return;
        status.className = `tool-link-status ${online ? 'is-online' : 'is-offline'}`;
        status.textContent = online ? `${elapsed} ms` : '';
        status.title = online ? `在线，延迟 ${elapsed} 毫秒` : '不可用';
        status.setAttribute('aria-label', online ? `网站在线，延迟 ${elapsed} 毫秒` : '网站不可用');
    }

    function checkLink(link) {
        activeChecks += 1;
        const startedAt = performance.now();
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

        fetch(link.href, { method: 'HEAD', mode: 'no-cors', cache: 'no-store', signal: controller.signal })
            .then(() => updateStatus(link, true, Math.max(1, Math.round(performance.now() - startedAt))))
            .catch(() => updateStatus(link, false, 0))
            .finally(() => {
                clearTimeout(timeout);
                activeChecks -= 1;
                runQueue();
            });
    }

    function runQueue() {
        while (activeChecks < MAX_CONCURRENT_CHECKS && queue.length > 0) checkLink(queue.shift());
    }

    function initialize() {
        const links = Array.from(document.querySelectorAll('section.header1 a[target="_blank"][href]'))
            .filter(link => /^https?:\/\//i.test(link.href));
        links.forEach(link => {
            if (link.dataset.statusReady === 'true') return;
            createStatus(link);
            queue.push(link);
        });
        runQueue();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
})();
