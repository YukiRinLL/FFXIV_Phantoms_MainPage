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
     * 通过艾欧泽亚年月日时分生成时间对象
     * @param {number} year - 艾欧泽亚年份
     * @param {number} month - 艾欧泽亚月份 (1-12)
     * @param {number} day - 艾欧泽亚日 (1-32)
     * @param {number} hour - 艾欧泽亚小时 (0-23)
     * @param {number} minute - 艾欧泽亚分钟 (0-59)
     * @returns {EorzeaTime}
     */
    static fromEorzeaTime(year, month, day, hour, minute) {
        // 计算艾欧泽亚时间对应的现实时间
        const eorzeaTotalMinutes = (year * 12 * 32 * 24 * 60) +
                                  ((month - 1) * 32 * 24 * 60) +
                                  ((day - 1) * 24 * 60) +
                                  (hour * 60) + minute;

        const realTotalMinutes = eorzeaTotalMinutes / 144; // 艾欧泽亚时间与现实时间比例为144:1
        const timestamp = realTotalMinutes * 60 * 1000; // 转换为毫秒

        return new EorzeaTime(timestamp);
    }

    /**
     * 通过纪元时间区间数生成时间对象
     * @param {number} index - 纪元时间区间数索引
     * @returns {EorzeaTime}
     */
    static fromEpochIntervalIndex(index) {
        // 每个时间区间为8个艾欧泽亚小时（现实世界2分40秒）
        const intervalDuration = (8 * 60) / 144 * 60 * 1000; // 转换为现实时间毫秒
        const timestamp = index * intervalDuration;
        return new EorzeaTime(timestamp);
    }

    /**
     * 获取艾欧泽亚时间的年份
     * @returns {number}
     */
    getYear() {
        const totalMinutes = this.timestamp / (60 * 1000) * 144;
        return Math.floor(totalMinutes / (12 * 32 * 24 * 60)) + 1;
    }

    /**
     * 获取艾欧泽亚时间的月份
     * @returns {number} 月份 (1-12)
     */
    getMonth() {
        const totalMinutes = this.timestamp / (60 * 1000) * 144;
        const yearMinutes = 12 * 32 * 24 * 60;
        return Math.floor((totalMinutes % yearMinutes) / (32 * 24 * 60)) + 1;
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
        const totalMinutes = this.timestamp / (60 * 1000) * 144;
        const monthMinutes = 32 * 24 * 60;
        return Math.floor((totalMinutes % monthMinutes) / (24 * 60)) + 1;
    }

    /**
     * 获取艾欧泽亚时间的小时数
     * @returns {number} 小时 (0-23)
     */
    getHour() {
        const totalMinutes = this.timestamp / (60 * 1000) * 144;
        return Math.floor((totalMinutes % (24 * 60)) / 60);
    }

    /**
     * 获取艾欧泽亚时间的分钟数
     * @returns {number} 分钟 (0-59)
     */
    getMinute() {
        const totalMinutes = this.timestamp / (60 * 1000) * 144;
        return Math.floor(totalMinutes % 60);
    }

    /**
     * 获取当前时间对应的天气索引值
     * @returns {number}
     */
    getWeatherValue() {
        // 基于纪元时间区间计算天气
        const epochInterval = this.getEpochIntervalIndex();
        // 简化的天气计算算法（实际FF14天气算法更复杂）
        return (epochInterval * 7 + this.getDay() * 3 + this.getHour()) % 24;
    }

    /**
     * 获取当前时间所处于当日的时间区间索引（0~2）
     * 每个区间8小时：0=00:00-07:59, 1=08:00-15:59, 2=16:00-23:59
     * @returns {number}
     */
    getDayIntervalIndex() {
        return Math.floor(this.getHour() / 8);
    }

    /**
     * 获取纪元时间区间数索引
     * @returns {number}
     */
    getEpochIntervalIndex() {
        // 从某个固定起点开始计算（例如：FF14发布日）
        const baseTimestamp = new Date('2013-08-27').getTime();
        const elapsedTime = this.timestamp - baseTimestamp;
        const intervalDuration = (8 * 60) / 144 * 60 * 1000; // 每个区间现实时间毫秒
        return Math.floor(elapsedTime / intervalDuration);
    }

    /**
     * 以当前时间为基础，获取当前时间区间开始时的时间对象
     * @param {number} offset - 额外偏移的时间区间数量（可选）
     * @returns {EorzeaTime}
     */
    getIntervalStartEorzeaTime(offset = 0) {
        const baseInterval = this.getEpochIntervalIndex();
        const targetInterval = baseInterval + offset;
        return EorzeaTime.fromEpochIntervalIndex(targetInterval);
    }

    /**
     * 格式化艾欧泽亚时间为字符串
     * @returns {string}
     */
    toString() {
        const hour = this.getHour().toString().padStart(2, '0');
        const minute = this.getMinute().toString().padStart(2, '0');
        return `${this.getYear()}-${this.getMonth().toString().padStart(2, '0')}-${this.getDay().toString().padStart(2, '0')} ${hour}:${minute}`;
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
            dayInterval: this.getDayIntervalIndex(),
            epochInterval: this.getEpochIntervalIndex(),
            weatherValue: this.getWeatherValue(),
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