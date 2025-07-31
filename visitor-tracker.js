// visitor-tracker.js

class VisitorTracker {
    constructor(supabaseUrl, supabaseKey, options = {}) {
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        this.options = {
            trackLocation: true,
            trackDevice: true,
            trackReferrer: true,
            ...options
        };
    }

    async collectAndSend() {
        try {
            const visitorData = await this.collectVisitorData();
            await this.sendVisitorData(visitorData);
        } catch (error) {
            console.error('Visitor tracking error:', error);
        }
    }

    async collectVisitorData() {
        const data = {
            user_agent: navigator.userAgent,
            page_url: window.location.href,
            created_at: new Date().toISOString()
        };

        if (this.options.trackReferrer) {
            data.referrer = document.referrer;
        }

        if (this.options.trackDevice) {
            const ua = this.parseUserAgent(navigator.userAgent);
            data.device_type = ua.device.type || 'desktop';
            data.browser = ua.browser.name;
            data.os = ua.os.name;
        }

        if (this.options.trackLocation) {
            try {
                const locationData = await this.fetchLocationData();
                Object.assign(data, locationData);
            } catch (error) {
                console.warn('Failed to fetch location data:', error);
            }
        }

        return data;
    }

    parseUserAgent(userAgent) {
        // 简单解析，如果需要更精确的解析可以引入UAParser.js
        const ua = userAgent.toLowerCase();
        return {
            browser: {
                name: ua.includes('chrome') ? 'Chrome' :
                    ua.includes('firefox') ? 'Firefox' :
                        ua.includes('safari') ? 'Safari' :
                            ua.includes('edge') ? 'Edge' :
                                ua.includes('opera') ? 'Opera' : 'Unknown'
            },
            os: {
                name: ua.includes('windows') ? 'Windows' :
                    ua.includes('mac os') ? 'Mac OS' :
                        ua.includes('linux') ? 'Linux' :
                            ua.includes('android') ? 'Android' :
                                ua.includes('ios') ? 'iOS' : 'Unknown'
            },
            device: {
                type: ua.includes('mobile') ? 'mobile' :
                    ua.includes('tablet') ? 'tablet' : 'desktop'
            }
        };
    }

    async fetchLocationData() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) throw new Error('IP API request failed');

            const ipData = await response.json();
            return {
                ip_address: ipData.ip,
                country: ipData.country_name,
                region: ipData.region,
                city: ipData.city,
                latitude: ipData.latitude,
                longitude: ipData.longitude
            };
        } catch (error) {
            console.warn('Location API error:', error);
            return {};
        }
    }

    async sendVisitorData(data) {
        try {
            const response = await fetch(`${this.supabaseUrl}/rest/v1/visitor_stats`, {
                method: 'POST',
                headers: {
                    'apikey': this.supabaseKey,
                    'Authorization': `Bearer ${this.supabaseKey}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error sending visitor data:', error);
            throw error;
        }
    }
}

// 创建默认实例并自动收集数据（如果配置了自动跟踪）
if (typeof window !== 'undefined' && window.VisitorTrackerAutoInit !== false) {
    const defaultTracker = new VisitorTracker(
        'https://dshmbsawwrbuycnivcjs.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzaG1ic2F3d3JidXljbml2Y2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5Mjg2OTAsImV4cCI6MjA2OTUwNDY5MH0.fwRJD-WuST7mCbJf9h2i2Xk0z6mtCMCeV--JGUecC6A',
        {
            trackLocation: true,
            trackDevice: true,
            trackReferrer: true
        }
    );

    document.addEventListener('DOMContentLoaded', () => {
        defaultTracker.collectAndSend();
    });
}

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VisitorTracker;
} else if (typeof define === 'function' && define.amd) {
    define([], () => VisitorTracker);
} else {
    window.VisitorTracker = VisitorTracker;
}