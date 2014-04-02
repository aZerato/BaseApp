require.config({
	baseUrl: './scripts/',
		paths: {
		'jquery': 'vendors/jquery',
		'toastr': 'vendors/toastr',
		'bootstrap' : 'vendors/bootstrap',
		'underscore': 'vendors/underscore',
		'backbone': 'vendors/backbone',
		'marionette': 'vendors/backbone.marionette'
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
		}
	}
});

require([
	'jquery',
	'backbone',
	'marionette',
	'bootstrap',
	'application'
	], function($, Backbone, Marionette, bootstrap, Application) {
		$(document).ready(function() {
			Application.start();
		});
});