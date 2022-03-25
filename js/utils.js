var Utils = {
    CHART_COLORS: ['#0ea5e9', '#10b981', '#67e8f9', '#f59e0b', '#f43f5e', '#64748b'],
    numbers: function(s) {
        var n = [];
        var s = {count: 0, min: 0, max: 1, ...s};

        for (let index = 0; index < s.count; index++) {
            var min = Math.ceil(s.min);
            var max = Math.floor(s.max);
            n.push(Math.floor(Math.random() * (max - min + 1) + min));
        }

        return n;
    }
}
