<?php
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$email2="studio@12-7working-out.ru"; // ----------------------------------------- почта, куда отправляем письмо
$headers  =  'MIME-Version: 1.0' . "\r\n";
	$headers .=  'Content-type: text/html; charset=UTF-8' . "\r\n";
	$headers .=  'To: <'.$email2.'>, '."\r\n";
	$headers .=  'From: <Webstudio>' . "\r\n"; // ---------------------- адрес отправителя, это заголовок письма, менять не обязательно
$subject2    = "Webstudio@mail.ru"; // ----------------------------------------- заголовок
$message2    = "
<br> ".$_POST['title_0']." ".$_POST['answer_0']."
<br> ".$_POST['title_1']." ".$_POST['answer_1']."
<br> ".$_POST['title_2']." ".$_POST['answer_2']."
<br> ".$_POST['title_3']." ".$_POST['answer_3']."
<br> ".$_POST['title_4']." ".$_POST['answer_4']."
<br> ".$_POST['title_5']." ".$_POST['answer_5']."

<br>IP-адрес посетителя: ".@$_SERVER['REMOTE_ADDR']."
<br>Время отправки сообщения: ".date('Y-m-d H:i:s').";
";
$mail=mail($email2, $subject2, $message2, $headers);
?>

