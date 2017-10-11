$('.dropdown-item').click(function(e) {
    $('.dropdown-item').removeClass('active');                      
});

// Chart Default Styles
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#111';

// Chart Colors
var chartColors = {
    red: 'rgb(167, 39, 55)',
    blue: 'rgb(14, 94, 193)',
    green: 'rgb(160, 165, 143)',
    white: 'rgb(255, 255, 255)',
};

// Tooltip Styles
var tooltipOptions = {
    enabled: true,
    titleFontColor: '#111',
    bodyFontColor: '#111',
    backgroundColor: '#fff',
    cornerRadius: 0,
    borderColor: '#ddd',
    borderWidth: 1,
}
 
// All Years
var labelYears = 
    ['January 2015', 'February 2015', 'March 2015', 'Apriil 2015', 'May 2015', 'June 2015', 'July 2015', 'August 2015', 'September 2015', 'October 2015', 'November 2015', 'December 2015', 'January 2016', 'February 2016', 'March 2016', 'Apriil 2016', 'May 2016', 'June 2016', 'July 2016', 'August 2016', 'August 2016', 'September', 'October 2016', 'November 2016', 'December 2016', 'January 2017', 'February 2017', 'March 2017', 'April 2017']


// Housing Trends Bar Chart
var housingTrends = document.getElementById('housingTrends').getContext('2d');
var housingTrendsChart = new Chart(housingTrends, {
    type: 'bar',
    data: {
        labels: labelYears,
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
        },
        tooltips: tooltipOptions
    }
});

//  Program Entries Stacked Bar Chart
var numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
var data_1 = [394, 311, 268, 394, 311, 268, 394, 311, 268, 394, 311, 268, 394, 311, 268, 394, 311, 268, 394, 311, 268, 394, 311, 268];
var data_2 = [291, 251, 293, 291, 251, 293, 291, 251, 293, 291, 251, 293, 291, 251, 293, 291, 251, 293, 291, 251, 293, 291, 251, 293];
var data_3 = [217, 206, 259, 217, 206, 259, 217, 206, 259 ,217, 206, 259, 217, 206, 259, 217, 206, 259, 217, 206, 259 ,217, 206, 259];
var dates = labelYears;

var bar_ctx = document.getElementById('programEntries');
var bar_chart = new Chart(bar_ctx, {
    type: 'bar',
    data: { 
        labels: dates,
        datasets: [
        {
            label: 'Rapid Re-Housing',
            data: data_1,
            backgroundColor: chartColors.red,
            hoverBackgroundColor: chartColors.red,
            hoverBorderWidth: 1,
            hoverBorderColor: 'lightgrey'
        },
        {
            label: 'Transitional Housing',
            data: data_2,
            backgroundColor: chartColors.blue,
            hoverBackgroundColor: chartColors.blue,
            hoverBorderWidth: 1,
            hoverBorderColor: 'lightgrey'
        },
        {
            label: 'Emergency Shelter',
            data: data_3,
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
        tooltips: tooltipOptions,
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
var config = {
  type: 'line',
  data: {
    labels: labelYears,
    datasets: [{
      label: "Rapid Re-Housing",
      backgroundColor: chartColors.green,
      borderColor: chartColors.green,
      data: [ 92, 88, 88, 90, 87, 79, 88, 84, 83, 90, 90, 87, 87, 80, 89, 83, 63, 78, 70, 92, 88, 88, 90, 87, 79, 88, 84, 83, 90, 90, 87, 87, 80, 89, 83, 63, 78, 70 ],
      fill: false,
    }, {
      label: "Transitional Housing",
      fill: false,
      backgroundColor: chartColors.blue,
      borderColor: chartColors.blue,
      data: [ 53, 61, 64, 76, 54, 46, 65, 54, 43, 48, 50, 57, 57, 50, 59, 43, 63, 58, 50, 53, 61, 64, 76, 54, 46, 65, 54, 43, 48, 50, 57, 57, 50, 59, 43, 63, 58, 50 ],
    }, {
      label: "Emergency Shelter",
      fill: false,
      backgroundColor: chartColors.red,
      borderColor: chartColors.red,
      data: [ 22, 28, 28, 20, 27, 29, 28, 24, 23, 20, 20, 27, 27, 20, 23, 23, 23, 28, 20, 22, 28, 28, 20, 27, 29, 28, 24, 23, 20, 20, 27, 27, 20, 23, 23, 23, 28, 20 ],
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: '% Exits to Permanent Housing'
    },
    tooltips: tooltipOptions,
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
    tooltips: tooltipOptions,
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
var demo_rapid_3 = document.getElementById('demo_rapid_3').getContext('2d');
var demo_rapid_3_chart = new Chart(demo_rapid_3, {
    type: 'horizontalBar',
    data: {
        labels: ['Non-Chronic', 'Chronic'],
        datasets: [{
            label: 'Total', 
            data: [90, 10, 0],
            backgroundColor: chartColors.green,
        }]
    },
    options: demo_options
});
var demo_rapid_4 = document.getElementById('demo_rapid_4').getContext('2d');
var demo_rapid_4_chart = new Chart(demo_rapid_4, {
    type: 'horizontalBar',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            label: 'Total', 
            data: [88, 12, 0],
            backgroundColor: chartColors.green,
        }]
    },
    options: demo_options
});
var demo_rapid_5 = document.getElementById('demo_rapid_5').getContext('2d');
var demo_rapid_5_chart = new Chart(demo_rapid_5, {
    type: 'horizontalBar',
    data: {
        labels: ['All Other Eras', 'Veterans ofIraq/Afghanistan'],
        datasets: [{
            label: 'Total', 
            data: [76, 24, 0],
            backgroundColor: chartColors.green,
        }]
    },
    options: demo_options
});
var demo_rapid_6 = document.getElementById('demo_rapid_6').getContext('2d');
var demo_rapid_6_chart = new Chart(demo_rapid_6, {
    type: 'horizontalBar',
    data: {
        labels: ['(1)Minimal Assistance Needed', '(2)Rapdi Re-Housing', '(3)Permanent Supportive', '(4)Permanent Supportive'],
        datasets: [{
            label: 'Total', 
            data: [17, 31, 40, 12],
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
