

function DeckConstructor(){
	function deck(){
		this.head = null
	}
	function card(suit, number){
		this.suit = suit,
		this.number = number,
		this.next = null
	}

	var suits = ['c', 'd', 'h', 's'];
	var numbers = ['1', '2' ,'3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
	var deck = new deck();
	for (var i = 0; i < suits.length; i++){
		for(var j = 0; j < numbers.length; j++){
			if (i==0 && j ==0){
				deck.head = new card(suits[i], numbers[j]);
				c = deck.head
			}
			else{
				c.next = new card(suits[i], numbers[j]);
				c = c.next;
			}
		}
	}
	return deck
}

deck1 = new DeckConstructor();
// console.log(deck1.head);
deck1.printCards = function(){
	c = this.head;
	var count = 0;
	while(c){
		console.log(c.suit, c.number);
		c = c.next;
		count++;
	}
	console.log('There are', count, "cards in the deck")
}
deck1.shuffle = function(){
	rInd1 = Math.floor(2*Math.random());
	rInd2 = rInd1 + Math.ceil(50*Math.random());

	oldHead = this.head;
	c = this.head;
	for(var i = 0; i<rInd1;i++){
		c = c.next
	}
	split1 = c;

	for(var i = rInd1; i<rInd2;i++){
		c = c.next
	}
	split2 = c;
	while(c.next){
		c = c.next;
	}
	c.next = split1.next;
	split1.next = split2.next;
	split2.next = null;
}
deck1.reset = function(){
	var deck = new DeckConstructor();
	return deck
}
for (var x = 0; x<200; x++){
	deck1.shuffle();
}
deck1.printCards();
function PlayerConstructor(name){
	this.name = name;
	this.hand = [];
	this.takeCard = function(card){
		this.hand.push(card)
	}
	this.discardCard = function(card){
		this.hand[]
	}
}

