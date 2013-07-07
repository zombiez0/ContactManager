//require(["require-config"], function () {

    define(["jquery", "underscore", "backbone", "handlebars", "bootstrap", "common"],
     function ($, _, Backbone, Handlebars, App) {

        var App = App || {};
		App = {
			Models : {}, Views : {}, Collections : {}, Templates : {}, Router : {}, Regions : {}, Layouts : {}, MarionetteApp : {}
		};



		return App;
    });

//})();