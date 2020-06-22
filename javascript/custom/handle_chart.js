class HandleChart{
    constructor(){
        this.default_options = {
            title: 'Company Performance',
            hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0},
            backgroundColor : {
              fill : "#7FC1F2"
            }
        }
    }
    __init__(data,option,div_id){
        this.data = data;
        this.option = option;
        this.div_id = div_id;
    }
    draw_chart = () => {
        var data = google.visualization.arrayToDataTable(this.data);
        var options = this.option;
        var chart = new google.visualization.AreaChart(document.getElementById(this.div_id));
        chart.draw(data, options);
    }
    get_data(){
        // create ajax call 
        // pass response data as a param in formated_data method
        var data = this.format_data(null);
        // after getting formated data , call set_data method
        this.set_data(data);
    }
    set_data(data){
        // this method initialize data, option and div_id for chart
        // after initializing , call google charts to draw chart.

        //  var custom_option = {.... write something ...}
        // this.default_options = custom_option

        
        var chart = new HandleChart();
        chart.__init__(data,this.default_options,'chart_div')
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(chart.draw_chart); 
    }
    format_data(data){
        // fetch all required data from param.
        // and set them as it shown in response_data variable below.
        var t = [
            Math.floor((Math.random() * 1000) + 100),
            Math.floor((Math.random() * 1000) + 100),
            Math.floor((Math.random() * 1000) + 100),
            Math.floor((Math.random() * 1000) + 100)
        ];
        var response_data = [
            ['Year', 'Sales', 'Expenses' , 'sale'],
            ['2013',  t[2],      400,     500],
            ['2014',  1170,      t[0],     900],
            ['2015',  660,       t[1],    300],
            ['2016',  1030,      540,     t[3]]
          ];
        return response_data;
    }
}

window.onload = (event) => {
    setInterval(function (){
        let start = new HandleChart();
        start.get_data();
    },1000);
};