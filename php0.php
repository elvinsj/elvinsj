<?php
$nameErr = $emailErr = $genderErr = "";
$name = $email = $gender = $comment = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["name"])) {
     $nameErr = "名前は必要なことです。";
   } else {
     $name = test_input($_POST["name"]);
     }
   
   if (empty($_POST["email"])) {
     $emailErr = "メールは必要なことです。";
   } else {
     $email = test_input($_POST["email"]);
     if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
       $emailErr = "メールのフォーマットは無効です。";
     }
   }

   $comment = test_input($_POST["comment"]);

   if (empty($_POST["gender"])) {
     $genderErr = "性别は必要なことです。";
   } else {
     $gender = test_input($_POST["gender"]);
   }
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
?>
