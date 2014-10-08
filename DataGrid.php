<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" 
				href="http://dbtest.org/UI-Controls/css/controls.css">
		<script type="text/javascript" 
				src="http://dbtest.org/UI-Controls/js/jquery-1.11.0.min.js"></script>
		<script type="text/javascript" 
				src="http://dbtest.org/UI-Controls/js/function.js"></script>
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
			<table class='gray-table'>
				<thead>
					<tr>
						<th colspan='5'>Таблица пользователей</th>
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
						<td class='ra'>24578</td>
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
						<td class='ra'>24878</td>
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
			<br />
			<div class='btns-group'>
				<button class='btn'>5</button>
				<a href='#' class='btn cancel'>5</a>
			</div>
			<br />
			<a href='#' class='btn normal' data-value='item20'>Normal</a>
			<a href='#' class='btn large'>Large</a>
			<a href='#' class='btn normal primary'>Primary</a>
			<a href='#' class='btn normal success' data-value='item22'>Success</a>
			<a href='#' class='btn normal cancel'>Cancel</a>
			<input class='btn normal' type='submit' value='Submit' />
			<br />
			<button class='btn normal' data-value='item20'>Normal</button>
			<button class='btn large'>Large</button>
			<button class='btn normal primary'>Primary</button>
			<button class='btn normal success' data-value='item22'>Success</button>
			<button class='btn normal cancel'>Cancel</button>
			<input class='btn normal' type='submit' value='Submit' />
			<div class='btn-tb ico-last'></div>
			<!--<table class=''>
				<thead>
					<tr>
						<td>Column1</td><td>Column2</td><td>Column3</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Row1</td><td>Row1</td><td>Row1</td>
					</tr>
					<tr>
						<td>Row2</td><td>Row2</td><td>Row2</td>
					</tr>
				</tbody>
			</table>-->
		</div>
	</body>
</html>