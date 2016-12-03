# kevinyk.github.io

This is an Angular2 frontend, written exclusively in JavaScript. 
A place to practice frontend development and learn a new framework at the same time.

Dependencies:

* [Angular 2](https://angular.io/) (2.2.3)
* [BootStrap 4](https://v4-alpha.getbootstrap.com/) (4.0.0-alpha.5)
* [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) (1.0.0-alpha.14, which is tested on Angular 2.0.0)

Features in development:

* Establish communication between the app component and the blackjack component to change the button status if a user navigates to a page using a partial link. (Hacky solution around having no access to control incoming http requests)
* Fix blackjack bug PlayerConstructor: cannot find index 1 of undefined in deckofcards script
* loading screen to have something nice to look at when my angular code breaks
* Test the navbar and carousel bootstrap ui elements using ng-bootstrap and Angular2 alone
* Custom Angular2 animations
* Add splits, double downs, and proper blackjack declaration to the blackjack Javascript game
