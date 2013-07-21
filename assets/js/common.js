//require(["require-config"], function () {

    define(["jquery", "underscore", "backbone", "handlebars", "common", "marionette"],
     function ($, _, Backbone, Handlebars, App, Marionette) {

        var App = App || {};
		App = {
			Models : {}, Views : {}, Collections : {}, Templates : {}, Router : {}, Regions : {}, Layouts : {}, MarionetteApp : {}
		};

		App.MarionetteApp.getCurrentRouter = function() {
			return Backbone.history.fragment;
		};

		// Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(template) {
		// 	// use Handlebars.js to compile the template
		// 	return Handlebars.compile(template);
		// }

		// Marionette.Region.prototype.open = function(view){
  // 			this.$el.empty().append(view.el);
  // 			this.$el.hide();
		// 	this.$el.html(view.el);
		// 	this.$el.slideDown("fast");
		// }

		return App;
    });

//})();