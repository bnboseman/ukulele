@extends('layouts.app')

@section('content')
	@if (count($songs) > 0)
	<div class="col-md-12">
		<h1>Songs</h1>
		<songs></songs>
	</div>

	@foreach($songs as $song)
		{{ Html::linkAction('SongController@getShow', $song->title, array( $song->id)) }} <br />
	@endforeach
	@endif
@endsection