PausePanel = {};
PausePanel = function (game) {
   // var btnPlay = game.add.button(20, 20, 'btnPlay', this.addPlayButton, this, 2, 1, 0);
    //this.add(this.btnPlay);

    // Place it out of bounds
    // btnPlay.x = 0;
    //btnPlay.y = 20;
};


PausePanel.prototype.addPlayButton = function () {
    //  game.state.getCurrentState().playGame()
}

PausePanel.prototype.buttonClicked = function () {
    //  this.factory.setNotification(this.id, false);
    //    this.button.callback.call(this.button.callbackContext);
    // this.button.callback.apply(this.button.callbackContext, this.button.args);
};









PausePanel.prototype = Object.create(Phaser.Group.prototype);
PausePanel.constructor = PausePanel;

PausePanel.prototype.show = function () {
    this.game.add.tween(this).to({
        y: 0
    }, 500, Phaser.Easing.Bounce.Out, true);
};
PausePanel.prototype.hide = function () {
    this.game.add.tween(this).to({
        y: -100
    }, 200, Phaser.Easing.Linear.NONE, true);
};