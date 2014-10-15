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
                    <table class='form-controls-grid'>
                        <tr>
                            <td>
                                User
                            </td>
                            <td>
                                <div id='4' class='dropdown'>
                                    <input class='' type='text' 
                                            name='prmVal' value='Select ...'>
                                    <input type='hidden' name='prmId' value='1'>
                                    <div class='dd-btn ico-down'></div>                     
                                    <div class='items' id='4'>
                                        <ul>
                                            <li data-value='read'>Чтение</li>
                                            <li data-value='write'>Запись</li>
                                            <li data-value='full'>Полный доступ</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>User Group</label>
                            </td>
                            <td>
                                <div id='3' class='dropdown'>
                                    <input class='font-bold' type='text' 
                                        name='grpVal' value='Пользователь'>
                                    <input type='hidden' name='grpId' value='3'>
                                    <div class='dd-btn ico-down'></div>                     
                                    <div class='items' id='3'>
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
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>User Group</label>
                            </td>
                            <td>
                                <div id='2' class='dropdown'>
                                    <input class='font-bold' type='text' 
                                        name='brVal' value='Станционное'>
                                    <input type='hidden' name='brId' value='3'>
                                    <div class='dd-btn ico-down'></div>                     
                                    <div class='items' id='2'>
                                        <ul>
                                            <li data-value='1'>Станционное</li>
                                            <li data-value='2'>Линейное</li>
                                            <li data-value='3'>Абонентское</li>
                                            <li data-value='4'>Патогенное</li>
                                            <li data-value='5'>Ремонтно-проффилактические работы</li>
                                            <li data-value='6'>Неизвестная причина</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>User type</label>
                            </td>
                            <td>
                                <select>
                                    <option>Param 1</option>
                                    <option>Param 2</option>
                                    <option>Param 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>User age</label>
                            </td>
                            <td>
                                <input type='text' name='uage' 
                                        size='6' class='text-field'>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Description</label>
                            </td>
                            <td>
                                <textarea name='uage' class='text-field'></textarea>
                            </td>
                        </tr>                        
                    </table>
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