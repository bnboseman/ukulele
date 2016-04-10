<?php

namespace UkuleleSongs\Http\Controllers;

use Illuminate\Http\Request;

use UkuleleSongs\Http\Requests;
use UkuleleSongs\Artist;

class ArtistController extends Controller
{
	public function index() 
	{
			return Artist::all()->load('songs');;
	}
	
	public function show($id)
	{
		$artist = Artist::find($id)->load('songs');
		
		return $artist;
	}
	
	public function store(Request $request)
	{
		$artist = new Artist;
		
		$artist->first = $request->input('first');
		$artist->last = $request->input('last');
		$artist->genres = $request->input('genres');
		$artist->url = $request->input('url');
		$artist->save();
	}
	
	public function update(Request $request, $id)
	{
		$artist = Artist::find($id);
	
		$artist->first = $request->input('first');
		$artist->last = $request->input('last');
		$artist->genres = $request->input('genres');
		$artist->url = $request->input('url');
		$artist->save();
	}
	
	public function destroy(Request $request) {
		$artist = Artist::find($request->input('id'));
	
		$name = $artist->full_name;
		$artist->delete();
		
	
		return $name . ' has been successfully deleted.';
	}
}
