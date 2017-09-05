<?php

$message = '<h2>Новая заявка с сайта "VGBuildings"</h2>';

if (isset($_POST['type-work']))
  $message .= '<p>Выберите вид работ под ключ: <b>' . $_POST['type-work'] . '</b></p>';

if (isset($_POST['bilding']))
  $message .= '<p>Необходимость строительства: <b>' . $_POST['bilding'] . '</b></p>';

if (isset($_POST['type-object']))
  $message .= '<p>Выберите тип объекта: <b>' . $_POST['type-object'] . '</b></p>';

if (isset($_POST['style']))
  $anotherStyle = isset($_POST['another-style']) ? ': '.$_POST['another-style'] :'';
  $message .= '<p>Выберите стиль: <b>' . $_POST['style'] . $anotherStyle . '</b></p>';

if (isset($_POST['volume']))
  $message .= '<p>Квадратура: <b>' . $_POST['volume'] . '</b></p>';

if (isset($_POST['map-point']))
  $message .= '<p>Укажите местоположения объекта: <b>' . $_POST['map-point'] . '</b></p>';

if (isset($_POST['title']))
    $message .= '<p>Отправлено с формы: <b>' . $_POST['title'] . '</b></p>';

if (isset($_POST['name']))
    $message .= '<p>Имя <b>' . $_POST['name'] . '</b></p>';

if (isset($_POST['phone']))
    $message .= '<p>Контактный телефон <b>' . $_POST['phone'] . '</b></p>';

if (isset($_POST['email']))
    $message .= '<p>Контактный телефон <b>' . $_POST['email'] . '</b></p>';




include "class.phpmailer.php";

$mail = new PHPMailer();
$mail->From = $_REQUEST['email'] ? $_REQUEST['email'] : "orders@next-team.ru";
$mail->FromName = $_REQUEST['name'];
$mail->AddAddress('sv@next-team.ru, v.g.buildings@gmail.com');
$mail->IsHTML(true);
$mail->Subject = "Новая заявка с сайта «VGBuildings»";
$mail->Body = $message;

if (!$mail->Send()) print ('Mailer Error: ' . $mail->ErrorInfo);

?>
