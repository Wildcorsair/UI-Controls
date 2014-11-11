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
			<div class='window-frame blue dialog'>
				<div class='caption'>
					Dialog window
					<button class='btn-tb f-right ico-minimize'></button>
				</div>
				<p class='dialog'>
					На форуме часто задают вопросы какой хостинг выбрать.
					В преддверии новогодних праздников htmlbook и «Первый
					хостинг сервис» предлагают совместную акцию для всех
					посетителей сайта и форума. До конца года вы можете
					получить качественный хостинг со скидкой 20%.
				</p>
				<div class='btn-bar'>
					<button class='btn normal primary'>Save</button>
					<button class='btn normal'>Cancel</button>
				</div>
			</div>
			<br />
			<div class='window-frame grey dialog'>
				<div class='caption'>
					Dialog window
					<button class='btn-tb f-right ico-close'></button>
				</div>
				<p class='dialog'>
					На форуме часто задают вопросы какой хостинг выбрать.
				</p>
				<div class='btn-bar'>
					<button class='btn normal primary'>Confirm</button>
					<button class='btn normal'>Cancel</button>
				</div>
			</div>
		</div>
	</body>
</html>