var now = moment(), labels = [], MAX_COUNT = 24;
for (let index = 0; index < MAX_COUNT; index++) {
    labels.push(now.subtract(1, 'minutes').fromNow());
}

var viewPerMinuteData = Utils.numbers({count: MAX_COUNT, min: 0, max: 100});
var maxData = viewPerMinuteData.reduce(function(a, b) {
    return Math.max(a, b);
}, -Infinity);

var view_per_minute_chart = document.getElementById("page_view_per_minute_chart").getContext('2d');
var revenueAnalyticsChart = new Chart(view_per_minute_chart, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Page view',
            data: viewPerMinuteData,
            borderColor: '#1e293b',
            backgroundColor: '#1e293b'
        }],
        labels: labels
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
                suggestedMin: 0,
                suggestedMax: maxData
            }
        }
    }
});

// Visitors map
var gdpData = {"af":16.63,"al":11.58,"dz":158.97};
var max = 0,
    min = Number.MAX_VALUE,
    cc,
    startColor = [186, 230, 253],
    endColor = [14, 165, 233],
    colors = {},
    hex;

//find maximum and minimum values
for (cc in gdpData)
{
    if (parseFloat(gdpData[cc]) > max)
    {
        max = parseFloat(gdpData[cc]);
    }
    if (parseFloat(gdpData[cc]) < min)
    {
        min = parseFloat(gdpData[cc]);
    }
}

//set colors according to values of GDP
for (cc in gdpData)
{
    if (gdpData[cc] > 0)
    {
        colors[cc] = '#';
        for (var i = 0; i<3; i++)
        {
            hex = Math.round(startColor[i]
                + (endColor[i]
                - startColor[i])
                * (gdpData[cc] / (max - min))).toString(16);

            if (hex.length == 1)
            {
                hex = '0'+hex;
            }

            colors[cc] += (hex.length == 1 ? '0' : '') + hex;
        }
    }
}

$('#visitors-map').vectorMap({
    colors: colors,
    map: 'world_en',
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#e2e8f0',
    enableZoom: true,
    hoverColor: '#c9dfaf',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#cbd5e1', '#1e293b'],
    selectedColor: '#c9dfaf',
    selectedRegions: null,
    showTooltip: true,
    onRegionClick: function(element, code, region)
    {
        var message = 'You clicked "'
            + region
            + '" which has the code: '
            + code.toUpperCase();

        console.log(message);
    }
});

$( "#visitors-map" ).on('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        $( "#visitors-map" ).vectorMap('zoomIn');
    }
    else {
        $( "#visitors-map" ).vectorMap('zoomOut');
    }
    return false;
});
