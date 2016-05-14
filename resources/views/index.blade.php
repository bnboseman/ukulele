@extends('layouts.app')

@section('content')
	<div class="col-md-12">
		<ng-view></ng-view>
	</div>
@endsection

@section('scripts')
	{{ Html::script('app/routes.js') }}
@endsection