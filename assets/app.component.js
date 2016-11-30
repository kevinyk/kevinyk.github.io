// Angular apps are modular. They consist of many files each dedicated to a purpose.

// ES5 JavaScript doesn't have a native module system. There are several popular 3rd party module systems we could use. Instead, for simplicity and to avoid picking favorites, we'll create a single global namespace for our application.

// We'll call it app and we'll add all of our code artifacts to this one global object.

// We don't want to pollute the global namespace with anything else. So within each file we surround the code in an IIFE ("Immediately Invoked Function Expression").

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