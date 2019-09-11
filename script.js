function init() {
  getData2();

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
  var type1 = data.fatturato.type;
  var data1 = data.fatturato.data;

  var ctx = document.getElementById('myChart1').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: type1,

    // The data for our dataset
    data: {
        labels: months,
        datasets: [{
            label: 'data step 2',
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
  var months = getMonths();
  var type2 = data.fatturato_by_agent.type;
  var agents = Object.keys(data.fatturato_by_agent.data);
  var data2 = Object.values(data.fatturato_by_agent.data);

  var ctx = document.getElementById('myChart2').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: type2,

    // The data for our dataset
    data: {
        labels: agents,
        datasets: [{
            label: 'data step 2',
            backgroundColor: ['red', 'yellow', 'blue', 'green'],
            borderColor: 'rgb(255, 99, 132)',
            data: data2
        }]
    },

    // Configuration options go here
    options: {}
  });

}
$(document).ready(init);
