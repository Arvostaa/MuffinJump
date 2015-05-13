var paused = true;
var panelTextStyle = {
    font: "30px Helvetica",
    fill: "#000"
}

PausePanel = function (game) {
    this.game = game;
    game.panel = game.add.sprite(0, 9300, 'panel');
    pauseText = game.add.text(80, 9300, 'Game paused', panelTextStyle);

    btnPause = game.add.button(10, 9531, 'btnPause', this.pauseGame, this);
    btnPlay = game.add.button(10, 9300, 'btnPlay', this.resumeGame, this);

};

PausePanel.prototype.pauseGame = function () {

    this.game.add.tween(this.game.panel).to({
        y: 9525
    }, 900, Phaser.Easing.Bounce.Out, true);
    this.game.add.tween(pauseText).to({
        y: 9540
    }, 900, Phaser.Easing.Bounce.Out, true);
    this.game.add.tween(btnPlay).to({
        y: 9531
    }, 900, Phaser.Easing.Bounce.Out, true);

};

PausePanel.prototype.resumeGame = function () {

    if (paused)
        paused = false;

    this.game.add.tween(this.game.panel).to({
        y: 9300
    }, 900, Phaser.Easing.Linear.NONE, true);
    this.game.add.tween(pauseText).to({
        y: 9300
    }, 900, Phaser.Easing.Linear.NONE, true);
    this.game.add.tween(btnPlay).to({
        y: 9300
    }, 900, Phaser.Easing.Linear.NONE, true);

}