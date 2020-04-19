<?php
   include('config.php');
   session_start();

   $user_check = $_SESSION['login_user'];

   $ses_sql = mysqli_query($db,"select username from admin where username = '$user_check' ");

   $row = mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);

   $login_session = $row['username'];

   if(!isset($_SESSION['login_user'])){
      header("location:login.php");
      die();
   }
?>
<html>
   <head>

      <style>
         span {
            color: green;
         }
      </style>

      <script>
         function showHint(str) {
            if (str.length == 0) {
               document.getElementById("txtHint").innerHTML = "";
               return;
            }else {
               var xmlhttp = new XMLHttpRequest();

               xmlhttp.onreadystatechange = function() {
                  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                     document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
                  }
               }
               xmlhttp.open("GET", "php_ajax.php?q=" + str, true);
               xmlhttp.send();
            }
         }
      </script>

   </head>
   <body>

      <p><b>Search your favourite tutorials:</b></p>

      <form>
         <input type = "text" onkeyup = "showHint(this.value)">
      </form>

      <p>Entered Course name: <span id="txtHint"></span></p>

   </body>
</html>
