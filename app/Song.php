<?php

namespace UkuleleSongs;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;

class Song extends Model
{
	use SluggableTrait;
	
	protected $fillable = array('title', 'artist','key','song', 'tab', 'slug', 'description');
	
	protected $hidden = ['artist_id'];
	
	protected $sluggable = [
			'build_from' => 'title',
			'save_to'    => 'slug',
	];
	
	public function artist()
	{
		return $this->belongsTo('UkuleleSongs\Artist', 'artist_id');
	}
}
