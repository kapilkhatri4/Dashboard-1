$(document).ready(function(){

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                label: 'Jan',
                fill: false,
                backgroundColor: '#fa5535',
                borderColor: 'rgb(255, 180, 132)',
                data: [10, 60, 40, 50, 30, 20]
            }]
        },
    
        // Configuration options go here
        options: {}
    });
    var ctx = document.getElementById('myPieChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',
    
        // The data for our dataset
        data: {
            labels: ['Facebook', 'Youtube', 'Direct Search'],
            datasets: [{
                label: 'Jan',
                backgroundColor:[
                    '#ff7f00',
                'orange',
                '#4ab8e0',
                ] ,
                
                data: [10, 60, 40]
            }]
        },
    
        // Configuration options go here
        options: {
            legend: {
                boxWidth: 0,
                labels: {
                    // This more specific font property overrides the global property
                    fontColor: 'grey',
                    fontSize: 16,
                    marginBottom: 20,
                    
                }
            }
        }
    });


    $('.menu-toggler').click(function(){
        $('.sidemenu').toggleClass('hidden');
    })

})