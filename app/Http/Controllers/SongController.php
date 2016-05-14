<?php

namespace UkuleleSongs\Http\Controllers;

use Illuminate\Http\Request;

use UkuleleSongs\Http\Requests;
use UkuleleSongs\Song;

class SongController extends Controller
{
	public function index() {
			return Song::all()->load('artist');
	}
	
	public function store(Request $request) {
		$song = new Song;
	
		$song->title = $request->input('title');
		$song->artist_id = $request->input('artist_id');
		$song->key = $request->input('key');
		$song->song = $request->input('song');
		$song->tab = $request->input('tab');
		$song->resluggify();
		$song->save();
	
		return $song;
	}
	
	public function update(Request $request, $id) {
		$song = Song::find($id);
	
		$song->title = $request->input('title');
		$song->artist = $request->input('artist');
		$song->key = $request->input('key');
		$song->song = $request->input('song');
		$song->tab = $request->input('tab');
		$song->save();
	
		return $song;
	}

	public function show($id) {
		return Song::findBySlugOrId($id);
	}
	
	public function destroy(Request $request) {
		$song = Song::find($request->input('id'));
	
		$title = $song->title;
		$song->delete();
	
		return $title . ' has been successfully deleted.';
	}

	public function getView($id) {
		$song = Song::findBySlugOrId($id);
		$song->load('artist');
		return view('songs.view', ['song' => $song]);
	}

	public function getNew() {
		return view('songs.new');
	}
	
}
