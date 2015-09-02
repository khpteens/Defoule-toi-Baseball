// Finish.js

var Vent = Vent || {};

//loading the game assets
Vent.Finish = function() {};

Vent.Finish.prototype = {
	create: function() {

		createBG(0x015095);
		createCopyright();

		// start game text
		var text = "Est-ce que\nça va mieux ?";
		var t = this.game.add.text(this.game.width / 2, this.game.height / 2 - 190, text, h2_style);
		t.anchor.set(0.5);

		// bt "Yeah, thanks"
		var YesBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2-70, "square");
		createBt(YesBt, "Ouais, merci", "Success", false, "emoji4");

		// bt "A little, play again"
		var aLittleBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 - 10, "square");
		createBt(aLittleBt, "Un peu ; rejouer", "Pick", false, "emoji1");
		aLittleBt.events.onInputUp.add(function(){
			trackEvent("Play Again clicked", Vent.game.state.getCurrentState().key+" screen");
		}, this);

		// bt "No, I need something else"
		var somethingElseBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 50, "square");
		createBt(somethingElseBt, "Non, j’ai besoin de\nquelque chose d’autre", false, false, "emoji3");
		somethingElseBt.events.onInputUp.add(function() {
			goToHomepage();
		}, this);

		// bt "I'd like to chat with a counsellor"
		var contactBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 170, "square");
		createBt(contactBt, "Clavarder avec\nun intervenant", "Contact", false, "emoji2");	
		contactBt.events.onInputUp.add(function(){
			trackEvent("Chat with a Counsellor clicked", Vent.game.state.getCurrentState().key+" screen");
		}, this);	

	},
	update: function() {}
};

function goToHomepage() {
	var r = confirm("Êtes-vous sûr de vouloir quitter cette page ?");
	if (r === true) {
		openInNewTab(home_url);
	} else {
		// do nothing if cancel is pressed
	}
}