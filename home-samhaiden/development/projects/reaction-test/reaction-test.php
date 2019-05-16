<html>

<head>

    <link rel="stylesheet" type="text/css" href="css/reaction-test.css" />

    <?php 
    
    include("include/header.php"); 
    
    ?>

</head>

<body>

    <?php include("include/menu.php"); ?>

    <div class="wrapper-main">

        <p>Your time: <span id="timeTaken"></span></p>

        <p>Your best time: <span id="bestTime"></span></p>

        <p>Your average time: <span id="averageTime"></span></p>

        <p>Your turns: <span id="turns"></span></p>

        <div id="shape"></div>

    </div>

</body>

<script src="script/reaction-test.js" type="text/javascript"></script>

</html>
