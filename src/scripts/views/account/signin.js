define([
	'backbone',
	'marionette',
	'hbs!templates/account/signin'
	], function(Backbone, Marionette, signinTemplate) {

		var SigninView = Backbone.Marionette.ItemView.extend({
			template: signinTemplate,
			className: 'modal fade',
			events: {
				'submit form': 'signin'
			},
			signin: function() {
				alert('');
			}
		});

		return SigninView;
});