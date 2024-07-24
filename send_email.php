<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.office365.com'; // Set the SMTP server to send through
        $mail->SMTPAuth   = true;
        $mail->Username   = 'something@outlook.com'; // use outlook email
        $mail->Password   = 'password'; // use outlook password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        //Recipients
        $mail->setFrom('something@outlook.com', $name); //use outlook email
        $mail->addAddress('Tinniermoss5050@gmail.com'); //Replace with your email you want to use

        // Content
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body    = "Name: " . $name . "\n" .
                         "Email: " . $email . "\n\n" .
                         "Message:\n" . $message;

        $mail->send();
        echo 'Thank you for contacting us. We will get back to you shortly.';
    } catch (Exception $e) {
        echo "Sorry, there was an error sending your message. Please try again later. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request method.";
}
?>
