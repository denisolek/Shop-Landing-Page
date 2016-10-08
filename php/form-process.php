<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Wymagane imię i nazwisko ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Wymagany adres email ";
} else {
    $email = $_POST["email"];
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Wymagana treść wiadomości ";
} else {
    $message = $_POST["message"];
}

//Add your email here
$EmailTo = "denis.olek@gmail.com";
$Subject = "[OLTEX24.PL] - Nowa wiadomość";

// prepare email body text
$Body = "";
$Body .= "Imię i nazwisko: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Adres email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Treść wiadomości: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong";
    } else {
        echo $errorMSG;
    }
}

?>
