function init() {
  $('button').click(getData3);

}
function getMonths(){

  var months = moment.months();
  return months;
}

function getData1(){

  $.ajax({
    url:'api.php',
    method: 'GET',
    success: function (data){
      console.log(data);
      printChart1(data);
    },
    error: function (err){
      console.log('errore server');
    }
  });
}

function getData2(){

  $.ajax({
    url:'api2.php',
    method: 'GET',
    success: function (data){
      console.log(data);
      printChart1(data);
      printChart2(data);
    },
    error: function (err){
      console.log('errore server');
    }
  });
}

function printChart1(data){
  var months = getMonths();
  var type1 = 'line';
  var data1 = data.data;

  var ctx = document.getElementById('myChart1').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: type1,

    // The data for our dataset
    data: {
        labels: months,
        datasets: [{
            label: 'vendite',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data1
        }]
    },

    // Configuration options go here
    options: {}
  });
}

function printChart2(data){

  var level = data.employee.data;
  var agents = Object.keys(level);
  var data2 = Object.values(level);

  var ctx = document.getElementById('myChart2').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: agents,
        datasets: [{
            label: 'data employee',
            backgroundColor: ['red', 'yellow', 'blue', 'green'],
            borderColor: 'rgb(255, 99, 132)',
            data: data2
        }]
    },

    // Configuration options go here
    options: {}
  });

}
function clearGraphs(){
  $('.graphs').html('');
  $('.graphs').append('<canvas id="myChart1"></canvas><canvas id="myChart2"></canvas><canvas id="myChart3"></canvas>');
}

function getData3(){
  var level = $('.selectLevel').val();



  $.ajax({
    url:'api3.php',
    method:'GET',
    data: {'level': level},
    success: function(data){
        clearGraphs();
        if (level == 'guest') {
          console.log(data);
          printChart1(data);
        
         }
        else if (level == 'employee') {
          console.log(data);
          printChart1(data);
          printChart2(data);
        }
        else if (level == 'clevel') {
          console.log(data);
          printChart1(data);
          printChart2(data);
          printChart3(data);
        }


    },
    error: function(err){
      console.log('errore server', err);
    }
  });
}

function printChart3(data){
  var months = getMonths();
  var level = data.clevel.data;
  var data3 = Object.values(level);

  var labels = Object.keys(level);

  var ctx = document.getElementById('myChart3').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: months,
        datasets: [{
            label: labels[0],
            // backgroundColor: 'green',
            borderColor: 'green',
            data: data3[0]
        },
        {
            label: labels[1],
            // backgroundColor: 'blue',
            borderColor: 'blue',
            data: data3[1]
        },
        {
            label: labels[2],
            // backgroundColor: 'yellow',
            borderColor: 'yellow',
            data: data3[2]
        }]
    },

    // Configuration options go here
    options: {}
  });
  // console.log(data);
}

$(document).ready(init);
