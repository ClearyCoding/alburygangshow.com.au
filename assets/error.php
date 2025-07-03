<?php
$code = $_SERVER['REDIRECT_STATUS'] ?? 500;

$messages = [
    400 => 'Bad Request',
    401 => 'Unauthorized',
    403 => 'Forbidden',
    404 => 'Page Not Found',
    500 => 'Internal Server Error',
    503 => 'Service Unavailable'
];

$message = $messages[$code] ?? 'Unknown Error';
http_response_code($code);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $code; ?> - Albury Gang Show</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/branding/favicon.ico">

    <meta name="author" content="Albury Gang Show">
    <meta name="description" content="We are the Albury Gang Show, a two-and-a-half hour variety show created and presented by the Scouts and Guides of the Albury/Wodonga region.">
    <meta name="keywords" content="Gang Show, Albury, Scouts, Guides, Theatre, Wodonga, Australia, Gang, Show">
    <meta name="robots" content="noindex">

    <link rel="stylesheet" href="/assets/styles/loader.css">
    <link rel="stylesheet" href="/assets/styles/main.css">
    <link rel="stylesheet" href="/assets/styles/imports.css">
</head>
<body>
    <div id="loader">
        <div id="loader-wheel-error">
            <img draggable="false" alt="Gang Show Logo" src="/assets/images/branding/AGS_transparent-sad.png" class="loader-logo">
        </div>
        <div class="loader-title loader-error">alburygangshow.com.au</div>
        <div class="loader-subtitle"><?php echo $code; ?> - <?php echo $message; ?> :(</div>
        <a href="/" target="_self" class="button">Back Home &#8594</a>
        <div class="loader-notice">Please check that you have the correct URL. If you believe this was an error, please contact the <a target="_self" href="/#contact">webmaster</a>.</div>
    </div>
    <script src="/assets/scripts/reading-writing.js"></script>
</body>
</html>