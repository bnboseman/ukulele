@extends('layouts.app')

@section('content')
	<div class="col-md-12">
		<h1 class="pull-left">Songs</h1>
		<div class="col-md-4 input-group pull-right search-bar">
			<input class="form-control" ng-model="search" name="search" id="search" placeholder="Search">
			<span class="input-group-addon" id="search-icon">
			<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
			</span>
		</div>
		<div>
		<ng-view></ng-view>
		</div>
	</div>
@endsection

@section('scripts')
	{{ Html::script('app/routes.js') }}
@endsection