<?php

namespace UkuleleSongs;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
	protected $fillable = array('title', 'artist','key','song', 'tab', 'slug', 'description');
	
	protected $hidden = ['artist_id'];
	public function artist()
	{
		return $this->belongsTo('UkuleleSongs\Artist', 'artist_id');
	}
}
