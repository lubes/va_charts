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
    lt_green: 'rgb(192, 195, 183)',
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
    ['January 2015', 'February 2015', 'March 2015', 'April 2015', 'May 2015', 'June 2015', 'July 2015', 'August 2015', 'September 2015', 'October 2015', 'November 2015', 'December 2015', 'January 2016', 'February 2016', 'March 2016', 'April 2016', 'May 2016', 'June 2016', 'July 2016', 'August 2016', 'September 2016', 'October 2016', 'November 2016', 'December 2016', 'January 2017', 'February 2017', 'March 2017', 'April 2017']


// Housing Trends Bar Chart
var housingTrends = document.getElementById('housingTrends').getContext('2d');
var housingTrendsChart = new Chart(housingTrends, {
    type: 'bar',
    data: {
        labels: labelYears,
        datasets: [{
            label: 'Total',
            data: [281, 267, 270, 260, 285, 357, 287, 331, 394, 372, 327, 338, 285, 324, 357, 340, 304, 318, 321, 306, 295, 250, 221, 263, 219, 201, 200, 131 ],
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
var data_1 = [394, 311, 268, 216, 199, 185, 180, 179, 128, 217, 373, 352, 333, 301, 330, 197, 200, 184, 201, 200, 137, 135, 113, 325, 294, 266, 257];
var data_2 = [291, 251, 293, 270, 357, 342, 306, 288, 298, 312, 189, 251, 229, 263, 275, 259, 296, 268, 249, 269, 232, 218, 195, 198, 208, 181, 172];
var data_3 = [217, 206, 259, 204, 235, 230, 220, 276, 288, 268, 209, 213, 159, 250, 235, 169, 185, 174, 159, 221, 162, 152, 146, 166, 177, 161, 192];
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
      data: [ 92, 88, 88, 90, 87, 70, 79, 88, 84, 83, 90, 90, 87, 87, 80, 89, 83, 78, 63, 70, 65, 70, 70, 74, 81, 76, 65 ],
      fill: false,
    }, {
      label: "Transitional Housing",
      fill: false,
      backgroundColor: chartColors.blue,
      borderColor: chartColors.blue,
      data: [ 53, 53, 61, 53, 51, 52, 49, 60, 59, 60, 63, 65, 60, 56, 56, 58, 50, 50, 45, 53, 46, 54, 47, 69, 54, 55, 60 ],
    }, {
      label: "Emergency Shelter",
      fill: false,
      backgroundColor: chartColors.red,
      borderColor: chartColors.red,
      data: [ 7, 4, 6, 9, 15, 11, 18, 21, 29, 20, 11, 11, 7, 9, 8, 19, 14, 15, 16, 10, 10, 26, 24, 24, 32, 25, 18 ],
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

//  Time to Housing Chart
var time_to_housing = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
var data_1 = [0, 108.5];
var data_2 = [0, 8];
var data_3 = [0, 7];
var data_4 = [26, 0];

var bar_ctx = document.getElementById('timeHousing');
var bar_chart = new Chart(bar_ctx, {
    type: 'horizontalBar',
    data: { 
        labels: ['SSCF - Rapid Re-Housing', 'VASH'],
        datasets: [
        {
            label: 'Voucher to Move-In',
            data: data_1,
            backgroundColor: chartColors.lt_green,
            hoverBackgroundColor: chartColors.lt_green,
            hoverBorderWidth: 1,
            hoverBorderColor: 'lightgrey'
        },
        {
            label: 'Housing Authority',
            data: data_2,
            backgroundColor: chartColors.green,
            hoverBackgroundColor: chartColors.green,
            hoverBorderWidth: 1,
            hoverBorderColor: 'lightgrey'
        },
        {
            label: 'Admission to Housing Authority',
            data: data_3,
            backgroundColor: chartColors.blue,
            hoverBackgroundColor: chartColors.blue,
            hoverBorderWidth: 1,
            hoverBorderColor: 'lightgrey'
        },
        {
            label: 'Entry to Move-In - SSV',
            data: data_4,
            backgroundColor: chartColors.red,
            hoverBackgroundColor: chartColors.red,
            hoverBorderWidth: 1,
            hoverBorderColor: 'lightgrey'
        }
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
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Total Average Days to Permanent Housing'
            },
            gridLines: { display: false },
            }],
          yAxes: [{ 
          	stacked: true, 
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'SSVF - Rapid Re-Housing'
            },
            ticks: {
        			callback: function(value) { return time_to_housing(value); },
     				}, 
            }],
        },
        legend: {display: true}
    }
});

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
        labels: ['All Other Eras', 'Veterans of Iraq/Afghanistan'],
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
        labels: ['(1) Minimal Assistance Needed', '(2) Rapid Re-Housing', '(3) Permanent Supportive', '(4) Permanent Supportive'],
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
            backgroundColor: chartColors.red,
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
            data: [10, 33, 17, 18, 22, 0],
            backgroundColor: chartColors.red,
        }]
    },
    options: demo_options
});
var demo_em_3 = document.getElementById('demo_em_3').getContext('2d');
var demo_em_3 = new Chart(demo_em_3, {
    type: 'horizontalBar',
    data: {
        labels: ['Non-Chronic', 'Chronic'],
        datasets: [{
            label: 'Total', 
            data: [81, 19],
            backgroundColor: chartColors.red,
        }]
    },
    options: demo_options
});
var demo_em_4 = document.getElementById('demo_em_4').getContext('2d');
var demo_em_4_chart = new Chart(demo_em_4, {
    type: 'horizontalBar',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            label: 'Total', 
            data: [91, 9, 0],
            backgroundColor: chartColors.red,
        }]
    },
    options: demo_options
});
var demo_em_5 = document.getElementById('demo_em_5').getContext('2d');
var demo_em_5_chart = new Chart(demo_em_5, {
    type: 'horizontalBar',
    data: {
        labels: ['All Other Eras', 'Veterans of Iraq/Afghanistan'],
        datasets: [{
            label: 'Total', 
            data: [79, 21, 0],
            backgroundColor: chartColors.red,
        }]
    },
    options: demo_options
});
var demo_em_6 = document.getElementById('demo_em_6').getContext('2d');
var demo_em_6_chart = new Chart(demo_em_6, {
    type: 'horizontalBar',
    data: {
        labels: ['(1) Minimal Assistance Needed', '(2) Rapid Re-Housing', '(3) Permanent Supportive', '(4) Permanent Supportive'],
        datasets: [{
            label: 'Total', 
            data: [17, 31, 40, 12],
            backgroundColor: chartColors.red,
        }]
    },
    options: demo_options
});

// Demographics:  Transitional Housing
var demo_trans_1 = document.getElementById('demo_trans_1').getContext('2d');
var demo_trans_1_chart = new Chart(demo_trans_1, {
    type: 'horizontalBar',
    data: {
        labels: ['Unsheltered', 'Temporary', 'Permanent', 'Institutional', 'Other'],
        datasets: [{
            label: 'Total', 
            data: [34, 47, 4, 16, 0],
            backgroundColor: chartColors.blue,
        }]
    },
    options: demo_options
});
var demo_trans_2 = document.getElementById('demo_trans_2').getContext('2d');
var demo_trans_2_chart = new Chart(demo_trans_2, {
    type: 'horizontalBar',
    data: {
        labels: ['Unsheltered', 'Temporary', 'Permanent', 'Institutional', 'Other'],
        datasets: [{
            label: 'Total', 
            data: [2, 22, 58, 11, 8],
            backgroundColor: chartColors.blue,
        }]
    },
    options: demo_options
});
var demo_trans_3 = document.getElementById('demo_trans_3').getContext('2d');
var demo_trans_3 = new Chart(demo_trans_3, {
    type: 'horizontalBar',
    data: {
        labels: ['Non-Chronic', 'Chronic'],
        datasets: [{
            label: 'Total', 
            data: [64, 36, 0],
            backgroundColor: chartColors.blue,
        }]
    },
    options: demo_options
});
var demo_trans_4 = document.getElementById('demo_trans_4').getContext('2d');
var demo_trans_4_chart = new Chart(demo_trans_4, {
    type: 'horizontalBar',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            label: 'Total', 
            data: [89, 11, 0],
            backgroundColor: chartColors.blue,
        }]
    },
    options: demo_options
});
var demo_trans_5 = document.getElementById('demo_trans_5').getContext('2d');
var demo_trans_5_chart = new Chart(demo_trans_5, {
    type: 'horizontalBar',
    data: {
        labels: ['All Other Eras', 'Veterans of Iraq/Afghanistan'],
        datasets: [{
            label: 'Total', 
            data: [82, 18, 0],
            backgroundColor: chartColors.blue,
        }]
    },
    options: demo_options
});
var demo_trans_6 = document.getElementById('demo_trans_6').getContext('2d');
var demo_trans_6_chart = new Chart(demo_trans_6, {
    type: 'horizontalBar',
    data: {
        labels: ['(1) Minimal Assistance Needed', '(2) Rapid Re-Housing', '(3) Permanent Supportive', '(4) Permanent Supportive'],
        datasets: [{
            label: 'Total', 
            data: [17, 31, 40, 12],
            backgroundColor: chartColors.blue,
        }]
    },
    options: demo_options
});


// Demographics:  Permanent Supportive Housing
var demo_perm_1 = document.getElementById('demo_perm_1').getContext('2d');
var demo_perm_1_chart = new Chart(demo_perm_1, {
    type: 'horizontalBar',
    data: {
        labels: ['Unsheltered', 'Temporary', 'Permanent', 'Institutional', 'Other'],
        datasets: [{
            label: 'Total', 
            data: [31, 49, 0, 19, 0],
            backgroundColor: chartColors.lt_green,
        }]
    },
    options: demo_options
});
var demo_perm_2 = document.getElementById('demo_perm_2').getContext('2d');
var demo_perm_2_chart = new Chart(demo_perm_2, {
    type: 'horizontalBar',
    data: {
        labels: ['Unsheltered', 'Temporary', 'Permanent', 'Institutional', 'Other'],
        datasets: [{
            label: 'Total', 
            data: [5, 17, 64, 14, 0],
            backgroundColor: chartColors.lt_green,
        }]
    },
    options: demo_options
});
var demo_perm_3 = document.getElementById('demo_perm_3').getContext('2d');
var demo_perm_3 = new Chart(demo_perm_3, {
    type: 'horizontalBar',
    data: {
        labels: ['Non-Chronic', 'Chronic'],
        datasets: [{
            label: 'Total', 
            data: [0, 0, 0],
            backgroundColor: chartColors.lt_green,
        }]
    },
    options: demo_options
});
var demo_perm_4 = document.getElementById('demo_perm_4').getContext('2d');
var demo_perm_4_chart = new Chart(demo_perm_4, {
    type: 'horizontalBar',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            label: 'Total', 
            data: [89, 11, 0],
            backgroundColor: chartColors.lt_green,
        }]
    },
    options: demo_options
});
var demo_perm_5 = document.getElementById('demo_perm_5').getContext('2d');
var demo_perm_5_chart = new Chart(demo_perm_5, {
    type: 'horizontalBar',
    data: {
        labels: ['All Other Eras', 'Veterans of Iraq/Afghanistan'],
        datasets: [{
            label: 'Total', 
            data: [88, 12, 0],
            backgroundColor: chartColors.lt_green,
        }]
    },
    options: demo_options
});
var demo_perm_6 = document.getElementById('demo_perm_6').getContext('2d');
var demo_perm_6_chart = new Chart(demo_perm_6, {
    type: 'horizontalBar',
    data: {
        labels: ['(1) Minimal Assistance Needed', '(2) Rapid Re-Housing', '(3) Permanent Supportive', '(4) Permanent Supportive'],
        datasets: [{
            label: 'Total', 
            data: [17, 31, 40, 12],
            backgroundColor: chartColors.lt_green,
        }]
    },
    options: demo_options
});

