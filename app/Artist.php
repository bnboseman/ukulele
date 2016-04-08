<?php

namespace UkuleleSongs;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    protected $fillable = array('first', 'last','genres','url');
    
    public function songs()
    {
        return $this->hasMany('UkuleleSongs\Song', 'artist_id');
    }
}
