<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" 
                href="css/controls.css">
        <script type="text/javascript" 
                src="js/jquery-1.11.0.min.js"></script>

        <style>
            #wrapper {
                width: 790px;
                height: 520px;
                margin: 0 auto;
                background-color: #ddd;
                padding: 5px;
            }
            .window-frame.custom {
                width: 100%;
                height: 350px;
            }
        </style>
    </head>
    <body>
        <form action='check.php' method='POST'>
        <div id="wrapper">
            This is radio buttons!<br /><br />
            <input type='radio' class='ico-radio-empty' name='rd'>&nbsp;Option one<br />
            <input type='radio' class='ico-radio-empty' name='rd'>&nbsp;Option two<br />
            <input type='submit' class='btn-tb ico-radio-empty' name='btn1' value=''>
            <input type='submit' class='btn-tb ico-radio-checked' name='btn2' value=''>
        </div>
        </form>
    </body>
            <script type="text/javascript" 
                src="js/function.js"></script>
</html>