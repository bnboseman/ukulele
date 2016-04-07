<?php

namespace UkuleleSongs\Http\Controllers;

use Illuminate\Http\Request;

use UkuleleSongs\Http\Requests;
use UkuleleSongs\Song;

class SongController extends Controller
{
    public function getIndex()
    {
    	$songs = Song::orderBy('title', 'desc')->get();

    	return view('songs/index', [
    			'songs' => $songs
    	]);
    }

    public function getShow($id)
    {
    	$song = Song::findOrFail($id);
    	return view('songs/view', [
    			'song' => $song
    	]);
    }
}
