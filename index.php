<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Chris & Karly are Engaged!</title>

    <!-- Bootstrap & Vendor CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/vendor.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/main.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Questrial|Lato:400,700' rel='stylesheet' type='text/css'>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<?php include_once ('includes/analytics.php'); ?>
</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

<?php include_once ('includes/fbcomments.php'); ?>
<?php include ('includes/header.php'); ?>
<?php $page = htmlspecialchars($_GET["page"]);
    if ($page == '') {
        $page = "home";
    }
?>
<?php include ("pages/$page.php"); ?>
<?php include ('includes/footer.php') ?>  



<!-- jQuery -->
<script src="js/jquery.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>

<!-- Vendor JavaScript -->
<script src="js/vendor.min.js"></script>

<!-- Custom Theme JavaScript -->
<script src="js/grayscale.js"></script>
<script src="js/production.min.js"></script>




</body>

</html>
