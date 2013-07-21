/* Define all Views */

define(["jquery", "underscore", "backbone", "handlebars", "marionette", "common", "jqueryui", "jScrollPane", "bootstrap"],
	function($, _, Backbone, Handlebars, Marionette, App, ui) {


		App.Views.HeaderView = Backbone.Marionette.CompositeView.extend({

			template: '#header-tmpl',
			className: 'navbar-inner',

			events : {
				'click #new-contact-modal-link' : 'showNewContact'
			},

			showNewContact : function() {
				App.Router.AppRouter.navigate('newcontact', true);
			}

		});

		App.Views.SearchMenu = Backbone.Marionette.CompositeView.extend({

			template: '#search-contact-tmpl',
			className: 'clearfix',

			events: {
				'click #btn-list-view': 'showListView',
				'click #btn-content-view': 'showContentView'
			},

			showListView: function() {
				App.Router.AppRouter.navigate('list', true);
			},

			showContentView: function() {
				App.Router.AppRouter.navigate('content', true);
			}
		});

		App.Views.ListViewContactItemView = Backbone.Marionette.ItemView.extend({

			template: Handlebars.compile($('#list-view-item-tmpl').html()),
			tagName: 'li',
			className: 'contact-list-item'
		});

		App.Views.ListViewLeftPanel = Backbone.Marionette.CollectionView.extend({

			tagName: 'ul',
			className: 'contact-list-view-left-info',
			itemView: App.Views.ListViewContactItemView


		});

		App.Views.ListViewRightPanel = Backbone.Marionette.CompositeView.extend({

			template: '#list-view-right-tmpl',
			className: 'contact-list-view-rt-dtls clearfix'
		});

	
		App.Views.ContentViewItem = Backbone.Marionette.ItemView.extend({

			template: Handlebars.compile($('#content-view-item-tmpl').html()),
			tagName: 'li',
			className: 'span3 item-row-contact-details-content clearfix'

		});

		App.Views.ContentView = Backbone.Marionette.CompositeView.extend({

			
			className: 'contact-content-view',
			template: '#content-view-tmpl',
			itemViewContainer: 'ul',
			itemView: App.Views.ContentViewItem

		});


		App.Views.NewContactView = Backbone.Marionette.CompositeView.extend({

			className: 'modalwrapper clearfix',
			template: '#new-contact-modal-tmpl',



			onShow : function() {
				// var $modalContainer = $(this.el).parent();
				// console.log($modalContainer.is(':visible'));
				// if(!($modalContainer.is(':visible'))) 
				// 	$modalContainer.modal('show');
			}

			
		
		});

	});