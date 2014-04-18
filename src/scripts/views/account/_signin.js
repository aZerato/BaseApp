define([
	'backbone',
	'marionette',
	'hbs!templates/account/_signin'
	], function(Backbone, Marionette, signinTemplate) {

		var SigninView = Backbone.Marionette.ItemView.extend({
			template: signinTemplate
		});

		return SigninView;
});