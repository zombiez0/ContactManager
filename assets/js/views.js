
/* Define all Views */

define(["jquery", "underscore", "backbone", "handlebars", "marionette", "common", "jqueryui", "jScrollPane", "bootstrap"], 
	function($, _, Backbone, Handlebars, Marionette, App, ui) {

		
	App.Views.HeaderView = Backbone.Marionette.CompositeView.extend({

		template : '#header-tmpl',
		className : 'navbar-inner'
	});

	App.Views.SearchMenu = Backbone.Marionette.CompositeView.extend({

		template : '#search-contact-tmpl',
		className : 'clearfix'
	});

	App.Views.ListViewContactItemView = Backbone.Marionette.ItemView.extend({

		template: Handlebars.compile($('#list-view-item-tmpl').html()),
		tagName : 'li',
		className : 'contact-list-item'
	});

	App.Views.ListViewLeftPanel = Backbone.Marionette.CollectionView.extend({

		tagName : 'ul',
		className : 'contact-list-view-left-info',
		itemView : App.Views.ListViewContactItemView

		
	});

	App.Views.ListViewRightPanel = Backbone.Marionette.CompositeView.extend({

		template : '#list-view-right-tmpl',
		className : 'contact-list-view-rt-dtls clearfix'
	});

	

	
});