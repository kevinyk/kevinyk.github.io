function DeckConstructor(){
	var suits = ['c', 'd', 'h', 's'];
	var numbers = ['1', '2' ,'3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
	this.deck = [];
	for (var i = 0; i < suits.length; i++){
		for(var j = 0; j < numbers.length; j++){
			this.deck.push(suits[i]+numbers[j]);
		}
	}
}
DeckConstructor.prototype.shuffle = function(){
	for(var i = this.deck.length; i >0; i--){
		var c = this.deck[Math.floor(i*Math.random())]
		var temp = this.deck[i-1];
		this.deck[this.deck.indexOf(c)]=temp;
		this.deck[i-1] = c;
	}
}
DeckConstructor.prototype.reset = function(){
	var suits = ['c', 'd', 'h', 's'];
	var numbers = ['1', '2' ,'3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
	this.deck = [];
	for (var i = 0; i < suits.length; i++){
		for(var j = 0; j < numbers.length; j++){
			this.deck.push(suits[i]+numbers[j]);
		}
	}
	return this;
}
DeckConstructor.prototype.deal = function(){
	card = this.deck[this.deck.length-1];
	this.deck.pop();
	return card;
}
function PlayerConstructor(name){
	this.name = name;
	this.hand = [];
	this.getCard = function(card){
		this.hand.push(card);
		return this
	};
	this.discard = function(card){
		this.hand.splice(this.hand.indexOf(card),1);
		return this
	};
	this.value = function(){
		var value = 0;
		var aceCount = 0;
		for(var i=0;i<this.hand.length; i++){
			if(this.hand[i][1] == 'j'||this.hand[i][1] == 'q'||this.hand[i][1] == 'k'){
				value+=10;
			}
			else if (this.hand[i][1] == '1' && this.hand[i].length==2){
				value +=10;
				aceCount++;
			}
			else if (this.hand[i].length == 3){
				value += 10;
			}
			else{
				value += parseInt(this.hand[i][1]);
			}
			if(aceCount>0&&value>21){
				value-=10;
				aceCount--;
			}
		}
		return value;
	}
}