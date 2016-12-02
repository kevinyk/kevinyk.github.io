// This is the 'main' app component
// 

(function(app) {
	app.AppComponent =
	ng.core.Component({
		selector: 'my-app',
		templateUrl: 'partials/front.html'
	})
	.Class({
		constructor: function() {
			console.log(this);
			this.buttonStatus=false;
			this.toggleButtonText = function(){
				console.log('you clicked meh')
				if(this.buttonStatus){
					this.buttonStatus=false;
				}else{
					this.buttonStatus=true;
				}
			}
		}
	});
    
})(window.app || (window.app = {}));