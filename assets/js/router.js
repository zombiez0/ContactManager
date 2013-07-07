
/* Define Router */

define(["jquery", "underscore", "backbone", "handlebars", "marionette", "common", "jqueryui", "applayout", "appview", "jScrollPane", "bootstrap"], 
	function($, _, Backbone, Handlebars, Marionette, App, ui) {

		
	App.Router = Backbone.Router.extend({

		routes: {
		    "" : "renderApp"
		},

		renderApp : function() {

		    //Show the header
		    App.Regions.AppRegion.headerRegion.show(new App.Views.HeaderView());

		    //Show the content Layout
		    App.Layouts.ContentLyt = new App.Layouts.WrapperLayout();
		    
		    //Add Content Layout to wrapper region
		    App.Regions.AppRegion.wrapperRegion.show(App.Layouts.ContentLyt); 

			//Add Search Menu to WrapperLayout
		    App.Layouts.ContentLyt.searchMenuWrapper.show(new App.Views.SearchMenu());

		    //Add ListView Layout to WrapperLayout
		    App.Layouts.ListVwLyt = new App.Layouts.ListViewLayout();
		    App.Layouts.ContentLyt.containerWrapper.show(App.Layouts.ListVwLyt);
		    
		    //Add ListView Left Panel to ListView Layout
		    var appContactCollection = new App.Collections.Contacts();
		    App.Layouts.ListVwLyt.listLeftPanel.show(new App.Views.ListViewLeftPanel({
		    	collection : appContactCollection
		    }));
		    appContactCollection.fetch({
		    	success : function(){
		    		console.log("Afs");
		    	}
		    });

		    //Add ListView Right Panel to ListView Layout 
		    App.Layouts.ListVwLyt.listRightPanel.show(new App.Views.ListViewRightPanel());
		    
		}


	});

	
});