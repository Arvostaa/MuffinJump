//PauseManager = {};
var pause = true;
var panelTextStyle = {
        font: "30px Helvetica",
        fill: "#000"
    }
    // Create our pause panel extending Phaser.Group
PauseManager = function (game) {
    // Super call to Phaser.Group
    // Phaser.Group.call(this, game, parent);

    // Add the panel
    game.panel = game.add.sprite(0, 9550, 'panel');
    //game.panel.visible = false;

    pauseText = game.add.text(80, 9300, 'Game paused', panelTextStyle);
    btnPlay = game.add.button(10, 9550, 'btnPlay', (function () {
        game.add.tween(game.panel).to({
            y: 9300
        }, 900, Phaser.Easing.Linear.NONE, true);
        game.add.tween(btnPlay).to({
            y: 9300
        }, 900, Phaser.Easing.Linear.NONE, true);

    }), game);
};



/*
btnPause = game.add.button(10, 9531, 'btnPause', (function () {
    game.add.tween(game.panel).to({
        y: 9525
    }, 900, Phaser.Easing.Bounce.Out, true);
    game.add.tween(pauseText).to({
        y: 9540
    }, 900, Phaser.Easing.Bounce.Out, true);


}), game);*/
/*

    btnPause = game.add.button(10, 9531, 'btnPause', this.pauseGame, game);



};

PauseManager.prototype.pauseGame = function (game) {
        if (!paused) {
            // Show panel
            paused = true;
            this.pausePanel.show();
        }

        PauseManager.prototype.cl = function () {

            console.log("overoverover");
        }


        PauseManager.prototype.show = function (object) {
            game.add.tween(object).to({
                y: 9525
            }, 900, Phaser.Easing.Bounce.Out, true);
        };
        PauseManager.prototype.hide = function (object) {
            game.add.tween(object).to({
                y: 9300
            }, 900, Phaser.Easing.Linear.NONE, true);

        };*/