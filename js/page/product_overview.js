class Custom extends Chart.LineController {
    draw() {
        super.draw(arguments);
        const ctx = this.chart.ctx;
        const _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = '#a7f3d0';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 4;
            _stroke.apply(this, arguments);
            ctx.restore();
        }
    }
}

Custom.id = 'shadowLine';
Custom.defaults = Chart.LineController.defaults;

Chart.register(Custom);

const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 60, 120, 134, 180, 120, 125, 105, 110, 170];
const data = {
    labels: labels,
    datasets: [{
        label: 'Sales',
        data: datapoints,
        borderColor: '#34d399',
        backgroundColor: '#34d399',
        fill: false,
        tension: 0.4,
        pointRadius: 0,
        }
    ]
};

const config = {
    type: 'shadowLine',
    data: data,
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
            // tooltip: {
            //     enabled: false,
            //     mode: "index",
            //     external: function(context) {
            //         var tooltipEl = document.getElementById('chartjs-tooltip');

            //         if (!tooltipEl) {
            //             tooltipEl = document.createElement('div');
            //             tooltipEl.id = 'chartjs-tooltip';
            //             tooltipEl.innerHTML = '<table></table>';
            //             document.body.appendChild(tooltipEl);
            //         }
            //         var tooltipModel = context.tooltip;
            //         if (tooltipModel.opacity === 0) {
            //             tooltipEl.style.opacity = 0;
            //             return;
            //         }

            //         tooltipEl.classList.remove('above', 'below', 'no-transform');
            //         if (tooltipModel.yAlign) {
            //             tooltipEl.classList.add(tooltipModel.yAlign);
            //         } else {
            //             tooltipEl.classList.add('no-transform');
            //         }

            //         function getBody(bodyItem) {
            //             return bodyItem.lines;
            //         }

            //         if (tooltipModel.body) {
            //             var titleLines = tooltipModel.title || [];
            //             var bodyLines = tooltipModel.body.map(getBody);

            //             var innerHtml = '<thead>';

            //             titleLines.forEach(function(title) {
            //                 innerHtml += '<tr><th>' + title + '</th></tr>';
            //             });
            //             innerHtml += '</thead><tbody>';

            //             bodyLines.forEach(function(body, i) {
            //                 var colors = tooltipModel.labelColors[i];
            //                 var style = 'background:' + colors.backgroundColor;
            //                 style += '; border-color:' + colors.borderColor;
            //                 style += '; border-width: 2px';
            //                 var span = '<span style="' + style + '"></span>';
            //                 innerHtml += '<tr><td>' + span + body + '</td></tr>';
            //             });
            //             innerHtml += '</tbody>';

            //             var tableRoot = tooltipEl.querySelector('table');
            //             tableRoot.innerHTML = innerHtml;
            //         }

            //         var position = context.chart.canvas.getBoundingClientRect();
            //         var bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

            //         tooltipEl.style.opacity = 1;
            //         tooltipEl.style.position = 'absolute';
            //         tooltipEl.style.left = tooltipModel.caretX + 'px';
            //         tooltipEl.style.top = tooltipModel.caretY + 'px';
            //         tooltipEl.style.font = bodyFont.string;
            //         tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
            //         tooltipEl.style.pointerEvents = 'none';
            //     }
            // }
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
};

var ctx = document.getElementById("income_chart").getContext('2d');
const incomeChart = new Chart(ctx, config);

var ctx = document.getElementById("clicks_history_chart").getContext('2d');
var clicksChart = new Chart(ctx, {
  type: 'line',
  data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [{
        label: 'Clicks',
        data: [3200, 1800, 4305, 3022, 6310, 5120, 5880, 6154],
        borderColor: '#0ea5e9',
        backgroundColor: '#0ea5e9',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false
            }
        },
        interaction: {
        intersect: false,
        },
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,
                title: {
                    display: false
                },
                stacked: true
            },
            y: {
                display: false,
                title: {
                display: false,
                    text: 'Value'
                },
                stacked: true
            }
        },
        layout: {
            padding: {
                bottom: -20
            }
        }
    }
});

$('[data-bs-toggle="tab"]').on('shown.bs.tab', function(e) {

});
