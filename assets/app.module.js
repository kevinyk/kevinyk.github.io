(function(app) {
	//instantiating appRoute constant
	var appRoutes = [
		// { path: '', component: app.AppComponent },
		{ path: 'blackjack', component: app.BlackJackComponent }
		// { path: 'crisis-center', component: CrisisListComponent }
	];

	// instantiating module
	app.AppModule =
	ng.core.NgModule({

	// RouterModule.forRoot(appRoutes) - loads the routes 
		imports: [ 
			ng.platformBrowser.BrowserModule, 
			ng.router.RouterModule.forRoot(appRoutes, { useHash: true })
		],

		declarations: [ 
			app.AppComponent,
			app.BlackJackComponent 
		],

		bootstrap: [ 
			app.AppComponent
		]
	})
	.Class({
		constructor: function() {}
	});
})(window.app || (window.app = {}));