/**
 * 项目全局配置中心
 * 所有配置在此处集中管理，其他文件通过引用此文件获取
 */

// Supabase 配置
window.APP_CONFIG = {
    SUPABASE_URL: 'https://dshmbsawwrbuycnivcjs.supabase.co',
    // 注意：此 key 应仅限匿名可读权限（RLS 保护）
    ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzaG1ic2F3d3JidXljbml2Y2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5Mjg2OTAsImV4cCI6MjA2OTUwNDY5MH0.fwRJD-WuST7mCbJf9h2i2Xk0z6mtCMCeV--JGUecC6A',

    // 后端 API 配置
    API_BASE: 'https://phantoms-backend.onrender.com',
    API_ENDPOINTS: {
        guildInfo: '/api/risingstones/guild-info',
        guildMember: '/api/risingstones/guild-member',
        guildMemberDynamic: '/api/risingstones/guild-member-dynamic',
        userInfo: '/api/risingstones/user-info',
        onebotLatest: '/onebot/latest',
        onebotLatestText: '/onebot/latest/text',
        onebotSendGroup: '/onebot/send-to-group',
        onebotMonthlyStats: '/onebot/monthly-stats',
        onebotUserStats: '/onebot/user-stats',
        recruitments: '/api/recruitments'
    },

    // 图片代理配置
    PROXY: {
        image: 'https://images.weserv.nl/?url='
    }
};

/**
 * 获取完整 API URL
 * @param {string} endpointKey - API 端点键名
 * @returns {string} 完整 URL
 */
window.getApiUrl = function(endpointKey) {
    const config = window.APP_CONFIG;
    const endpoint = config.API_ENDPOINTS[endpointKey];
    if (!endpoint) {
        console.error('Unknown API endpoint:', endpointKey);
        return config.API_BASE;
    }
    return config.API_BASE + endpoint;
};

/**
 * 获取 Supabase 配置（用于 REST API 直接调用）
 * @returns {object} 包含 url, headers 等
 */
window.getSupabaseConfig = function() {
    const config = window.APP_CONFIG;
    return {
        url: config.SUPABASE_URL,
        headers: {
            'apikey': config.ANON_KEY,
            'Authorization': 'Bearer ' + config.ANON_KEY,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
        }
    };
};

/**
 * 构建 Supabase REST 查询 URL
 * @param {string} table - 表名
 * @param {string} select - 选择字段
 * @param {object} filters - 过滤条件
 * @returns {string} 完整查询 URL
 */
window.buildSupabaseQueryUrl = function(table, select = '*', filters = {}) {
    const config = window.APP_CONFIG;
    let url = `${config.SUPABASE_URL}/rest/v1/${table}?select=${encodeURIComponent(select)}`;
    for (const [key, value] of Object.entries(filters)) {
        url += `&${key}=eq.${encodeURIComponent(value)}`;
    }
    return url;
};
