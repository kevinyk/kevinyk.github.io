// The Blackjack component is a JavaScript game. Upon loading the template, it invokes the ngOnInit function to start the game loop.
(function(app) {
	app.BlackJackComponent =
	ng.core.Component({
		templateUrl: 'partials/blackjack.html',
		styleUrls: ['assets/blackjack/blackjack.css']
	})
	.Class({
		constructor: function() {},
		ngOnInit: function(){
			this.buttonStatus = true;
			// The core game logic
			var dealer = new PlayerConstructor("Dealer");
			// var name = prompt("Hello, enter your name!");
			var player = new PlayerConstructor("Kevin");
			console.log(player);
			var deck = new DeckConstructor();
			deck.shuffle();
			dealer.getCard(deck.deal());
			player.getCard(deck.deal());
			dealer.getCard(deck.deal());
			player.getCard(deck.deal());
			function displayTable(){
				var dealerOutput = "<div class = 'card' id = 'back'>&nbsp;</div>";
				for(var i=1; i<dealer.hand.length;i++){
					dealerOutput += "<div class = 'card' id = '"+dealer.hand[i]+"'>&nbsp;</div>"
				}
				var playerOutput = "";
				for(var i=0; i<player.hand.length;i++){
					playerOutput += "<div class = 'card' id = '"+player.hand[i]+"'>&nbsp;</div>"
				}
				document.getElementById("dealer").innerHTML = dealerOutput;
				document.getElementById("player").innerHTML = playerOutput;
				if(player.value()==21){
					document.getElementById('options').innerHTML = "Blackjack!"
				}
				else if(dealer.value()==21){
					document.getElementById('options').innerHTML = "Dealer blackjack!"
				}
			}
			function showAllCards(){
				var dealerOutput = "";
				for(var i=0; i<dealer.hand.length;i++){
					dealerOutput += "<div class = 'card' id = '"+dealer.hand[i]+"'>&nbsp;</div>"
				}
				var playerOutput = "";
				for(var i=0; i<player.hand.length;i++){
					playerOutput += "<div class = 'card' id = '"+player.hand[i]+"'>&nbsp;</div>"
				}
				document.getElementById("dealer").innerHTML = dealerOutput;
				document.getElementById("player").innerHTML = playerOutput;
				if(player.value()==21){
					document.getElementById('options').innerHTML = "Blackjack!"
				}
				else if(dealer.value()==21){
					document.getElementById('options').innerHTML = "Dealer blackjack!"
				}
			}
			displayTable();
			function hit(){
				player.getCard(deck.deal());
				displayTable();
				if(player.value()>21){
					document.getElementById('options').innerHTML = "You bust!!!!!!"
				}else if (player.value()==21){
					document.getElementById('options').innerHTML = "Blackjack!"
				}
			}
			document.getElementById('hit').addEventListener("click", hit);
			function stay(){
				showAllCards();
				document.getElementById('hit').innerHTML = "";
				while(dealer.value()<=17){
					dealer.getCard(deck.deal());
					showAllCards();
				}
				if(dealer.value()>21){
					document.getElementById('options').innerHTML = "Dealer busts!"
				}
				else if (dealer.value()>player.value()){
					document.getElementById('options').innerHTML = "Dealer wins!"
				}
				else if(dealer.value()>player.value()){
					document.getElementById('options').innerHTML = "Push Push"
				}
				else{
					document.getElementById('options').innerHTML = "You are winrar!"
				}
			}
			document.getElementById('stay').addEventListener("click", stay);
			document.getElementById('restart').addEventListener("click", function(){
				dealer.hand = [];
				player.hand = [];
				deck.shuffle();
				dealer.getCard(deck.deal());
				player.getCard(deck.deal());
				dealer.getCard(deck.deal());
				player.getCard(deck.deal());
				displayTable();
				document.getElementById('options').innerHTML = "<button id = 'hit'>HIT ME</button><button id = 'stay'>NO THANKS</button>"
				document.getElementById('stay').addEventListener("click", stay);
				document.getElementById('hit').addEventListener("click", hit);
			})
		}
	});
    
})(window.app || (window.app = {}));