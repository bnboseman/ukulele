<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Ukulele Songs</title>
		{{ Html::style('css/app.css') }}
		{{ Html::style('css/all.css') }}
		
		{{ Html::script('js/all.js') }}
	</head>

	<body  ng-app="ukuleleSongs">
		<nav class="navbar navbar-inverse">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">Ukulele Songs</a>
				</div>
				<div id="navbar" class="collapse navbar-collapse">
					<ul class="nav navbar-nav">
						<li class="active"><a href="/">Home</a></li>
					</ul>
				</div><!--/.nav-collapse -->
			</div>
		</nav>
		<div class="clearfix"></div>
		<div class="container">
			<div class="row">
				@yield('content')
			</div>
		</div>
		{{ Html::script('js/ukeGeeks.scriptasaurus.merged.js') }}
		@yield('scripts')
	</body>
</html>