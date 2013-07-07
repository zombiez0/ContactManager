
/* Define all Collections */

define(["jquery", "underscore", "backbone", "handlebars", "marionette", "common", "jqueryui", "jScrollPane", "bootstrap"], 
	function($, _, Backbone, Handlebars, Marionette, App, ui) {

	App.Collections.Contacts = Backbone.Collection.extend({

		model : App.Models.ContactPerson,
		url : "../assets/json/contacts.json"
	});	
	
	
});