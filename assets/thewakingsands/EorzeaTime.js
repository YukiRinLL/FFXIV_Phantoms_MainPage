class EorzeaTime {
    /** 现实时间的时间戳，单位为毫秒 */
    timestamp: number;
    constructor(timestamp?: number);
    /** 通过艾欧泽亚年月日时分生成时间对象 */
    static fromEorzeaTime(year: number, month: number, day: number, hour: number, minute: number): EorzeaTime;
    /** 通过纪元时间区间数生成时间对象 */
    static fromEpochIntervalIndex(index: number): EorzeaTime;
    /** 获取艾欧泽亚时间的年份 */
    getYear(): number;
    /** 获取艾欧泽亚时间的月份 */
    getMonth(): number;
    /** 获取艾欧泽亚时间的月份的名字 */
    getMonthName(): string;
    /** 获取艾欧泽亚时间的日数 */
    getDay(): number;
    /** 获取艾欧泽亚时间的小时数 */
    getHour(): number;
    /** 获取艾欧泽亚时间的分钟数 */
    getMinute(): number;
    /** 获取当前时间对应的天气索引值 */
    getWeatherValue(): number;
    /** 获取当前时间所处于当日的时间区间索引（0~2） */
    getDayIntervalIndex(): number;
    /** 获取纪元时间区间数索引 */
    getEpochIntervalIndex(): number;
    /** 以当前时间为基础，获取当前时间区间开始时的时间对象，可以额外指定偏移的时间区间数量 */
    getIntervalStartEorzeaTime(offset?: number): EorzeaTime;
}