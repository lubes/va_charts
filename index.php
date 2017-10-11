<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>VA Charts</title>
    <!-- Stylesheets -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="dist/css/all.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    
<section class="charts-wrapper">
    <div class="container">

        <!-- Housing Trends -->
        <div class="charts-sec">
            <h2 class="chart-title">Housing Trends</h2>
            <div class="chart-wrap">
                <canvas id="housingTrends"></canvas> 
            </div>
        </div>
        
        <!-- Veterans Permanent Housing Need -->
        <div class="charts-sec">
            <h2 class="chart-title">Veterans Permanent Housing Need</h2>
            <div class="chart-wrap">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <div class="chart-entry">
                            <span class="blue">145</span>
                            <p>New Veterans connected to services this month</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <div class="chart-entry">
                            <span class="red">513</span>
                            <p>Veterans with vouchers, looking for housing</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <div class="chart-entry">
                            <span class="green">8,104</span>
                            <p>Veterans housed since January 2015</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Homeless Program Entries -->
        <div class="charts-sec">
            <h2 class="chart-title">Homeless Program Entries</h2>
            <div class="chart-wrap">
                <canvas id="programEntries"></canvas> 
                
            </div>
        </div>
        
        <!-- System Dimensions -->
        <div class="charts-sec">
            <h2 class="chart-title">System Dimensions</h2>
            <div class="chart-wrap">
                <canvas id="systemDimensions"></canvas> 
            </div>
        </div>
        
        <!-- Demographics -->
        <div class="charts-sec">
            <h2 class="chart-title">Demographics</h2>
            <div class="chart-wrap">
                
            <!-- Toggle Demographics -->
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  role="tablist">
                    Select System Component
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item nav-link" data-toggle="tab" href="#demo_1" role="tab">Rapid Re-Housing</a>
                    <a class="dropdown-item nav-link"  data-toggle="tab" href="#demo_2" role="tab">Emergency Shelter</a>
                </div>
            </div>

            <!-- Demographics Tab panes -->
            <div class="tab-content">
                <!-- Rapid Re-Housing -->
                <div class="tab-pane active" id="demo_1" role="tabpanel">
                    <h2 class="chart-title smaller">Rapid Re-Housing</h2>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="chart-entry">
                                <h3 class="chart-title sub">Where are Veterans Coming From?</h3>
                                <p>Prior Living Situation</p>
                                <canvas id="demo_rapid_1"></canvas> 
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="chart-entry">
                                <h3 class="chart-title sub">Where are Veterans Going?</h3>
                                <p>Destination</p>
                                <canvas id="demo_rapid_2"></canvas>
                            </div>
                        </div>
                    </div>      
                </div>
                <!-- Emergency Shelter -->
                <div class="tab-pane" id="demo_2" role="tabpanel">
                    <h2 class="chart-title smaller">Emergency Shelter</h2>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="chart-entry">
                                <h3 class="chart-title sub">Where are Veterans Coming From?</h3>
                                <p>Prior Living Situation</p>
                                <canvas id="demo_em_1"></canvas> 
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="chart-entry">
                                <h3 class="chart-title sub">Where are Veterans Going?</h3>
                                <p>Destination</p>
                                <canvas id="demo_em_2"></canvas>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
                
                

            </div>
        </div>

    </div>
</section>
    
<!-- Footer -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
<!-- Plugins -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
<!-- Main JavaScript File --> 
<script src="dist/js/all.min.js"></script>  
</body>
</html> 