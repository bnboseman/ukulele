<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSongsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('songs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('subtitle');
            $table->string('slug');
            $table->string('album');
            $table->text('description');
            $table->enum('key', ['C','F','B♭','E♭','A♭','D♭','C♯','G♭','F♯','B','E','A','D','G','Cm','Fm','B♭m','E♭m','A♭m','D♭m','C♯m','G♭m','F♯m','Bm','Em','Am','Dm','Gm'])
            ->default('C');
            $table->text('song')
            ->nullable();
            $table->text('tab')
            ->nullable();
            $table->foreign('artist_id')
                ->references('id')
                ->unsigned()
                ->nullable()
                ->on('artists')
                ->onDelete('set null');;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('songs');
    }
}
