<?php

namespace UkuleleSongs;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    protected $fillable = array('first', 'last','genres','url');
    
    protected $appends = ['full_name'];
    
    public function songs()
    {
        return $this->hasMany('UkuleleSongs\Song', 'artist_id');
    }
    
    public function getFullNameAttribute()
    {
    	return "{$this->attributes['first']} {$this->attributes['last']}";
    }
}
