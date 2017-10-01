<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" 
                href="http://ui-controls.dev/css/controls.css">
        <script type="text/javascript" 
                src="http://ui-controls.dev/js/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" 
                src="http://ui-controls.dev/js/functions.js"></script>
        <style>
            #wrapper {
                width: 790px;
                height: 490px;
                margin: 0 auto;
                background-color: #ddd;
                padding: 5px;
            }
        </style>
    </head>
    <body>
        <div id="wrapper">
            <table class='grey-table'>
                <thead>
                    <tr>
                        <th class='title' colspan='5'>Таблица пользователей</th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Имя пользователя</th>
                        <th>Логин</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class='c-align'>24578</td>
                        <td>Владимир</td>
                        <td>delawar</td>
                        <td class='btn-cont'>
                            <button class='btn-tb ico-edit' data-value='24578'></button>
                        </td>
                        <td class='btn-cont'>
                            <button class='btn-tb ico-delete' data-value='24578'></button>
                        </td>
                    </tr>
                    <tr>
                        <td class='c-align'>24878</td>
                        <td>Остап Иванович</td>
                        <td>ostap</td>
                        <td class='btn-cont'>
                            <a class='btn-tb ico-edit' href='55578' data-value='55578'></a>
                        </td>
                        <td class='btn-cont'>
                            <a class='btn-tb ico-delete' href='55578' data-value='55578'></a>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan='5'>
                            <div class='pagination'>
                                <a class='f-left btn ico-first' href=''>&nbsp</a>
                                <a class='f-left btn ico-prev' href=''>&nbsp</a>
                                <a class='f-left btn' href=''>1</a>
                                <a class='f-left btn' href=''>2</a>
                                <a class='f-left btn active' href=''>3</a>
                                <a class='f-left btn' href=''>4</a>
                                <a class='f-left btn' href=''>5</a>
                                <a class='f-left btn ico-next' href=''>&nbsp</a>
                                <a class='f-left btn ico-last' href=''>&nbsp</a>
                            </div>
                            <div class='counter'>
                                1 - 20 из 24 записей
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </body>
</html>