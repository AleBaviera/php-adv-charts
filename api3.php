<?php
  header('Content-type: application/json');

  include 'data3.php';

   // foreach ($graphs as $graphKey => $graph) {

     // foreach ($graphs as $dataKey => $data) {
      // $data = [];
       if ($_GET['level'] == 'guest'){
         $data = $graphs['fatturato'];

       }
      else if ($_GET['level'] == 'employee'){
        // foreach ($graphs as $level => $data) {
          $data = $graphs['fatturato'];
          $data['employee'] = $graphs['fatturato_by_agent'];
        // }
       }
      else if ($_GET['level'] == 'clevel') {
        $data = $graphs;
      }


    // }

   // }


  echo json_encode($data);
?>
