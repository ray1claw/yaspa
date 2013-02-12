<?php

/**
 * This file is temporary.
 * It is used to send mail upon form submit.
 * Once we integrate node in the backend,
 * this file should be replaced.
 */

// Get values.

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = "Dear $name,\n
  Thanks for contacting us. We will get back to you shortly.\n
  Regards\n
  Team YASPA";

// Send mail.
$sendmail = mail($email, "Thanks for contacting YASPA", $message);

// Print status to return a value to JS.
print $sendmail;