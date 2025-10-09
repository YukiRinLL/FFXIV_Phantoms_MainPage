!
function(e) {
    "function" == typeof define && define.amd ? define(e) : e()
} ((function() {
    "use strict";
    var e = {
        "极光": ["库尔札斯西部高地", "旧萨雷安"],
        "钻石星辰": ["库尔札斯西部高地", "荣誉野", "优雷卡恒冰之地"]
    },
    t = 175e3,
    r = 2916.6666666666665,
    n = 42e5,
    a = 1344e5,
    i = 16128e5,
    o = {
        1 : "星1月",
        2 : "灵1月",
        3 : "星2月",
        4 : "灵2月",
        5 : "星3月",
        6 : "灵3月",
        7 : "星4月",
        8 : "灵4月",
        9 : "星5月",
        10 : "灵5月",
        11 : "星6月",
        12 : "灵6月"
    },
    s = function() {
        function e(e) {
            this.timestamp = 0,
            this.timestamp = e || Date.now()
        }
        return e.fromEorzeaTime = function(o, s, u, l, p) {
            if (o < 0) throw new Error("year 必须是正数。");
            if (s < 1 || s > 12) throw new Error("month 必须在 1 到 ".concat(12, " 之间。"));
            if (u < 1 || u > 32) throw new Error("day 必须在 1 到 ".concat(32, " 之间。"));
            if (l < 0 || l >= 24) throw new Error("hour 必须在 0 到 ".concat(23, " 之间。"));
            if (p < 0 || p >= 60) throw new Error("minute 必须在 0 到 ".concat(59, " 之间。"));
            return new e(i * o + a * (s - 1) + n * (u - 1) + t * l + r * p)
        },
        e.fromEpochIntervalIndex = function(r) {
            return new e(r * t * 8)
        },
        e.prototype.getYear = function() {
            return Math.floor(this.timestamp / i)
        },
        e.prototype.getMonth = function() {
            return Math.floor(this.timestamp / a) % 12 + 1
        },
        e.prototype.getDay = function() {
            return Math.floor(this.timestamp / n) % 32 + 1
        },
        e.prototype.getHour = function() {
            return Math.floor(this.timestamp / t) % 24
        },
        e.prototype.getMinute = function() {
            return Math.floor(this.timestamp / r) % 60
        },
        e.prototype.getMonthName = function() {
            return o[this.getMonth()]
        },
        e.prototype.getWeatherValue = function() {
            var t = this.getEpochIntervalIndex();
            if (null == e.cache[t]) {
                var r = 100 * Math.floor(this.timestamp / n) + 8 * (this.getDayIntervalIndex() + 1) % 24;
                r = ((r = (r << 11 ^ r) >>> 0) >>> 8 ^ r) >>> 0,
                e.cache[t] = r
            }
            return e.cache[t]
        },
        e.prototype.getDayIntervalIndex = function() {
            return Math.floor(this.getHour() / 8)
        },
        e.prototype.getEpochIntervalIndex = function() {
            return Math.floor(this.timestamp / 14e5)
        },
        e.prototype.getIntervalStartEorzeaTime = function(t) {
            return e.fromEpochIntervalIndex(this.getEpochIntervalIndex() + (t || 0))
        },
        e.cache = {},
        e
    } ();
    function u(e, t, r) {
        if (r || 2 === arguments.length) for (var n, a = 0,
        i = t.length; a < i; a++) ! n && a in t || (n || (n = Array.prototype.slice.call(t, 0, a)), n[a] = t[a]);
        return e.concat(n || Array.prototype.slice.call(t))
    }
    var l = {
        1 : {
            i: 60201,
            n: "碧空"
        },
        2 : {
            i: 60202,
            n: "晴朗"
        },
        3 : {
            i: 60203,
            n: "阴云"
        },
        4 : {
            i: 60204,
            n: "薄雾"
        },
        5 : {
            i: 60205,
            n: "微风"
        },
        6 : {
            i: 60206,
            n: "强风"
        },
        7 : {
            i: 60207,
            n: "小雨"
        },
        8 : {
            i: 60208,
            n: "暴雨"
        },
        9 : {
            i: 60209,
            n: "打雷"
        },
        10 : {
            i: 60210,
            n: "雷雨"
        },
        11 : {
            i: 60211,
            n: "扬沙"
        },
        14 : {
            i: 60214,
            n: "热浪"
        },
        15 : {
            i: 60215,
            n: "小雪"
        },
        16 : {
            i: 60216,
            n: "暴雪"
        },
        17 : {
            i: 60218,
            n: "妖雾"
        },
        49 : {
            i: 60219,
            n: "灵风"
        },
        50 : {
            i: 60220,
            n: "灵电"
        },
        148 : {
            i: 60222,
            n: "月尘"
        },
        149 : {
            i: 60223,
            n: "磁暴"
        },
        190 : {
            i: 60238,
            n: "幻怪"
        },
        191 : {
            i: 60239,
            n: "幻妖"
        }
    },
    p = {
        "利姆萨·罗敏萨": [3, 20, 1, 30, 2, 30, 4, 10, 7, 10],
        "中拉诺西亚": [3, 20, 1, 30, 2, 20, 5, 10, 4, 10, 7, 10],
        "拉诺西亚低地": [3, 20, 1, 30, 2, 20, 5, 10, 4, 10, 7, 10],
        "东拉诺西亚": [4, 5, 1, 45, 2, 30, 3, 10, 7, 5, 8, 5],
        "西拉诺西亚": [4, 10, 1, 30, 2, 20, 3, 20, 5, 10, 6, 10],
        "拉诺西亚高地": [1, 30, 2, 20, 3, 20, 4, 10, 9, 10, 10, 10],
        "拉诺西亚外地": [1, 30, 2, 20, 3, 20, 4, 15, 7, 15],
        "狼狱停船场": [3, 20, 1, 30, 2, 30, 4, 10, 10, 10],
        "海雾村": [3, 20, 1, 30, 2, 20, 2, 10, 4, 10, 7, 10],
        "格里达尼亚": [7, 5, 7, 15, 4, 10, 3, 10, 2, 15, 1, 30, 2, 15],
        "黑衣森林中央林区": [9, 5, 7, 15, 4, 10, 3, 10, 2, 15, 1, 30, 2, 15],
        "黑衣森林东部林区": [9, 5, 7, 15, 4, 10, 3, 10, 2, 15, 1, 30, 2, 15],
        "黑衣森林南部林区": [4, 5, 10, 5, 9, 15, 4, 5, 3, 10, 2, 30, 1, 30],
        "黑衣森林北部林区": [4, 5, 8, 5, 7, 15, 4, 5, 3, 10, 2, 30, 1, 30],
        "薰衣草苗圃": [3, 5, 7, 15, 4, 10, 3, 10, 2, 15, 1, 30, 2, 15],
        "乌尔达哈": [1, 40, 2, 20, 3, 25, 4, 10, 7, 5],
        "西萨纳兰": [1, 40, 2, 20, 3, 25, 4, 10, 7, 5],
        "中萨纳兰": [11, 15, 1, 40, 2, 20, 3, 10, 4, 10, 7, 5],
        "东萨纳兰": [1, 40, 2, 20, 3, 10, 4, 10, 7, 5, 8, 15],
        "南萨纳兰": [14, 20, 1, 40, 2, 20, 3, 10, 4, 10],
        "北萨纳兰": [1, 5, 2, 15, 3, 30, 4, 50],
        "高脚孤丘": [1, 40, 2, 20, 3, 25, 4, 10, 7, 5],
        "伊修加德": [15, 60, 2, 10, 1, 5, 3, 15, 4, 10],
        "库尔札斯中央高地": [16, 20, 15, 40, 2, 10, 1, 5, 3, 15, 4, 10],
        "库尔札斯西部高地": [16, 20, 15, 40, 2, 10, 1, 5, 3, 15, 4, 10],
        "穹顶皓天": [15, 5, 2, 20, 1, 40, 3, 15, 4, 10],
        "阿巴拉提亚云海": [1, 30, 2, 30, 3, 10, 4, 10, 5, 10, 49, 10],
        "魔大陆阿济兹拉": [2, 35, 3, 35, 9, 30],
        "田园郡": [3, 10, 4, 10, 7, 10, 8, 10, 1, 30, 2, 30],
        "龙堡参天高地": [3, 10, 4, 10, 9, 10, 11, 10, 1, 30, 2, 30],
        "龙堡内陆低地": [3, 10, 4, 10, 7, 10, 8, 10, 1, 30, 2, 30],
        "翻云雾海": [3, 10, 6, 10, 50, 20, 1, 30, 2, 30],
        "神拳痕": [1, 15, 2, 45, 3, 20, 4, 10, 9, 10],
        "基拉巴尼亚边区": [1, 15, 2, 45, 3, 20, 4, 10, 9, 10],
        "基拉巴尼亚山区": [1, 10, 2, 50, 3, 15, 4, 10, 5, 10, 11, 5],
        "基拉巴尼亚湖区": [1, 20, 2, 40, 3, 20, 4, 10, 10, 10],
        "黄金港": [7, 10, 4, 10, 3, 20, 2, 40, 1, 20],
        "白银乡": [7, 10, 4, 10, 3, 20, 2, 40, 1, 20],
        "红玉海": [9, 10, 5, 10, 3, 15, 2, 40, 1, 25],
        "延夏": [8, 5, 7, 10, 4, 10, 3, 15, 2, 40, 1, 20],
        "太阳神草原": [6, 5, 5, 5, 7, 7, 4, 8, 3, 10, 2, 40, 1, 25],
        "多玛飞地": [8, 5, 7, 10, 4, 10, 3, 15, 2, 40, 1, 20],
        "拉札罕": [4, 10, 7, 15, 1, 15, 2, 40, 3, 20],
        "萨维奈岛": [4, 10, 7, 10, 8, 5, 1, 15, 2, 40, 3, 20],
        "加雷马": [15, 45, 9, 5, 7, 5, 4, 5, 3, 25, 2, 10, 1, 5],
        "图莱尤拉": [1, 40, 2, 40, 3, 5, 4, 10, 7, 5],
        "奥阔帕恰山": [1, 20, 2, 30, 3, 20, 4, 10, 5, 10, 15, 10],
        "克扎玛乌卡湿地": [1, 25, 2, 35, 3, 15, 4, 10, 7, 10, 8, 5],
        "亚克特尔树海": [1, 15, 2, 40, 3, 15, 4, 15, 7, 15],
        "九号解决方案": [2, 100],
        "夏劳尼荒野": [1, 5, 2, 45, 3, 20, 11, 15, 6, 15],
        "遗产之地": [2, 5, 3, 20, 4, 15, 7, 5, 10, 5, 50, 50],
        "水晶都": [1, 20, 2, 40, 3, 15, 4, 10, 7, 10, 10, 5],
        "游末邦": [6, 10, 7, 10, 4, 10, 3, 15, 2, 40, 1, 15],
        "雷克兰德": [1, 20, 2, 40, 3, 15, 4, 10, 7, 10, 10, 5],
        "珂露西亚岛": [6, 10, 7, 10, 4, 10, 3, 15, 2, 40, 1, 15],
        "安穆·艾兰": [2, 45, 3, 15, 11, 10, 14, 10, 1, 20],
        "伊尔美格": [7, 10, 4, 10, 3, 15, 10, 10, 1, 15, 2, 40],
        "拉凯提卡大森林": [4, 10, 7, 10, 49, 10, 1, 15, 2, 40, 3, 15],
        "黑风海": [3, 20, 2, 60, 1, 20],
        "摩杜纳": [3, 15, 4, 15, 17, 30, 1, 15, 2, 25],
        "旧萨雷安": [1, 10, 2, 40, 3, 20, 4, 15, 15, 15],
        "迷津": [1, 15, 2, 45, 3, 25, 7, 15],
        "叹息海": [49, 15, 148, 15, 2, 70],
        "天外天垓": [149, 15, 2, 70, 49, 15],
        "厄尔庇斯": [3, 25, 49, 15, 2, 45, 1, 15],
        "活着的记忆": [7, 10, 4, 10, 3, 20, 2, 60],
        "努力号": [3, 20, 1, 30, 2, 30, 4, 10, 7, 10],
        "无名岛": [1, 25, 2, 45, 3, 10, 7, 10, 4, 5, 8, 5],
        "憧憬湾": [148, 15, 2, 70, 49, 15],
        "法恩娜行星": [2, 60, 3, 20, 7, 20],
        "尘封秘岩": [4, 15, 7, 25, 2, 60],
        "荣誉野": [2, 35, 15, 30, 16, 20, 4, 15],
        "昂萨哈凯尔": [2, 50, 5, 30, 7, 10, 6, 5, 4, 5],
        "优雷卡常风之地": [2, 30, 6, 30, 8, 30, 15, 10],
        "优雷卡恒冰之地": [2, 10, 4, 18, 14, 18, 15, 18, 9, 18, 16, 18],
        "优雷卡涌火之地": [2, 10, 14, 18, 9, 18, 16, 18, 49, 18, 15, 18],
        "优雷卡丰水之地": [2, 12, 8, 22, 17, 22, 10, 22, 15, 22],
        "南方博兹雅战线": [2, 52, 7, 12, 5, 12, 9, 12, 11, 12],
        "扎杜诺尔高原": [2, 60, 7, 10, 5, 10, 9, 10, 15, 10],
        "新月岛南部": [1, 10, 2, 45, 3, 15, 7, 10, 190, 15, 191, 5]
    },
    h = [{
        name: "拉诺西亚",
        icon: 1,
        zones: [{
            name: "拉诺西亚",
            maps: ["利姆萨·罗敏萨", "中拉诺西亚", "拉诺西亚低地", "东拉诺西亚", "西拉诺西亚", "拉诺西亚高地", "拉诺西亚外地", "狼狱停船场", "海雾村"]
        }]
    },
    {
        name: "黑衣森林",
        icon: 2,
        zones: [{
            name: "黑衣森林",
            maps: ["格里达尼亚", "黑衣森林中央林区", "黑衣森林东部林区", "黑衣森林南部林区", "黑衣森林北部林区", "薰衣草苗圃"]
        }]
    },
    {
        name: "萨纳兰",
        icon: 3,
        zones: [{
            name: "萨纳兰",
            maps: ["乌尔达哈", "西萨纳兰", "中萨纳兰", "东萨纳兰", "南萨纳兰", "北萨纳兰", "高脚孤丘"]
        }]
    },
    {
        name: "伊修加德周边",
        icon: 4,
        zones: [{
            name: "库尔札斯",
            maps: ["伊修加德", "库尔札斯中央高地", "库尔札斯西部高地", "穹顶皓天"]
        },
        {
            name: "阿巴拉提亚",
            maps: ["阿巴拉提亚云海", "魔大陆阿济兹拉"]
        },
        {
            name: "龙堡",
            maps: ["田园郡", "龙堡参天高地", "龙堡内陆低地", "翻云雾海"]
        }]
    },
    {
        name: "基拉巴尼亚",
        icon: 5,
        zones: [{
            name: "基拉巴尼亚",
            maps: ["神拳痕", "基拉巴尼亚边区", "基拉巴尼亚山区", "基拉巴尼亚湖区"]
        }]
    },
    {
        name: "东方地域",
        icon: 6,
        zones: [{
            name: "远东之国",
            maps: ["黄金港", "白银乡"]
        },
        {
            name: "奥萨德",
            maps: ["红玉海", "延夏", "太阳神草原", "多玛飞地"]
        }]
    },
    {
        name: "伊尔萨巴德大陆",
        icon: 8,
        zones: [{
            name: "伊尔萨巴德",
            maps: ["拉札罕", "萨维奈岛", "加雷马"]
        }]
    },
    {
        name: "图拉尔大陆",
        icon: 9,
        zones: [{
            name: "尤卡图拉尔",
            maps: ["图莱尤拉", "奥阔帕恰山", "克扎玛乌卡湿地", "亚克特尔树海"]
        },
        {
            name: "萨卡图拉尔",
            maps: ["九号解决方案", "夏劳尼荒野", "遗产之地"]
        }]
    },
    {
        name: "诺弗兰特",
        icon: 7,
        zones: [{
            name: "诺弗兰特",
            maps: ["水晶都", "游末邦", "雷克兰德", "珂露西亚岛", "安穆·艾兰", "伊尔美格", "拉凯提卡大森林", "黑风海"]
        }]
    },
    {
        name: "其他",
        icon: 0,
        zones: [{
            name: "摩杜纳",
            maps: ["摩杜纳"]
        },
        {
            name: "北洋地域",
            maps: ["旧萨雷安", "迷津"]
        },
        {
            name: "星外天域",
            maps: ["叹息海", "天外天垓"]
        },
        {
            name: "古代世界",
            maps: ["厄尔庇斯"]
        },
        {
            name: "无失世界",
            maps: ["活着的记忆"]
        }]
    },
    {
        name: "副本",
        icon: 99,
        zones: [{
            name: "出海垂钓",
            maps: ["努力号"]
        },
        {
            name: "开拓无人岛",
            maps: ["无名岛"]
        },
        {
            name: "宇宙探索",
            maps: ["憧憬湾", "法恩娜行星"]
        },
        {
            name: "纷争前线",
            maps: ["尘封秘岩", "荣誉野", "昂萨哈凯尔"]
        },
        {
            name: "禁地优雷卡",
            maps: ["优雷卡常风之地", "优雷卡恒冰之地", "优雷卡涌火之地", "优雷卡丰水之地"]
        },
        {
            name: "天佑女王",
            maps: ["南方博兹雅战线", "扎杜诺尔高原"]
        },
        {
            name: "蜃景幻界新月岛",
            maps: ["新月岛南部"]
        }]
    }],
    m = e,
    c = 1e5,
    f = ["小雨", "暴雨", "雷雨"],
    g = u(u([], f, !0), ["小雪", "暴雪", "薄雾"], !1),
    v = function() {
        function e(e) {
            var t;
            if (!p[e]) throw new Error("地图 ".concat(e, " 不支持，请检查数据"));
            this.mapName = e,
            t = this._generateWeatherMap(),
            this._weahterMap = t[0],
            this._validWeathers = t[1],
            this._rainbowWeathers = this._getRainbowWeather()
        }
        return e.prototype._generateWeatherMap = function() {
            var e = p[this.mapName];
            if (e.length % 2 != 0) throw new Error("地图 ".concat(this.mapName, " 数据不正确，配置数量不是2的倍数，请检查数据"));
            for (var t = [], r = [], n = 0; n < e.length; n += 2) t = t.concat(Array(e[n + 1]).fill(e[n])),
            r.includes(l[e[n]].n) || r.push(l[e[n]].n);
            return [t, r]
        },
        e.getMapGroups = function() {
            return h
        },
        e.prototype.getValidWeathers = function() {
            return this._validWeathers
        },
        e.getValidMaps = function() {
            return Object.keys(p)
        },
        e.getWeatherIconId = function(e) {
            for (var t = 0,
            r = Object.values(l); t < r.length; t++) {
                var n = r[t];
                if (n.n === e) return n.i
            }
            return - 1
        },
        e.prototype.getWeathers = function(e, t) {
            null == t ? t = Date.now() : t instanceof s && (t = t.timestamp);
            var r = 0,
            n = 0;
            return "object" == typeof e ? (n = Math.abs(e[0]), r = Math.abs(e[1])) : "number" == typeof e && (e > 0 ? r = e: n = -e),
            this._getWeathers(n, r, t)
        },
        e.prototype._generateWeatherResult = function(e, t, r) {
            var n = this._weahterMap[e % this._weahterMap.length];
            return null == r ? {
                wid: n,
                name: l[n].n,
                icon: l[n].i,
                start: t
            }: {
                index: r,
                wid: n,
                name: l[n].n,
                icon: l[n].i,
                start: t
            }
        },
        e.prototype._getWeathers = function(e, t, r) {
            var n = new s(r).getIntervalStartEorzeaTime();
            t = t > c ? c: t;
            for (var a = [], i = e = (e = null == e ? 0 : e) < -1e5 ? -1e5: e; i > 0; i--) {
                var o = n.getIntervalStartEorzeaTime( - i);
                a.push(this._generateWeatherResult(o.getWeatherValue(), o.timestamp, -i))
            }
            for (i = 0; i <= t; i++) {
                o = n.getIntervalStartEorzeaTime(i);
                a.push(this._generateWeatherResult(o.getWeatherValue(), o.timestamp, i))
            }
            return a
        },
        e.prototype.findWeather = function(e, t) {
            var r = this;
            return null == t ? t = Date.now() : t instanceof s && (t = t.timestamp),
            null == (e = JSON.parse(JSON.stringify(e))).target ? e.target = [] : "string" == typeof e.target && (e.target = [e.target]),
            e.target = e.target.filter((function(e) {
                return r._validWeathers.includes(e)
            })),
            e.target.length == this._validWeathers.length && (e.target = []),
            null == e.previous ? e.previous = [] : "string" == typeof e.previous && (e.previous = [e.previous]),
            e.previous = e.previous.filter((function(e) {
                return r._validWeathers.includes(e)
            })),
            e.previous.length == this._validWeathers.length && (e.previous = []),
            (null == e.interval || 0 == e.interval[0] && 0 == e.interval[1] && 0 == e.interval[2]) && (e.interval = [!0, !0, !0]),
            this._findWeather(e, t)
        },
        e.prototype._findWeather = function(e, t) {
            if (null == e.target && e.target, null == e.previous && (e.previous = []), 0 == e.target.length && 0 == e.previous.length) return {
                target: null,
                previous: null,
                nextStarttime: -1
            };
            for (var r = new s(t).getIntervalStartEorzeaTime(), n = e.previous.length > 0, a = e.target.length > 0, i = this._generateWeatherResult(r.getWeatherValue(), r.timestamp), o = e.previous.includes(i.name), u = 1; u <= c; u++) {
                var l = r.getIntervalStartEorzeaTime(u),
                p = this._generateWeatherResult(l.getWeatherValue(), l.timestamp);
                if (e.interval[l.getDayIntervalIndex()]) {
                    var h = !1;
                    if (n && a) h = o && e.target.includes(p.name);
                    else if (n) h = o;
                    else {
                        if (!a) break;
                        h = e.target.includes(p.name)
                    }
                    if (h) return {
                        target: p,
                        previous: i,
                        nextStarttime: l.timestamp
                    };
                    i = p,
                    n && (o = e.previous.includes(i.name))
                }
            }
            return {
                target: null,
                previous: null,
                nextStarttime: -2
            }
        },
        e.prototype._getRainbowWeather = function() {
            for (var e = [], t = !1, r = 0, n = this._validWeathers; r < n.length; r++) {
                var a = n[r];
                f.includes(a) ? t = !0 : g.includes(a) || e.push(a)
            }
            return t && e.length > 0 ? e: []
        },
        e.getValidSpecialWeathers = function() {
            return u(["彩虹"], Object.keys(m), !0)
        },
        e.prototype.getAllSpecialWeatherTypes = function() {
            var e = [];
            this._rainbowWeathers.length > 0 && e.push("彩虹");
            for (var t = 0,
            r = Object.keys(m); t < r.length; t++) {
                var n = r[t];
                m[n].includes(this.mapName) && e.push(n)
            }
            return e
        },
        e.prototype.findSpecialWeather = function(e, t) {
            if (null == t ? t = Date.now() : t instanceof s && (t = t.timestamp), this.getAllSpecialWeatherTypes().includes(e)) switch (e) {
            case "彩虹":
                return this._findRainbow(t);
            case "钻石星辰":
                return this._findDiamondStar(t);
            case "极光":
                return this._findAurora(t);
            default:
                console.error("天气类型 ".concat(e, " 不存在"))
            } else console.error("地图 ".concat(this.mapName, " 没有特殊天象：").concat(e));
            return {
                target: null,
                previous: null,
                nextStarttime: -1
            }
        },
        e.prototype.isSpecialWeather = function(e, t) {
            var r;
            if (null == t ? t = Date.now() : t instanceof s && (t = t.timestamp), "number" == typeof t) {
                var n = this.getWeathers( - 1, t);
                r = {
                    target: n[1],
                    previous: n[0],
                    nextStarttime: n[1].start
                }
            } else r = t;
            switch (e) {
            case "彩虹":
                return this.isRainbow(r);
            case "钻石星辰":
                return this.isDiamondStar(r);
            case "极光":
                return this.isAurora(r);
            default:
                return console.error("天气类型 ".concat(e, " 不存在")),
                !1
            }
        },
        e.prototype.isRainbow = function(e) {
            if (null == e.target || null == e.previous || e.nextStarttime < 0) return ! 1;
            if (0 == this._rainbowWeathers.length) return ! 1;
            if (!f.includes(e.previous.name)) return ! 1;
            if (!this._rainbowWeathers.includes(e.target.name)) return ! 1;
            var t = new s(e.target.start),
            r = t.getDay(),
            n = t.getDayIntervalIndex();
            return (r > 27 || r < 6) && n > 0 || (27 == r && 2 == n || 6 == r && 1 == n)
        },
        e.prototype._findRainbow = function(e) {
            for (;;) {
                var t = this._findWeather({
                    target: this._rainbowWeathers,
                    previous: f,
                    interval: [!1, !0, !0]
                },
                e);
                if (null == t.target) return console.error("预料外的错误：找不到彩虹天气，地图：".concat(this.mapName)),
                {
                    target: null,
                    previous: null,
                    nextStarttime: -3
                };
                if (this.isRainbow(t)) return t;
                e = t.nextStarttime
            }
        },
        e.prototype.isDiamondStar = function(e) {
            if (null == e.target || null == e.previous || e.nextStarttime < 0) return ! 1;
            if (!m["钻石星辰"].includes(this.mapName)) return ! 1;
            var t = new s(e.target.start);
            return "晴朗" == e.target.name && 0 == t.getDayIntervalIndex() || "晴朗" == e.target.name && 1 == t.getDayIntervalIndex() && "晴朗" != e.previous.name
        },
        e.prototype._findDiamondStar = function(e) {
            for (;;) {
                var t = this._findWeather({
                    target: "晴朗",
                    interval: [!0, !0, !1]
                },
                e);
                if (null == t.target) return console.error("预料外的错误：找不到钻石星辰天气，地图：".concat(this.mapName)),
                {
                    target: null,
                    previous: null,
                    nextStarttime: -4
                };
                if (this.isDiamondStar(t)) return t;
                e = t.nextStarttime
            }
        },
        e.prototype.isAurora = function(e) {
            if (null == e.target || null == e.previous || e.nextStarttime < 0) return ! 1;
            if (!m["极光"].includes(this.mapName)) return ! 1;
            var t = new s(e.target.start);
            return "碧空" == e.target.name && 0 == t.getDayIntervalIndex()
        },
        e.prototype._findAurora = function(e) {
            for (;;) {
                var t = this._findWeather({
                    target: "碧空",
                    interval: [!0, !1, !1]
                },
                e);
                if (null == t.target) return console.error("预料外的错误：找不到极光天气，地图：".concat(this.mapName)),
                {
                    target: null,
                    previous: null,
                    nextStarttime: -5
                };
                if (this.isAurora(t)) return t;
                e = t.nextStarttime
            }
        },
        e
    } ();
    "undefined" != typeof window && (window.EorzeaTime = s, window.EorzeaWeather = v)
}));