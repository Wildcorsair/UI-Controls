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
        </style>
    </head>
    <body>
        <div id="wrapper">
            DateTimePicker<br /><br />
            <!--<div class='dt-conteiner'>
                <button class='btn-tb ico-prev f-left'></button>
                <div class='month f-left'>Сентябрь</div>
                <button class='btn-tb ico-next f-left'></button>               
                <div class='year f-left'>2014</div>                
                <button class='btn-tb ico-down'></button>
                <table class='dt-picker'>
                    <thead>
                        <tr>
                            <th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th>
                        </tr>
                    </thead>
                    <tr>
                        <td class='prev-month'>31</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
                    </tr>
                    <tr>
                        <td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td>
                    </tr>
                    <tr>
                        <td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td>
                    </tr>
                    <tr>
                        <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td>
                    </tr>
                    <tr>
                        <td>28</td><td>29</td><td>30</td><td class='next-month'>1</td><td class='next-month'>2</td><td class='next-month'>3</td><td class='next-month'>4</td>
                    </tr>
                </table>
                <div class='time-block'>
                    <input class='hour' type='text' name='hour' length='2'
                            value='00'>&nbsp:
                    <input class='min' type='text' name='min' length='2'
                            value='00'>&nbsp:
                    <input class='sec' type='text' name='sec' length='2'
                            value='00'>
                </div>
            </div>-->

            <div id='3' class='dt-picker'>
                <input class='' type='text' 
                    name='grpVal' value='15-10-2014 08:00:00'>
                <input type='hidden' name='grpId' value=''>
                <div class='dt-btn ico-date'></div>

                <div id='3' class='dt-conteiner'>
                    <button class='btn-tb ico-prev f-left'></button>
                    <div class='month f-left'>Декабрь</div>
                    <button class='btn-tb ico-next f-left'></button>               
                    <div class='year f-left'>2014</div>                
                    <button class='btn-tb ico-down'></button>
                    <table class='dt-calendar'>
                        <thead>
                            <tr>
                                <th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th>
                            </tr>
                        </thead>
                        <tr>
                            <td class='prev-month'>31</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
                        </tr>
                        <tr>
                            <td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td>
                        </tr>
                        <tr>
                            <td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td>
                        </tr>
                        <tr>
                            <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td>
                        </tr>
                        <tr>
                            <td>28</td><td>29</td><td>30</td><td class='next-month'>1</td><td class='next-month'>2</td><td class='next-month'>3</td><td class='next-month'>4</td>
                        </tr>
                    </table>
                    <div class='time-block'>
                        <input class='hour' type='text' name='hour'
                                maxlength='2' value='00'>&nbsp:
                        <input class='min' type='text' name='min' 
                                maxlength='2' value='00'>&nbsp:
                        <input class='sec' type='text' name='sec' 
                                maxlength='2' value='00'>
                    </div>
                </div>
            </div>
            <!-- Second -->
            <br /><br />
            <div id='2' class='dt-picker f-left'>
                <input class='font-bold' type='text' 
                    name='grpVal' value='15-10-2014 08:00:00'>
                <input type='hidden' name='grpId' value=''>
                <div class='dt-btn ico-date'></div>

                <div id='2' class='dt-conteiner'>
                    <button class='btn-tb ico-prev f-left'></button>
                    <div class='month f-left'>Декабрь</div>
                    <button class='btn-tb ico-next f-left'></button>               
                    <div class='year f-left'>2009</div>                
                    <button class='btn-tb ico-down'></button>
                    <table class='dt-calendar'>
                        <thead>
                            <tr>
                                <th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class='prev-month'>31</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
                            </tr>
                            <tr>
                                <td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td>
                            </tr>
                            <tr>
                                <td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td>
                            </tr>
                            <tr>
                                <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td>
                            </tr>
                            <tr>
                                <td>28</td><td>29</td><td>30</td><td class='next-month'>1</td><td class='next-month'>2</td><td class='next-month'>3</td><td class='next-month'>4</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class='time-block'>
                        <input class='hour' type='text' name='hour' maxlength='2'
                                value='00'>&nbsp:
                        <input class='min' type='text' name='min' maxlength='2'
                                value='00'>&nbsp:
                        <input class='sec' type='text' name='sec' maxlength='2'
                                value='00'>
                    </div>
                </div>
            </div>

        </div>
    </body>
</html>