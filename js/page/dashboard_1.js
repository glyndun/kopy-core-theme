class CustomShadowBlueLine extends Chart.LineController {
    draw() {
        super.draw(arguments);
        const ctx = this.chart.ctx;
        const _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = '#e0f2fe';
            ctx.shadowBlur = 6;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 4;
            _stroke.apply(this, arguments);
            ctx.restore();
        }
    }
}

CustomShadowBlueLine.id = 'shadowBlueLine';
CustomShadowBlueLine.defaults = Chart.LineController.defaults;

Chart.register(CustomShadowBlueLine);

var balance_chart = document.getElementById("new-clicks-chart").getContext('2d');
var myChart = new Chart(balance_chart, {
    type: 'shadowBlueLine',
    data: {
        labels: ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'],
        datasets: [{
        label: 'Clicks',
        data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 112, 63, 50, 62],
        borderColor: '#38bdf8',
        backgroundColor: '#38bdf8',
        fill: false,
        tension: 0.4,
        pointRadius: 0,
        }]
    },
    options: {
        maintainAspectRatio: false,
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
                suggestedMax: 200
            }
        }
    }
});

class CustomShadowInfoLine extends Chart.LineController {
    draw() {
        super.draw(arguments);
        const ctx = this.chart.ctx;
        const _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = '#cffafe';
            ctx.shadowBlur = 6;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 4;
            _stroke.apply(this, arguments);
            ctx.restore();
        }
    }
}

CustomShadowInfoLine.id = 'shadowInfoLine';
CustomShadowInfoLine.defaults = Chart.LineController.defaults;
Chart.register(CustomShadowInfoLine);

var customer_chart = document.getElementById("new-customers-chart").getContext('2d');
var myChart = new Chart(customer_chart, {
    type: 'shadowInfoLine',
    data: {
        labels: ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'],
        datasets: [{
            label: 'Customers',
            data: [70, 62, 44, 40, 21, 63, 82, 52, 50, 31, 70, 50, 91, 63, 51, 60],
            borderColor: '#22d3ee',
            backgroundColor: '#22d3ee',
            fill: false,
            tension: 0.4,
            pointRadius: 0,
        }]
    },
    options: {
        maintainAspectRatio: false,
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
                suggestedMax: 200
            }
        }
    }
});

class CustomShadowDangerLine extends Chart.LineController {
    draw() {
        super.draw(arguments);
        const ctx = this.chart.ctx;
        const _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = '#ffe4e6';
            ctx.shadowBlur = 6;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 4;
            _stroke.apply(this, arguments);
            ctx.restore();
        }
    }
}

CustomShadowDangerLine.id = 'shadowDangerLine';
CustomShadowDangerLine.defaults = Chart.LineController.defaults;
Chart.register(CustomShadowDangerLine);

var conversion_chart = document.getElementById("conversion-chart").getContext('2d');
var myChart = new Chart(conversion_chart, {
    type: 'shadowDangerLine',
    data: {
    labels: ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'],
    datasets: [{
        label: 'Conversion',
        data: [70, 62, 44, 40, 21, 63, 82, 52, 50, 31, 70, 50, 91, 63, 51, 60],
        borderColor: '#fb7185',
        backgroundColor: '#fb7185',
        fill: false,
        tension: 0.4,
        pointRadius: 0,
    }]
    },
    options: {
        maintainAspectRatio: false,
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
                suggestedMax: 200
            }
        }
    }
});
