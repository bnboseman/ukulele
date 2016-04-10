@extends('layouts.app')

@section('content')
    <div class="col-md-12">
        <h1>Create New Song</h1>
        <song action="new" csrf="{{ csrf_token() }}"></song>
        
    </div>
@endsection