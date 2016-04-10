@extends('layouts.app')

@section('content')
	<div class="col-md-12">
		<h1>Songs</h1>
		<div class="col-md-4 input-group pull-right">
			<input class="form-control" ng-model="search" name="search" id="search" placeholder="Search">
			<span class="input-group-addon" id="search-icon">
			<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
			</span>
		</div>
		<songs></songs>
	</div>
@endsection