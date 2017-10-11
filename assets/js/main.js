$('.dropdown-item').click(function(e) {
    $('.dropdown-item').removeClass('active');                      
});

// Chart Default Styles
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#111';

var chartColors = {
    red: 'rgb(167, 39, 55)',
    blue: 'rgb(14, 94, 193)',
    green: 'rgb(160, 165, 143)',
};

// Housing Trends Bar Chart
var housingTrends = document.getElementById('housingTrends').getContext('2d');
var housingTrendsChart = new Chart(housingTrends, {
    type: 'bar',
    data: {
        labels: ['January 2015', 'February 2015', 'March 2015', 'Apriil 2015', 'May 2015', 'June 2015', 'July 2015', 'August 2015', 'September 2015', 'October 2015', 'November 2015', 'December 2015', 'January 2016', 'February 2016', 'March 2016', 'Apriil 2016', 'May 2016', 'June 2016', 'July 2016', 'August 2016', 'August 2016', 'September', 'October 2016', 'November 2016', 'December 2016', 'January 2017', 'February 2017', 'March 2017', 'April 2017'],
        datasets: [{
            label: 'Total',
            data: [281, 267, 270, 260, 285, 357, 287, 331, 394, 372, 327, 338, 285, 324, 357, 340, 304, 318, 321, 306, 295, 250, 221, 263, 219, 201, 200, 131, 200 ],
            backgroundColor: chartColors.red,
        }]
    },
    options: {
        title: {
            display: false,
        },
        legend: {
            display: false,
            position: 'center'
        },
        tooltips: {
            enabled: true
        }
    }
});

//  Program Entries Stacked Bar Chart
var numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
var dataPack1 = [394, 311, 268, 394, 311, 268, 394, 311, 268, 394, 311, 268, 394, 311, 268, 394, 311, 268, 394, 311, 268, 394, 311, 268];
var dataPack2 = [291, 251, 293, 291, 251, 293, 291, 251, 293, 291, 251, 293, 291, 251, 293, 291, 251, 293, 291, 251, 293, 291, 251, 293];
var dataPack3 = [217, 206, 259, 217, 206, 259, 217, 206, 259 ,217, 206, 259, 217, 206, 259, 217, 206, 259, 217, 206, 259 ,217, 206, 259];
var dates = ['January 2015', 'February 2015', 'March 2015', 'Apriil 2015', 'May 2015', 'June 2015', 'July 2015', 'August 2015', 'September 2015', 'October 2015', 'November 2015', 'December 2015', 'January 2016', 'February 2016', 'March 2016', 'Apriil 2016', 'May 2016', 'June 2016', 'July 2016', 'August 2016', 'August 2016', 'September', 'October 2016', 'November 2016', 'December 2016'];

var bar_ctx = document.getElementById('programEntries');
var bar_chart = new Chart(bar_ctx, {
    type: 'bar',
    data: {
        labels: dates,
        datasets: [
        {
            label: 'Rapid Re-Housing',
            data: dataPack1,
            backgroundColor: chartColors.red,
            hoverBackgroundColor: chartColors.red,
            hoverBorderWidth: 1,
            hoverBorderColor: 'lightgrey'
        },
        {
            label: 'Transitional Housing',
            data: dataPack2,
            backgroundColor: chartColors.blue,
            hoverBackgroundColor: chartColors.blue,
            hoverBorderWidth: 1,
            hoverBorderColor: 'lightgrey'
        },
        {
            label: 'Emergency Shelter',
            data: dataPack3,
            backgroundColor: chartColors.green,
            hoverBackgroundColor: chartColors.green,
            hoverBorderWidth: 1,
            hoverBorderColor: 'lightgrey'
        },
        ]
    },
    options: {
     		animation: {
        	duration: 10,
        },
        tooltips: {
            mode: 'label',
            callbacks: {
            label: function(tooltipItem, data) { 
                return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
            }
          }
         },
        scales: {
          xAxes: [{ 
          	stacked: true, 
            gridLines: { display: false },
            }],
          yAxes: [{ 
          	stacked: true, 
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Number of Veterans Entering the System'
            },
            ticks: {
        			callback: function(value) { return numberWithCommas(value); },
     				}, 
            }],
        },
        legend: {display: true}
    }
});

// System Dimensions
var randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
}
var config = {
  type: 'line',
  data: {
    labels: ["March 2015", "July 2015", "Novemeber 2015", "March 2016", "July 2016", "November 2016", "March 2017"],
    datasets: [{
      label: "Rapid Re-Housing",
      backgroundColor: chartColors.red,
      borderColor: chartColors.red,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
      fill: false,
    }, {
      label: "Transitional Housing",
      fill: false,
      backgroundColor: chartColors.blue,
      borderColor: chartColors.blue,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
    }, {
      label: "Emergency Shelter",
      fill: false,
      backgroundColor: chartColors.green,
      borderColor: chartColors.green,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: '% Exits to Permanent Housing'
    },
    tooltips: {
        enabled: true,
        mode: 'label',
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: ''
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: '% of Exiters to Permanent Housing'
        }
      }]
    }
  }
};

var ctx = document.getElementById("systemDimensions").getContext("2d");
window.myLine = new Chart(ctx, config);

// Demographics Charts
var demo_options = {
    title: {
        display: false,
    },
    legend: {
        display: false,
        position: 'center'
    },
    tooltips: {
        enabled: true
    },
    scales: {
      xAxes: [{
        display: true,
      }],
    }
}

// Demographics : Rapid Re-Housing
var demo_rapid_1 = document.getElementById('demo_rapid_1').getContext('2d');
var demo_rapid_1_chart = new Chart(demo_rapid_1, {
    type: 'horizontalBar',
    data: {
        labels: ['Unsheltered', 'Temporary', 'Permanent', 'Institutional', 'Other'],
        datasets: [{
            label: 'Total', 
            data: [53, 42, 1, 4, 0],
            backgroundColor: chartColors.green,
        }]
    },
    options: demo_options
});
var demo_rapid_2 = document.getElementById('demo_rapid_2').getContext('2d');
var demo_rapid_2_chart = new Chart(demo_rapid_2, {
    type: 'horizontalBar',
    data: {
        labels: ['Unsheltered', 'Temporary', 'Permanent', 'Institutional', 'Other'],
        datasets: [{
            label: 'Total', 
            data: [13, 16, 67, 4, 0],
            backgroundColor: chartColors.green,
        }]
    },
    options: demo_options
});

// Demographics:  Emergency Housing
var demo_em_1 = document.getElementById('demo_em_1').getContext('2d');
var demo_em_1_chart = new Chart(demo_em_1, {
    type: 'horizontalBar',
    data: {
        labels: ['Unsheltered', 'Temporary', 'Permanent', 'Institutional', 'Other'],
        datasets: [{
            label: 'Total', 
            data: [51, 34, 6, 9, 0],
            backgroundColor: chartColors.green,
        }]
    },
    options: demo_options
});
var demo_em_2 = document.getElementById('demo_em_2').getContext('2d');
var demo_em_2_chart = new Chart(demo_em_2, {
    type: 'horizontalBar',
    data: {
        labels: ['Unsheltered', 'Temporary', 'Permanent', 'Institutional', 'Other'],
        datasets: [{
            label: 'Total', 
            data: [10, 33, 17, 18, 22],
            backgroundColor: chartColors.green,
        }]
    },
    options: demo_options
});