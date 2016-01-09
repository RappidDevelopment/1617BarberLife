<?php

 // ++++++++++++++++++++++++++++++++++++
error_reporting(0);

  
 // configuration

$email_it_to_news = "your_own_email_address@some_domain.com";
$error_message_news = "Please complete the form first";


if(!isset($rnd_news) || !isset($name_news) || !isset($email_news) ) {
	echo $error_message_news;
    die();
}

	$email_from_news = $email_news;
	$email_subject_news = "Newsletter subscriber: '".stripslashes($name_news);
	$email_message_news= "New subscriber was added";
	$email_message_news .="' on ".date("d/m/Y")." at ".date("H:i")."\n\n";
	$email_message_news .= $name_news."'semail is: ".stripslashes($email_news);

	$headers_news = 'From: '.$email_from_news."\r\n" .
   'Reply-To: '.$email_from_news."\r\n" .
   'X-Mailer: PHP/' . phpversion();

	mail($email_it_to_news, $email_subject_news, $email_message_news, $headers_news);

	die();
?>