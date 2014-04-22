define([
	], function() {
		var ModalHelper = function(element) {
				var $modal = $('#modal');
				$modal.html(element);
				$modal.find('.modal').modal();
		};

		return ModalHelper;
});