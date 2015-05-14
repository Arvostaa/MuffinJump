PauseManager = function (game) {
    this.game = game;
    this.pausePanel = new PausePanel(game);
    this.steps = game.steps;

};

PauseManager.prototype.managePause = function () {
    if (this.pausePanel.paused) {
        this.game.muffin.body.enable = false;

        for (var k = 0; k < this.game.cookies.length; k++) {
            this.game.cookies.getAt(k).body.velocity.x = 0;
        }

        for (var k = 0; k < this.game.steps.length; k++) {
            this.game.steps.getAt(k).body.velocity.x = 0;
        }

    } else if (!this.pausePanel.paused) {
        this.game.muffin.body.enable = true;

        for (var k = 0; k < this.game.cookies.length; k++) {
            this.game.cookies.getAt(k).body.velocity.x = this.game.cookies.getAt(k).velocSavedX;
        }

        for (var k = 0; k < this.game.steps.length; k++) {
            this.steps.getAt(k).body.velocity.x = this.steps.getAt(k).velocSavedX;
        }

    }
};