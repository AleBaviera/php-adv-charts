function init() {
  getData();

}

function getData(){

  $.ajax({
    url:'api.php',
    method: 'GET',
    success: function (data){
      console.log(data);
      printChart(data);
    },
    error: function (err){
      console.log('errore server');
    }
  });
}

function printChart(data){

  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'data step 1',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data
        }]
    },

    // Configuration options go here
    options: {}
});
}
$(document).ready(init);
