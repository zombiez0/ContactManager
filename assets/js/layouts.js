
/* Define all Layouts */

define(["jquery", "underscore", "backbone", "handlebars", "marionette", "common", "jqueryui", "jScrollPane", "bootstrap"], 
	function($, _, Backbone, Handlebars, Marionette, App, ui) {

		
	App.Layouts.WrapperLayout = Backbone.Marionette.Layout.extend({

		className : 'clearfix',
		template : '#wrapper-tmpl',

		regions : {

			searchMenuWrapper : '#ctnr-mnu-wrp',
			containerWrapper : '#ctnr-wrp',
			newContactModal : '#new-contact-modal',
			contactDetailsModal : '#contact-modal'
		}

	});


	App.Layouts.ListViewLayout = Backbone.Marionette.Layout.extend({

		className : 'row contact-list-view',
		template : '#list-view-tmpl',

		regions : {

			listLeftPanel : '#list-view-left',
			listRightPanel : '#list-view-right'
		}

	});

	

	
});