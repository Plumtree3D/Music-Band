<?php header('Access-Control-Allow-Origin: *');  ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Music-Band</title>
   
</head>

<body>
    
<h3>fetch get text</h3>
<h3>fetch get json</h3>
    <p style="color:red">
         Click the button and see the results in the Console.
    </p>

    <button onclick="doGetJSON()">doGetJSON</button>
    <div id="genreList"></div>
    <div id="chartList"></div>
    <script src="script.js"></script>
</body>
</html>