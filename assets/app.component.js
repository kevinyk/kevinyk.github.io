// This is the 'main' app component
// 

(function(app) {
	app.AppComponent =
	ng.core.Component({
		selector: 'my-app',
		templateUrl: 'partials/front.html'
	})
	.Class({
		constructor: function() {}
	});
    
})(window.app || (window.app = {}));