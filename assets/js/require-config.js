
/* Define required libs */
require.config({

	baseUrl : '../assets/js',

	paths : {
		jquery : 'lib/jquery-1.9.1.min',
		jqueryui : 'lib/jquery-ui-1.10.3.custom.min',
		underscore : 'lib/underscore-min',
		backbone : 'lib/backbone-min',
		handlebars : 'lib/handlebars-1.0.rc.1.min',
		bootstrap : 'lib/bootstrap.min',
		marionette : 'lib/backbone.marionette.min',
		mousewheel : 'lib/jquery.mousewheel.min',
		jScrollPane : 'lib/jquery.jscrollpane.min',
		applayout : 'layouts',
		appview : 'views',
		appcollection : 'collections',
		appmodel : 'models',
		approuter : 'router',
		'backbone.wreqr' : 'lib/backbone.wreqr.min',
	    'backbone.babysitter' : 'lib/backbone.babysitter.min'
	},
	shim : {
		'jScrollPane' : {
			deps : ['jquery','mousewheel'],
			exports : 'jScrollPane'
		},
		'jqueryui' : {
			deps : ['jquery'],
			exports : 'ui'
		},
		'underscore' : {
      		exports : '_'
    	},
    	'mousewheel' : {
			deps : ['jquery']
		},		
		'backbone' : {
			deps : ['underscore'],
			exports : 'Backbone'
		},
		'handlebars' : {
			deps : ['jquery', 'underscore', 'backbone'],
			exports : 'Handlebars'
		},
		'marionette' : {
			deps : ['jquery', 'underscore', 'backbone']
		},
		'backbone.wreqr' : {
			deps : [ 'underscore', 'backbone']
		},
		'backbone.babysitter' : {
			deps : [ 'underscore', 'backbone']
		},
		'bootstrap' : {
			deps : ['jquery']
		},
	}
}); 