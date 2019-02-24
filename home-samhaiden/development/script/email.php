<?php

$name = $_POST["user-name"];

$email = $_POST["user-email"];

$subject = $_POST["subject"];

$message = $_POST["message"];

$formcontent = "From: $name \n Type: $subject \n Message: $message";

$to = "sam.haiden@yahoo.com";

$header = "From: $email" . "\r\n" .
"BCC: haiden.sa@gmail.com";

if (mail($to, $subject, $formcontent, $header)) {

echo "Thanks - your email was sent.";

} else {

  echo "Something went wrong - please try again.";

}

?>


