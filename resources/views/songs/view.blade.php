@extends('layouts.app')

@section('content')
	<h1 class="ugsSongTitle">{{ $song->title }} </h1>
	<div id="ukeSongContainer" class="ugsLayoutTwoColumn ugs-song-wrap">
		<aside id="ukeChordsCanvas" class="ugs-diagrams-wrap ugs-grouped"></aside>
		<article id="ukeSongText" class="ugs-source-wrap"><pre>{{ $song->song }}</pre></article>
	</div>

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
@endsection