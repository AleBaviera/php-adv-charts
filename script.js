function init() {
  getData();

}

function getData(){

  $.ajax({
    url:'api.php',
    method: 'GET',
    success: function (data){
      console.log(data);
    },
    error: function (err){
      console.log('errore server');
    }
  });
}
$(document).ready(init);
