<?php

namespace UkuleleSongs;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
	protected $fillable = array('title', 'artist','key','song', 'tab', 'slug', 'description');

	public function artist()
	{
		return $this->belongsTo('UkuleleSongs\Artist', 'artist_id');
	}
}
