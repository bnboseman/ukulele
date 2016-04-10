<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


Route::controller('song', 'SongController');

Route::get('/', function() {
	return view('index');
});

Route::get('/songs/new', 'SongController@getNew');

Route::get('/songs/{slug}', 'SongController@getView')->where('slug', '[A-Za-z\-]+');
Route::get('/songs/{id}', 'SongController@getView')->where('id', '[0-9]+');



Route::get('/songs/', function() {
	return view('index');
});


Route::get('/api/v1/songs/{id}', 'SongController@show')->where('id', '[0-9]+');
Route::get('/api/v1/songs/{id}', 'SongController@show')->where('id', '[A-Za-z0-9-]+');
Route::get('/api/v1/songs', 'SongController@index');
Route::post('/api/v1/songs', 'SongController@store');
Route::post('/api/v1/songs/{id}', 'SongController@update');
Route::delete('/api/v1/songs/{id}', 'SongController@destroy');

Route::get('/api/v1/artists', 'ArtistController@index');
Route::get('/api/v1/artists/{id}', 'ArtistController@show')->where('id', '[0-9]+');
Route::post('/api/v1/artists', 'ArtistController@store');
Route::post('/api/v1/artists/{id}', 'ArtistController@update');
Route::delete('/api/v1/artists/{id}', 'ArtistController@destroy');