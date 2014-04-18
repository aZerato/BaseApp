define([
	'views/account/_signin'
	], function(SigninView) {
		
		var SigninHelper = function(Application) {
			Application.headerNavigation.show(new SigninView());
		};

		return SigninHelper;
});