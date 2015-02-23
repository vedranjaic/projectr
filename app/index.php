<?php
include('config/parse_path.php');
include('header.php');
?>

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

<?php include('footer.php'); ?>
