<?php

	
	
	if (isset($_POST['url']) && $_POST['url'] == ''){
	$body = "This is the form that was just submitted:     
		Name:  $_POST[name]
		E-Mail: $_POST[email]
		Mobile: $_POST[mobile]"; 
		
	
		
		mail('hi@dansharrington.com', 'Contact Form', $body);
	}
	
	else{
		echo"lol wut";
	}
?>
<META http-equiv="refresh" content="3;URL=http://dansharrington.com">

 
      <link href='https://fonts.googleapis.com/css?family=Cutive+Mono' rel='stylesheet' type='text/css'>
      <link href='https://fonts.googleapis.com/css?family=Josefin+Sans:400,700' rel='stylesheet' type='text/css'>
     
        <link rel="stylesheet" href="style.css" type="text/css" media="screen">
      

<body class="form-submit-page">
	<h1 class="page-title"> Thanks! Talk to you soon :)</h1>
	<p>Redirecting you back in just a sec</p>
	</body>