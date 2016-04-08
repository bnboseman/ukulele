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
            $table->string('slug');
            $table->text('description');
            $table->enum('key', ['C','F','B♭','E♭','A♭','D♭','C♯','G♭','F♯','B','E','A','D','G'])
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
