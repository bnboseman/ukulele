<?php

namespace UkuleleSongs;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
	protected $fillable = array('title', 'artist','key','song', 'tab');
}
