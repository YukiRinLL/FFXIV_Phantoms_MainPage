/**
 * Supabase REST API 客户端封装
 * 统一所有 Supabase API 调用
 */

window.SupabaseClient = {
    /**
     * 查询数据
     * @param {string} table - 表名
     * @param {string} select - 选择字段
     * @param {object} filters - 过滤条件 { column: value }
     * @returns {Promise<Array>} 查询结果
     */
    async from(table, select = '*', filters = {}) {
        const config = window.getSupabaseConfig();
        let url = `${config.url}/rest/v1/${table}?select=${encodeURIComponent(select)}`;
        
        for (const [key, value] of Object.entries(filters)) {
            url += `&${key}=eq.${encodeURIComponent(value)}`;
        }
        
        const response = await fetch(url, { headers: config.headers });
        if (!response.ok) {
            throw new Error(`Supabase 查询失败: HTTP ${response.status}`);
        }
        return response.json();
    },

    /**
     * 插入数据
     * @param {string} table - 表名
     * @param {object|Array} data - 要插入的数据
     * @returns {Promise<object|Array>} 插入结果
     */
    async insert(table, data) {
        const config = window.getSupabaseConfig();
        
        const response = await fetch(`${config.url}/rest/v1/${table}`, {
            method: 'POST',
            headers: {
                ...config.headers,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`Supabase 插入失败: HTTP ${response.status}`);
        }
        return response.json();
    },

    /**
     * 更新数据
     * @param {string} table - 表名
     * @param {object} data - 要更新的数据
     * @param {object} filter - 过滤条件
     * @returns {Promise<object|Array>} 更新结果
     */
    async update(table, data, filter) {
        const config = window.getSupabaseConfig();
        
        let url = `${config.url}/rest/v1/${table}`;
        if (filter) {
            const params = new URLSearchParams();
            for (const [key, value] of Object.entries(filter)) {
                params.set(key, `eq.${value}`);
            }
            url += `?${params.toString()}`;
        }
        
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                ...config.headers,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`Supabase 更新失败: HTTP ${response.status}`);
        }
        return response.json();
    },

    /**
     * 删除数据
     * @param {string} table - 表名
     * @param {object} filter - 过滤条件
     * @returns {Promise} 删除结果
     */
    async remove(table, filter) {
        const config = window.getSupabaseConfig();
        
        let url = `${config.url}/rest/v1/${table}`;
        if (filter) {
            const params = new URLSearchParams();
            for (const [key, value] of Object.entries(filter)) {
                params.set(key, `eq.${value}`);
            }
            url += `?${params.toString()}`;
        }
        
        const response = await fetch(url, {
            method: 'DELETE',
            headers: config.headers
        });
        
        if (!response.ok) {
            throw new Error(`Supabase 删除失败: HTTP ${response.status}`);
        }
        // DELETE 默认不返回内容
        if (response.status === 204) {
            return { success: true };
        }
        return response.json().catch(() => ({ success: true }));
    },

    /**
     * 发送原始请求（用于特殊查询）
     * @param {object} options - 请求选项
     * @param {string} options.table - 表名
     * @param {string} [options.method='GET'] - HTTP 方法
     * @param {string} [options.select='*'] - 选择字段
     * @param {object} [options.filters={}] - 过滤条件
     * @param {object} [options.data] - 请求体
     * @param {string} [options.order] - 排序
     * @param {number} [options.limit] - 限制数量
     * @param {number} [options.offset] - 偏移量
     * @returns {Promise} 请求结果
     */
    async request(options) {
        const config = window.getSupabaseConfig();
        const {
            table,
            method = 'GET',
            select = '*',
            filters = {},
            data,
            order,
            limit,
            offset
        } = options;
        
        let url = `${config.url}/rest/v1/${table}?select=${encodeURIComponent(select)}`;
        
        for (const [key, value] of Object.entries(filters)) {
            url += `&${key}=eq.${encodeURIComponent(value)}`;
        }
        if (order) url += `&order=${encodeURIComponent(order)}`;
        if (limit !== undefined) url += `&limit=${limit}`;
        if (offset !== undefined) url += `&offset=${offset}`;
        
        const headers = {
            ...config.headers
        };
        if (method !== 'GET' && data) {
            headers['Content-Type'] = 'application/json';
            headers['Prefer'] = 'return=representation';
        }
        
        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: data ? JSON.stringify(data) : undefined
        });
        
        if (!response.ok) {
            throw new Error(`Supabase 请求失败: ${method} ${table} - HTTP ${response.status}`);
        }
        return response.json().catch(() => ({ success: true }));
    }
};

// DOMContentLoaded 时检查是否已加载
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        if (!window.APP_CONFIG) {
            console.warn('SupabaseClient: APP_CONFIG 未加载，请确保 config.js 已引入');
        }
    });
}
