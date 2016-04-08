var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	var bootstrapPath = './bower_components/bootstrap-sass/assets';
    mix.sass('app.scss')
    .copy(bootstrapPath + '/fonts', 'public/fonts')
    .copy(bootstrapPath + '/javascripts/bootstrap.min.js', 'public/js');
    
    mix.styles([
        'yuiReset.css',
        'basic-page-layout.css',
        'ukeGeeks.music.css',
        'ukeGeeks.musicPrint.css'
   ]);
    
    mix.scripts([
		'./bower_components/jquery/dist/jquery.min.js',
		bootstrapPath + '/javascripts/bootstrap.min.js',
        './app/assets/javascript/ukeGeeks.scriptasaurus.min.js',
        './bower_components/angular/angular.min.js',
        './bower_components/angular-route/angular-route.min.js',
        './bower_components/angular-sanitize/angular-sanitize.min.js',
        './public/app/app.js',
        './public/app/factories',
        './public/app/controllers',
        './public/app/directives',
        './public/app/routes.js'
   ])
});
