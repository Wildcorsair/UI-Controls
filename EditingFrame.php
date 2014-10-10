<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" 
                href="css/controls.css">
        <script type="text/javascript" 
                src="js/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" 
                src="js/function.js"></script>
        <style>
            #wrapper {
                width: 790px;
                height: 490px;
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
            <div class='window-frame grey'>
                <div class='caption'>Test</div>
                    <div class='workspace'> 
                        User Name:&nbsp<input type='text' name='uname' size='25'
                                                class='text-field' tabindex='1'>
                        <br /><br />
                        <label>User Login:&nbsp<input type='text' name='ulogin' 
                                        size='25' class='text-field'></label>
                                        <br /><br />
                        <label>User Group</label>
                        <div id='2' class='dropdown'>
                            <input class='font-bold' type='text' 
                                    name='grpVal' value='Пользователь'>
                            <input type='hidden' name='grpId' value='3'>
                            <div class='dd-btn ico-down'></div>                     
                            <div class='items' id='2'>
                                <ul>
                                    <li data-value='1'>Администратор</li>
                                    <li data-value='2'>Модератор</li>
                                    <li data-value='3'>Пользователь</li>
                                    <li data-value='4'>Супер-супер-супер пользователь</li>
                                    <li data-value='5'>Автор статей</li>
                                    <li data-value='6'>Гость</li>
                                </ul>
                            </div>
                        </div>
                        <br /><br />                        
                        User permissions
                        <div id='1' class='dropdown'>
                            <input class='' type='text' 
                                    name='prmVal' value='Select ...'>
                            <input type='hidden' name='prmId' value='1'>
                            <div class='dd-btn ico-down'></div>                     
                            <div class='items' id='1'>
                                <ul>
                                    <li data-value='read'>Чтение</li>
                                    <li data-value='write'>Запись</li>
                                    <li data-value='full'>Полный доступ</li>
                                </ul>
                            </div>
                        </div>
                        <br /><br />
                        <div>
                            <label>User age:&nbsp<input type='text' name='uage' 
                                        size='6' class='text-field'></label>
                                        <br /><br />
                        </div>

                    </div>
                <div class='btn-bar'>
                    <button class='btn normal primary' type='submit' name='save'>Save</button>
                    <button class='btn normal' type='button'>Cancel</button>
                </div>
            </div>
        </div>
        </form>
    </body>
</html>