<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Ukulele Songs</title>
		{{ Html::style('css/app.css') }}
		{{ Html::style('css/all.css') }}
	</head>

	<body>
		<div class="container">
			<nav class="navbar navbar-default">
				<!-- Navbar Contents -->
			</nav>
		</div>

		<div class="container">
			@yield('content')
		</div>
		{{ Html::script('js/ukeGeeks.scriptasaurus.merged.js') }}
		<script type="text/javascript">
		if (false){//isLegacyIe){
			window.attachEvent('onload',function(){
				ukeGeeks.scriptasaurus.init(true);
				ukeGeeks.scriptasaurus.runByClasses();
			});
		}
		else{
			(function(){
				ukeGeeks.scriptasaurus.init(false);
				ukeGeeks.scriptasaurus.runByClasses();
			})();
		}
	</script>
	</body>
</html>