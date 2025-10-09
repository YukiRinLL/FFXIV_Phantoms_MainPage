// EorzeaTime.js - 艾欧泽亚时间计算工具
class EorzeaTime {
    /**
     * 构造函数
     * @param {number} timestamp - 现实时间的时间戳，单位为毫秒（可选，默认为当前时间）
     */
    constructor(timestamp) {
        this.timestamp = timestamp || Date.now();
    }

    /**
     * 获取艾欧泽亚时间的年份
     * @returns {number}
     */
    getYear() {
        const earthSeconds = this.timestamp / 1000; // 转换为秒
        const eorzeaSeconds = earthSeconds * 3600 / 175; // 艾欧泽亚时间常数
        return Math.floor(eorzeaSeconds / (12 * 32 * 24 * 60 * 60)) + 1;
    }

    /**
     * 获取艾欧泽亚时间的月份
     * @returns {number} 月份 (1-12)
     */
    getMonth() {
        const earthSeconds = this.timestamp / 1000;
        const eorzeaSeconds = earthSeconds * 3600 / 175;
        const yearSeconds = 12 * 32 * 24 * 60 * 60;
        return Math.floor((eorzeaSeconds % yearSeconds) / (32 * 24 * 60 * 60)) + 1;
    }

    /**
     * 获取艾欧泽亚时间的月份的名字
     * @returns {string}
     */
    getMonthName() {
        const months = [
            '1st Umbral Moon', '1st Astral Moon', '2nd Umbral Moon', '2nd Astral Moon',
            '3rd Umbral Moon', '3rd Astral Moon', '4th Umbral Moon', '4th Astral Moon',
            '5th Umbral Moon', '5th Astral Moon', '6th Umbral Moon', '6th Astral Moon'
        ];
        return months[this.getMonth() - 1];
    }

    /**
     * 获取艾欧泽亚时间的日数
     * @returns {number} 日数 (1-32)
     */
    getDay() {
        const earthSeconds = this.timestamp / 1000;
        const eorzeaSeconds = earthSeconds * 3600 / 175;
        const monthSeconds = 32 * 24 * 60 * 60;
        return Math.floor((eorzeaSeconds % monthSeconds) / (24 * 60 * 60)) + 1;
    }

    /**
     * 获取艾欧泽亚时间的小时数
     * @returns {number} 小时 (0-23)
     */
    getHour() {
        const earthSeconds = this.timestamp / 1000;
        const eorzeaSeconds = earthSeconds * 3600 / 175;
        const daySeconds = 24 * 60 * 60;
        return Math.floor((eorzeaSeconds % daySeconds) / (60 * 60));
    }

    /**
     * 获取艾欧泽亚时间的分钟数
     * @returns {number} 分钟 (0-59)
     */
    getMinute() {
        const earthSeconds = this.timestamp / 1000;
        const eorzeaSeconds = earthSeconds * 3600 / 175;
        const hourSeconds = 60 * 60;
        return Math.floor((eorzeaSeconds % hourSeconds) / 60);
    }

    /**
     * 获取艾欧泽亚时间的秒数
     * @returns {number} 秒数 (0-59)
     */
    getSecond() {
        const earthSeconds = this.timestamp / 1000;
        const eorzeaSeconds = earthSeconds * 3600 / 175;
        return Math.floor(eorzeaSeconds % 60);
    }

    /**
     * 格式化艾欧泽亚时间为字符串
     * @returns {string}
     */
    toString() {
        const hour = this.getHour().toString().padStart(2, '0');
        const minute = this.getMinute().toString().padStart(2, '0');
        const second = this.getSecond().toString().padStart(2, '0');
        return `${this.getYear()}-${this.getMonth().toString().padStart(2, '0')}-${this.getDay().toString().padStart(2, '0')} ${hour}:${minute}:${second}`;
    }

    /**
     * 获取详细的艾欧泽亚时间信息
     * @returns {object}
     */
    getTimeInfo() {
        return {
            year: this.getYear(),
            month: this.getMonth(),
            monthName: this.getMonthName(),
            day: this.getDay(),
            hour: this.getHour(),
            minute: this.getMinute(),
            second: this.getSecond(),
            formatted: this.toString()
        };
    }
}

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EorzeaTime;
}

// 全局变量导出（用于浏览器环境）
if (typeof window !== 'undefined') {
    window.EorzeaTime = EorzeaTime;
}