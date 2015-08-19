<?php
include('config/init.php');
?><!doctype html>
<html class="no-js" lang="">
	<head>
		<meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>Project - Client</title>
		<meta name="description" content="">
		<meta name="keywords" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- Favicon -->
		<link rel="icon" type="image/x-icon" href="<?= $main_url; ?>dest/images/favicon.ico"/>
		<link rel="apple-touch-icon" href="<?= $main_url; ?>dest/images/apple-touch-120.png" sizes="120x120">
		<link rel="apple-touch-icon" href="<?= $main_url; ?>dest/images/apple-touch-152.png" sizes="152x152">

		<!-- Styles -->
		<link rel="stylesheet" href="<?= $main_url; ?>style.css">
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

		<!-- Scripts -->
		<script src="<?= $main_url; ?>dest/js/modernizr.js"></script>

		<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
		<script>
			(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
			function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
			e=o.createElement(i);r=o.getElementsByTagName(i)[0];
			e.src='//www.google-analytics.com/analytics.js';
			r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
			ga('create','UA-XXXXX-X');ga('send','pageview');
		</script>
	</head>
	<body>
		<!--[if lte IE 8]>
			<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->


		<?php

			// Call parts
			if($path["call_parts"][0] != ""){
				if(file_exists($path["call_parts"][0].'.php')){
					include($path["call_parts"][0].'.php');
				} else {
					include('404.php');
				}
			} else {
				include('homepage.php');
			}

		?>

		<script src="<?= $main_url; ?>dest/js/jquery.js"></script>
		<script>window.jQuery || document.write('<script src="<?= $main_url; ?>dest/js/jquery.min.js"><\/script>')</script>
		<script src="<?= $main_url; ?>dest/js/app.js"></script>

	</body>
</html>

