var customer_chart = document.getElementById("sales_branch_analytics_chart").getContext('2d');
const DATA_COUNT = 3;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const data = {
  labels: ['Branch 1', 'Branch 2', 'Branch 3'],
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: ['#0ea5e9', '#10b981', '#67e8f9'],
    }
  ]
};

var myChart = new Chart(customer_chart, {
    type: 'doughnut',
    data: data,
    options: {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false
            },
        },
        interaction: {
        intersect: false,
        },
        scales: {
            x: {
                display: false,
                title: {
                    display: false
                }
            },
            y: {
                display: false,
                title: {
                display: false,
                    text: 'Value'
                },
                suggestedMin: -4,
                suggestedMax: 50
            }
        }
    }
});

var ctx_revenue_analytics_chart = document.getElementById("revenue_analytics_chart").getContext('2d');
var revenueAnalyticsChart = new Chart(ctx_revenue_analytics_chart, {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Today',
            data: [10, 20, 30, 40]
        }, {
            type: 'line',
            label: 'Yesterday',
            data: [50, 50, 50, 50],
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false
            },
        },
        interaction: {
            intersect: true,
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                display: true,
                title: {
                    display: false
                }
            },
            y: {
                grid: {
                    color: '#eaecef',
                    borderColor: '#eaecef'
                },
                beginAtZero: true,
                title: {
                    display: false,
                },
                suggestedMax: 110
            }
        }
    }
});

function dayDataset() {
    var now = moment(), labels = [], MAX_COUNT = 8;
    for (let index = 0; index < MAX_COUNT; index++) {
        labels.push(now.subtract(3, 'hours').format('LT'));
    }

    var today = Utils.numbers({count: MAX_COUNT, min: 0, max: 100});
    var yesterday = Utils.numbers({count: MAX_COUNT, min: 0, max: 100});
    var maxData = (today.concat(yesterday)).reduce(function(a, b) {
        return Math.max(a, b);
    }, -Infinity) + 10;

    return {
        labels: labels.reverse(),
        datasets: [{
            type: 'bar',
            label: 'Today',
            data: today,
            backgroundColor: '#0ea5e9',
            order: 2,
            borderRadius: 8,
            barThickness: 24,
        }, {
            type: 'line',
            label: 'Yesterday',
            data: yesterday,
            backgroundColor: '#22d3ee',
            borderColor: '#22d3ee',
            fill: false,
            tension: 0.4,
            pointRadius: 0,
            order: 1
        }],
        maxData
    };
}

function weekDataset() {
    var now = moment(), labels = [], MAX_COUNT = 7;
    for (let index = 0; index < MAX_COUNT; index++) {
        labels.push(now.subtract(1, 'days').format('ddd'));
    }

    var thisWeek = Utils.numbers({count: MAX_COUNT, min: 0, max: 100});
    var lastWeek = Utils.numbers({count: MAX_COUNT, min: 0, max: 100});
    var maxData = (thisWeek.concat(lastWeek)).reduce(function(a, b) {
        return Math.max(a, b);
    }, -Infinity) + 10;

    return {
        labels: labels.reverse(),
        datasets: [{
            type: 'bar',
            label: 'This week',
            data: thisWeek,
            backgroundColor: '#0ea5e9',
            order: 2,
            borderRadius: 8,
            barThickness: 24,
        }, {
            type: 'line',
            label: 'Last week',
            data: lastWeek,
            backgroundColor: '#22d3ee',
            borderColor: '#22d3ee',
            fill: false,
            tension: 0.4,
            pointRadius: 0,
            order: 1
        }],
        maxData
    };
}

function monthDataset() {
    var now = moment(), MAX_COUNT = 8, labels = [];
    var interval = parseInt(now.daysInMonth() / MAX_COUNT);
    for (let index = 0; index < MAX_COUNT; index++) {
        labels.push(now.subtract(interval, 'days').format('MMM D'));
    }

    var thisMonth = Utils.numbers({count: MAX_COUNT, min: 0, max: 100});
    var lastMonth = Utils.numbers({count: MAX_COUNT, min: 0, max: 100});
    var maxData = (thisMonth.concat(lastMonth)).reduce(function(a, b) {
        return Math.max(a, b);
    }, -Infinity) + 10;

    return {
        labels: labels.reverse(),
        datasets: [{
            type: 'bar',
            label: 'This month',
            data: thisMonth,
            backgroundColor: '#0ea5e9',
            order: 2,
            borderRadius: 8,
            barThickness: 24,
        }, {
            type: 'line',
            label: 'Last month',
            data: lastMonth,
            backgroundColor: '#22d3ee',
            borderColor: '#22d3ee',
            fill: false,
            tension: 0.4,
            pointRadius: 0,
            order: 1
        }],
        maxData
    };
}

$('#revenue-analytics [data-bs-toggle="tab"]').on('shown.bs.tab', function(e) {
    if (e.target.dataset.bsTarget === 'day') {
        var data = dayDataset();
        revenueAnalyticsChart.data = data;
        revenueAnalyticsChart.options.scales.y.suggestedMax = data.maxData;
    }
    if (e.target.dataset.bsTarget === 'week') {
        var data = weekDataset();
        revenueAnalyticsChart.data = data;
        revenueAnalyticsChart.options.scales.y.suggestedMax = data.maxData;
    }
    if (e.target.dataset.bsTarget === 'month') {
        var data = monthDataset();
        revenueAnalyticsChart.data = data;
        revenueAnalyticsChart.options.scales.y.suggestedMax = data.maxData;
    }
    revenueAnalyticsChart.update();
});

var firstTabEl = document.querySelector('#revenue-analytics li:first-child a')
var firstTab = new bootstrap.Tab(firstTabEl)

firstTab.show();
