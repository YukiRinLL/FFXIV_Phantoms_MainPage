/**
 * 导航栏头像组件
 * 将登录状态、头像显示、下拉菜单整合到导航栏的 .icons-menu 区域
 * 支持响应式布局，根据导航栏动态调整位置
 */

(function(window, document) {
    'use strict';

    // 添加响应式样式
    function injectResponsiveStyles() {
        if (document.getElementById('avatar-widget-styles')) return;
        
        const styles = `
            <style id="avatar-widget-styles">
                /* 默认样式（桌面端） - 头像在导航栏内部 */
                .nav-avatar-container {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    margin-left: 10px;
                    transition: all 0.3s ease;
                    vertical-align: middle;
                }

                .nav-avatar {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    cursor: pointer;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    transition: border-color 0.3s, box-shadow 0.3s, transform 0.2s;
                }

                .nav-avatar:hover {
                    border-color: rgba(255, 255, 255, 0.8);
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
                    transform: scale(1.05);
                }

                .nav-avatar-dropdown {
                    display: none;
                    position: absolute;
                    top: calc(100% + 10px);
                    right: 0;
                    background: #1a1a2e;
                    border-radius: 8px;
                    min-width: 180px;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
                    overflow: hidden;
                    z-index: 1000;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    animation: avatarFadeIn 0.2s ease;
                }

                @keyframes avatarFadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* 1200px ~ 1399px（中等屏幕） */
                @media (min-width: 1200px) and (max-width: 1399px) {
                    .nav-avatar-container {
                        margin-left: 5px;
                    }
                    .nav-avatar {
                        width: 32px;
                        height: 32px;
                    }
                }

                /* 992px ~ 1199px（平板/小桌面） */
                @media (min-width: 992px) and (max-width: 1199px) {
                    .nav-avatar-container {
                        margin-left: 5px;
                    }
                    .nav-avatar {
                        width: 30px;
                        height: 30px;
                    }
                }

                /* 991px 以下（移动端） - 头像固定在导航栏右侧 */
                @media (max-width: 991px) {
                    .nav-avatar-container {
                        position: absolute;
                        top: 50%;
                        right: 70px; /* 留出汉堡菜单按钮空间 */
                        transform: translateY(-50%);
                        margin: 0;
                        z-index: 1030;
                    }
                    .nav-avatar {
                        width: 34px;
                        height: 34px;
                    }
                    .nav-avatar-dropdown {
                        top: calc(100% + 8px);
                        right: 0;
                    }
                }

                /* 768px 以下（小手机） */
                @media (max-width: 767px) {
                    .nav-avatar-container {
                        right: 60px;
                    }
                    .nav-avatar {
                        width: 30px;
                        height: 30px;
                        border-width: 1.5px;
                    }
                    .nav-avatar-dropdown {
                        top: calc(100% + 8px);
                        right: 0;
                        min-width: 160px;
                    }
                    .nav-avatar-dropdown a {
                        padding: 10px 14px;
                        font-size: 0.85rem;
                    }
                }

                /* 480px 以下（超小手机） */
                @media (max-width: 479px) {
                    .nav-avatar-container {
                        right: 55px;
                    }
                    .nav-avatar {
                        width: 28px;
                        height: 28px;
                    }
                }

                /* 下拉菜单项样式 */
                .nav-avatar-dropdown a {
                    display: block;
                    padding: 12px 16px;
                    color: #fff;
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: background 0.2s;
                    cursor: pointer;
                }

                .nav-avatar-dropdown a:hover {
                    background: rgba(255, 255, 255, 0.1);
                }

                .nav-avatar-dropdown .avatar-user-section {
                    padding: 12px 16px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    color: #fff;
                    font-size: 0.85rem;
                }

                /* 登录弹窗样式 - 黑白配色 */
                .nav-login-modal {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 9999;
                    justify-content: center;
                    align-items: center;
                    animation: modalFadeIn 0.3s ease;
                    padding: 16px;
                    box-sizing: border-box;
                }

                @keyframes modalFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .nav-login-modal-content {
                    background: #fff;
                    border-radius: 12px;
                    padding: 30px;
                    max-width: 400px;
                    width: 100%;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    animation: modalSlideUp 0.3s ease;
                    border: 1px solid #e0e0e0;
                    max-height: 90vh;
                    overflow-y: auto;
                    box-sizing: border-box;
                }

                @keyframes modalSlideUp {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                /* 小屏幕 (≤480px) */
                @media (max-width: 480px) {
                    .nav-login-modal {
                        padding: 12px;
                        align-items: flex-start;
                    }
                    .nav-login-modal-content {
                        padding: 20px 16px;
                        border-radius: 10px;
                        max-height: 85vh;
                    }
                }

                /* 极窄屏幕 (≤360px) */
                @media (max-width: 360px) {
                    .nav-login-modal {
                        padding: 8px;
                    }
                    .nav-login-modal-content {
                        padding: 16px 12px;
                        border-radius: 8px;
                    }
                }
            </style>
        `;
        
        const styleSheet = document.createElement('div');
        styleSheet.innerHTML = styles;
        document.head.appendChild(styleSheet.firstElementChild);
    }

    // 从全局配置获取
    const getConfig = function() {
        return {
            supabaseURL: (window.APP_CONFIG && window.APP_CONFIG.SUPABASE_URL) || 'https://dshmbsawwrbuycnivcjs.supabase.co',
            supabaseAPIKey: (window.APP_CONFIG && window.APP_CONFIG.ANON_KEY) || ''
        };
    };

    // Cookie 操作
    function getCookie(name) {
        if (window.CookieUtil && window.CookieUtil.get) {
            return window.CookieUtil.get(name);
        }
        let cookieArray = document.cookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i].trim();
            if (cookie.indexOf(name + "=") == 0) {
                return cookie.substring(name.length + 1, cookie.length);
            }
        }
        return "";
    }

    function setCookie(name, value, days) {
        if (window.CookieUtil && window.CookieUtil.set) {
            window.CookieUtil.set(name, value, days);
            return;
        }
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/; secure;";
    }

    function eraseCookie(name) {
        if (window.CookieUtil && window.CookieUtil.delete) {
            window.CookieUtil.delete(name);
            return;
        }
        document.cookie = name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT; secure;";
    }

    // 密码哈希（可逆）
    function reversibleHash4to6(str) {
        const primeMultiplier = 7;
        const offset = 100000;
        const num = parseInt(str, 10);
        const hash = ((num * primeMultiplier) + offset) % 1000000;
        return hash.toString().padStart(6, '0');
    }

    // 显示加载遮罩
    function showLoadingOverlay() {
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;z-index:9999;';
        overlay.innerHTML = '<div style="color:white;font-size:20px;">Operation in progress...<br><br>Please wait</div>';
        document.body.appendChild(overlay);
        return overlay;
    }

    function hideLoadingOverlay(overlay) {
        if (overlay && overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
    }

    // 检查登录状态
    function isLoggedIn() {
        return getCookie('access_token') !== '';
    }

    // 登录
    function login(email, password) {
        const config = getConfig();
        const loadingOverlay = showLoadingOverlay();
        const hashedPassword = reversibleHash4to6(password);

        fetch(`${config.supabaseURL}/auth/v1/token?grant_type=password`, {
            method: 'POST',
            headers: {
                'apikey': config.supabaseAPIKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password: hashedPassword })
        })
        .then(response => response.json())
        .then(data => {
            hideLoadingOverlay(loadingOverlay);
            if (data.access_token) {
                setCookie('access_token', data.access_token);
                setCookie('user_id', data.user.id);
                alert('Login success! Please click OK to continue.');
                window.location.reload();
            } else {
                alert('Login failed: ' + (data.error_description || 'Unknown error'));
            }
        })
        .catch(error => {
            hideLoadingOverlay(loadingOverlay);
            console.error('Login error:', error);
            alert('An error occurred during login.');
        });
    }

    // 登出
    function logout() {
        const config = getConfig();
        const loadingOverlay = showLoadingOverlay();
        const token = getCookie('access_token');

        fetch(`${config.supabaseURL}/auth/v1/logout`, {
            method: 'POST',
            headers: {
                'apikey': config.supabaseAPIKey,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(() => {
            eraseCookie('access_token');
            eraseCookie('user_id');
            hideLoadingOverlay(loadingOverlay);
            window.location.reload();
        })
        .catch(error => {
            hideLoadingOverlay(loadingOverlay);
            console.error('Logout error:', error);
            alert('An error occurred during logout.');
        });
    }

    // 获取用户头像
    function fetchUserAvatar() {
        const config = getConfig();
        const userId = getCookie('user_id');
        if (!userId) return;

        fetch(`${config.supabaseURL}/rest/v1/user_profile?user_id=eq.${userId}`, {
            method: 'GET',
            headers: { 'apikey': config.supabaseAPIKey }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0 && data[0].data) {
                updateAvatarDisplay(data[0].data);
            }
        })
        .catch(error => console.error('Error fetching avatar:', error));
    }

    // 更新头像显示
    function updateAvatarDisplay(avatarData) {
        const avatarImg = document.querySelector('.nav-avatar');
        if (avatarImg) {
            avatarImg.src = avatarData;
        }
    }

    // 响应式调整处理
    function handleResponsiveAdjustments() {
        const container = document.querySelector('.nav-avatar-container');
        if (!container) return;

        const windowWidth = window.innerWidth;
        
        // 根据屏幕宽度调整行为
        if (windowWidth <= 991) {
            // 移动端：点击导航栏外关闭菜单
            document.addEventListener('click', function(e) {
                const dropdown = document.querySelector('.nav-avatar-dropdown');
                if (dropdown && dropdown.style.display === 'block') {
                    if (!container.contains(e.target)) {
                        dropdown.style.display = 'none';
                    }
                }
            });
        }
    }

    // 初始化头像组件
    function initAvatarWidget() {
        // 注入响应式样式
        injectResponsiveStyles();
        
        // 查找导航栏中的头像占位符
        const avatarPlaceholder = document.querySelector('.nav-avatar-placeholder');
        if (!avatarPlaceholder) return;

        // 获取当前页面路径前缀
        const pathname = window.location.pathname;
        const pathParts = pathname.split('/').filter(p => p.length > 0);
        let depth = pathParts.length === 0 ? 0 : (pathname.endsWith('/') ? pathParts.length : pathParts.length - 1);
        const prefix = depth === 0 ? './' : '../'.repeat(depth);

        // 创建头像容器（使用 CSS class 而非内联样式）
        const avatarHTML = `
            <div class="nav-avatar-container">
                <img class="nav-avatar" src="${prefix}assets/images/def-profile-gray.png" 
                     alt="User Avatar">
                
                <!-- 下拉菜单 -->
                <div class="nav-avatar-dropdown">
                    <!-- 未登录状态 -->
                    <div class="avatar-menu-logged-out" style="display:block;">
                        <a href="#" onclick="event.preventDefault(); AvatarWidget.showLoginModal();">
                            <i class="mbr-iconfont mobi-mbri-user-2 mobi-mbri" style="margin-right:8px;"></i> Login
                        </a>
                        <a href="${prefix}messageBoard/user_conf/registerUser.html">
                            <i class="mbr-iconfont mobi-mbri-add mobi-mbri" style="margin-right:8px;"></i> Register
                        </a>
                    </div>
                    
                    <!-- 已登录状态 -->
                    <div class="avatar-menu-logged-in" style="display:none;">
                        <div class="avatar-user-section">
                            <div id="avatar-user-email">Logged In</div>
                        </div>
                        <a href="${prefix}messageBoard/user_conf/uploadProfile.html">
                            <i class="mbr-iconfont mobi-mbri-user-1 mobi-mbri" style="margin-right:8px;"></i> Edit Profile
                        </a>
                        <a href="${prefix}messageBoard/user_conf/userListWithProfile_fromed.html">
                            <i class="mbr-iconfont mobi-mbri-users mobi-mbri" style="margin-right:8px;"></i> User List
                        </a>
                        <a href="#" onclick="event.preventDefault(); AvatarWidget.logout();" style="color:#ff6b6b;">
                            <i class="mbr-iconfont mobi-mbri-lock mobi-mbri" style="margin-right:8px;"></i> Logout
                        </a>
                    </div>
                </div>

                <!-- 登录弹窗 - 黑白配色 -->
                <div id="nav-login-modal" class="nav-login-modal">
                    <div class="nav-login-modal-content">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-shrink:0;">
                            <h3 style="color:#111;margin:0;font-size:1.2rem;font-weight:600;">Login</h3>
                            <span onclick="AvatarWidget.hideLoginModal()" style="color:#999;font-size:28px;cursor:pointer;line-height:1;flex-shrink:0;user-select:none;">&times;</span>
                        </div>
                        <form id="nav-login-form" onsubmit="event.preventDefault(); AvatarWidget.handleLoginSubmit();" style="flex-shrink:0;">
                            <div style="margin-bottom:15px;">
                                <label style="display:block;color:#555;margin-bottom:5px;font-size:0.85rem;">Email</label>
                                <input type="email" id="nav-login-email" required style="width:100%;padding:10px 12px;background:#f5f5f5;border:1px solid #ccc;border-radius:6px;color:#111;font-size:0.9rem;box-sizing:border-box;outline:none;transition:border-color 0.2s;" onfocus="this.style.borderColor='#111'" onblur="this.style.borderColor='#ccc'">
                            </div>
                            <div style="margin-bottom:20px;">
                                <label style="display:block;color:#555;margin-bottom:5px;font-size:0.85rem;">Password (PIN)</label>
                                <input type="password" id="nav-login-password" required style="width:100%;padding:10px 12px;background:#f5f5f5;border:1px solid #ccc;border-radius:6px;color:#111;font-size:0.9rem;box-sizing:border-box;outline:none;transition:border-color 0.2s;" onfocus="this.style.borderColor='#111'" onblur="this.style.borderColor='#ccc'">
                            </div>
                            <button type="submit" style="width:100%;padding:12px;background:#111;border:none;border-radius:6px;color:#fff;font-size:0.95rem;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background='#333'" onmouseout="this.style.background='#111'">
                                Login
                            </button>
                        </form>
                        <div style="margin-top:15px;text-align:center;flex-shrink:0;">
                            <a href="${prefix}messageBoard/user_conf/registerUser.html" style="color:#555;text-decoration:none;font-size:0.85rem;">Don't have an account? Register</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        avatarPlaceholder.outerHTML = avatarHTML;

        // 将登录弹窗移到 body 下，避免受 .nav-avatar-container 的 transform 影响导致窄屏下定位异常
        const loginModal = document.getElementById('nav-login-modal');
        if (loginModal && loginModal.parentNode !== document.body) {
            document.body.appendChild(loginModal);
        }

        // 获取新创建的元素
        const container = document.querySelector('.nav-avatar-container');
        const avatarImg = document.querySelector('.nav-avatar');
        const dropdown = document.querySelector('.nav-avatar-dropdown');
        const menuLoggedOut = document.querySelector('.avatar-menu-logged-out');
        const menuLoggedIn = document.querySelector('.avatar-menu-logged-in');

        // 点击头像切换下拉菜单
        avatarImg.addEventListener('click', function(e) {
            e.stopPropagation();
            const isVisible = dropdown.style.display === 'block';
            
            // 切换显示
            dropdown.style.display = isVisible ? 'none' : 'block';
            
            // 根据登录状态显示不同菜单
            if (!isVisible) {
                const loggedIn = isLoggedIn();
                menuLoggedOut.style.display = loggedIn ? 'none' : 'block';
                menuLoggedIn.style.display = loggedIn ? 'block' : 'none';
                
                // 更新弹窗位置以适配屏幕
                positionDropdownForScreen(dropdown, container);
            }
        });

        // 点击外部关闭下拉菜单
        document.addEventListener('click', function(e) {
            if (!container.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });

        // 阻止下拉菜单内部点击冒泡
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // 窗口大小变化时调整下拉菜单位置
        window.addEventListener('resize', function() {
            if (dropdown.style.display === 'block') {
                positionDropdownForScreen(dropdown, container);
            }
        });

        // 检查登录状态并显示相应菜单
        const loggedIn = isLoggedIn();
        menuLoggedOut.style.display = loggedIn ? 'none' : 'block';
        menuLoggedIn.style.display = loggedIn ? 'block' : 'none';

        // 如果已登录，获取头像
        if (loggedIn) {
            fetchUserAvatar();
        }

        // 执行响应式调整
        handleResponsiveAdjustments();
    }

    // 根据屏幕位置调整下拉菜单
    function positionDropdownForScreen(dropdown, container) {
        const rect = container.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        
        // 默认显示在下方
        dropdown.style.top = 'calc(100% + 10px)';
        dropdown.style.bottom = 'auto';
        dropdown.style.left = 'auto';
        dropdown.style.right = '0';
        dropdown.style.transform = '';
        
        // 如果右侧溢出屏幕，调整位置
        const dropdownWidth = dropdown.offsetWidth || 180;
        if (rect.right + dropdownWidth > windowWidth - 10) {
            dropdown.style.right = 'auto';
            dropdown.style.left = '0';
        }
        
        // 如果下方空间不足，在上方显示
        const dropdownHeight = dropdown.offsetHeight || 150;
        if (rect.bottom + dropdownHeight > window.innerHeight - 10) {
            dropdown.style.top = 'auto';
            dropdown.style.bottom = 'calc(100% + 10px)';
        }
    }

    // 显示登录弹窗
    function showLoginModal() {
        const modal = document.getElementById('nav-login-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.querySelector('.nav-avatar-dropdown').style.display = 'none';
            // 锁定页面滚动
            document.body.style.overflow = 'hidden';
            // ESC 键关闭
            document.addEventListener('keydown', handleModalKeydown);
            // 点击遮罩关闭
            modal.addEventListener('click', handleModalBackdropClick);
        }
    }

    // 隐藏登录弹窗
    function hideLoginModal() {
        const modal = document.getElementById('nav-login-modal');
        if (modal) {
            modal.style.display = 'none';
            // 解锁页面滚动
            document.body.style.overflow = '';
            // 移除事件监听
            document.removeEventListener('keydown', handleModalKeydown);
            modal.removeEventListener('click', handleModalBackdropClick);
        }
    }

    // ESC 键关闭弹窗
    function handleModalKeydown(e) {
        if (e.key === 'Escape') {
            hideLoginModal();
        }
    }

    // 点击遮罩关闭弹窗
    function handleModalBackdropClick(e) {
        const modal = document.getElementById('nav-login-modal');
        if (e.target === modal) {
            hideLoginModal();
        }
    }

    // 处理登录提交
    function handleLoginSubmit() {
        const email = document.getElementById('nav-login-email').value;
        const password = document.getElementById('nav-login-password').value;
        hideLoginModal();
        login(email, password);
    }

    // 暴露到全局
    window.AvatarWidget = {
        init: initAvatarWidget,
        showLoginModal: showLoginModal,
        hideLoginModal: hideLoginModal,
        handleLoginSubmit: handleLoginSubmit,
        logout: logout,
        isLoggedIn: isLoggedIn,
        updateAvatar: fetchUserAvatar
    };

    // 自动初始化
    function autoInit() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAvatarWidget);
        } else {
            initAvatarWidget();
        }
    }

    // 等待菜单加载完成后初始化
    document.addEventListener('menu:loaded', function() {
        setTimeout(autoInit, 100);
    });

    // 如果菜单已加载，直接初始化
    if (document.querySelector('.nav-avatar-placeholder')) {
        autoInit();
    }

})(window, document);
