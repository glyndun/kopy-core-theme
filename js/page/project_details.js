if (window.Chart && $('#tasks_progress_chart').length) {
    var ctx = document.getElementById("tasks_progress_chart").getContext('2d');
    var taskProgressChart = new Chart(ctx, {
    type: 'bar',
    data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
            datasets: [
                {
                    label: 'Completed',
                    data: [3200, 1800, 4305, 3022, 6310, 5120, 5880, 6154],
                    hoverBackgroundColor: '#0ea5e9',
                    backgroundColor: '#38bdf8',
                    borderRadius: 4,
                    barThickness: 8,
                    borderColor: "rgba(243,244,246,0.5)",
                    borderWidth: 1,
                },
                {
                    label: 'Incomplete',
                    data: [2600, 1300, 3405, 2122, 3310, 6120, 2390, 5643],
                    hoverBackgroundColor: '#10b981',
                    backgroundColor: '#34d399',
                    borderRadius: 4,
                    barThickness: 8,
                    borderColor: "rgba(243,244,246,0.5)",
                    borderWidth: 1,
                }
            ]
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
            maintainAspectRatio: false,
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
                    }
                }
            },
            layout: {
                padding: {
                    bottom: -20
                }
            }
        }
    });
}
