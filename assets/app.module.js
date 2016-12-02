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

	
		imports: [ 
			ng.platformBrowser.BrowserModule, 
			// The ng-bootstrap module
			ngb.NgbRootModule,
			// RouterModule.forRoot(appRoutes) - loads the routes 
			ng.router.RouterModule.forRoot(appRoutes, { useHash: true, initialNavigation: true })
		],
		// Any components to be used by a module must be in the declarations array
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