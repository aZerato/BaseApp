require.config({
	baseUrl: './scripts/',
	paths: {
		'jquery': 'vendors/jquery',
		'toastr': 'vendors/toastr',
		'bootstrap' : 'vendors/bootstrap',
		'underscore': 'vendors/underscore',
		'backbone': 'vendors/backbone',
		'marionette': 'vendors/backbone.marionette',
		'handlebars' : 'vendors/handlebars',
		'hbs' : 'vendors/hbs'
	},
	shim: {
		'toastr': {
			deps: ['jquery'],
			exports: '$'
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['jquery', 'underscore']
		},
		'marionette': {
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'Marionette'
		},
		'handlebars': {
			exports: 'Handlebars'
		}
	}
});

require([
	'jquery',
	'backbone',
	'marionette',
	'handlebars',
	'bootstrap',
	'application'
	], function($, Backbone, Marionette, Handlebars, Bootstrap, Application) {
		$(document).ready(function() {
			Application.start();
		});
});