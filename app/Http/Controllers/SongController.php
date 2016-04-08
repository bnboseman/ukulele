<?php

namespace UkuleleSongs\Http\Controllers;

use Illuminate\Http\Request;

use UkuleleSongs\Http\Requests;
use UkuleleSongs\Song;

class SongController extends Controller
{
	public function index($id = null) {
		if ($id == null) {
			return Song::orderBy('title', 'desc')->get();
		} else {
			return $this->getView($id);
		}
	}
	
	public function store(Request $request) {
		$song = new Song;
	
		$song->title = $request->input('title');
		$song->artist = $request->input('artist');
		$song->key = $request->input('key');
		$song->song = $request->input('song');
		$song->tab = $request->input('tab');
		$song->save();
	
		return $song->title . ' has been successfully created.';
	}
	
	public function show($id) {
		return Song::find($id);
	}
	
	public function getView($id) {
		if (is_numeric($id) ) {
			$song = Song::find($id);
		} else {
			$song = Song::where('slug', '=', $id)->first(); 
		}
		return view('songs.view', ['song' => Song::findOrFail($id)]);
	}
	
	public function update(Request $request, $id) {
		$song = Song::find($id);
	
		$song->title = $request->input('title');
		$song->artist = $request->input('artist');
		$song->key = $request->input('key');
		$song->song = $request->input('song');
		$song->tab = $request->input('tab');
		$song->save();
	
		return $song->title . ' has been successfully updated.';
	}
	
	public function destroy(Request $request) {
		$song = Song::find($request->input('id'));
	
		$title = $song->title;
		$song->delete();
	
		return $title . ' has been successfully deleted.';
	}
	
}
