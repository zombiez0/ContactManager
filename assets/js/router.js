
/* Define Router */

define(["jquery", "underscore", "backbone", "handlebars", "marionette", "common", "jqueryui", "applayout", "appview", "jScrollPane", "bootstrap"], 
	function($, _, Backbone, Handlebars, Marionette, App, ui) {

		
	App.Router = Backbone.Router.extend({

		routes: {
		    "" : "renderApp",
		    'list' : 'renderListView',
		    'content' : 'renderContentView',
		    'newcontact' : 'renderNewContactModalView'
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

		    //Contact collection
		    this.appContactCollection = new App.Collections.Contacts();


		    //Check the route type
		    if(!App.MarionetteApp.getCurrentRouter().length){
		    	this.navigate('list', true);	//Default route goto list view
		    }

		    // switch(App.MarionetteApp.getCurrentRouter()) {

		    // // 	case 'list' :  	if(_.isUndefined(App.Layouts.ListVwLyt))
		    // // 						this.renderListView();		//render content view if the route type is #content		
		    // // 				 		break;		

		    // // 	case 'content' :  if(_.isUndefined(App.Views.ContentVw))
		    // // 						this.renderContentView();			//render list view if the route type is #list or null
						// // 			break;	

		    // 	default : this.navigate('list', true);	//Default route goto list view
		    // }


		  

		},

		renderListView : function() {

			//Initialize list view layout
			App.Layouts.ListVwLyt = new App.Layouts.ListViewLayout();

			//Check if the user visited the route directly .. if so call renderApp
			if(_.isUndefined(this.appContactCollection))
				this.renderApp();
			else
				App.Layouts.ContentLyt.containerWrapper.close();	

			//Add ListView Layout to WrapperLayout
		    App.Layouts.ContentLyt.containerWrapper.show(App.Layouts.ListVwLyt);
		    
		    //Add ListView Left Panel to ListView Layout
		    App.Layouts.ListVwLyt.listLeftPanel.show(new App.Views.ListViewLeftPanel({
		    	collection : this.appContactCollection
		    }));
		    this.appContactCollection.fetch();
		    
		    //Add ListView Right Panel to ListView Layout 
		    App.Layouts.ListVwLyt.listRightPanel.show(new App.Views.ListViewRightPanel());
		},

		renderContentView : function() {

			//Check if the user visited the route directly .. if so call renderApp
			if(_.isUndefined(this.appContactCollection))
				this.renderApp();
			else
				App.Layouts.ContentLyt.containerWrapper.close();

			//Initialize Content View
			App.Views.ContentVw = new App.Views.ContentView({
		    	collection : this.appContactCollection
		    });

			//Add Content View to WrapperLayout
		    App.Layouts.ContentLyt.containerWrapper.show(App.Views.ContentVw);
		    this.appContactCollection.fetch();
		    
		    
		},

		renderNewContactModalView : function() {

			if(_.isUndefined(this.appContactCollection)) {
				this.renderApp();

		    	//Render List View
		    	this.renderListView();
			}
				//Add New Contact Modal Window to WrapperLayout
				var newContactModal = new App.Views.NewContactView();
		    	App.Layouts.ContentLyt.newContactModal.show(newContactModal);

		    	newContactModal.on("show", function(){
					console.log("dsgd");
				});
			
				
	
			

		    

		}




	});

	
});