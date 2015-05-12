KeyGuider = {};

KeyGuider = function (game) {
    game.cursors = game.input.keyboard.createCursorKeys();
    // pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.P);
    // pauseKey.onDown.add(this.pauseGame(game));
};

//KeyGuider.prototype.pauseGame = function (game) {
//console.log("nosiema");
//  game.paused = true;

//};


KeyGuider.prototype.updateKeys = function (game) {
    var standing = game.muffin.body.blocked.down || game.muffin.body.touching.down;
    game.muffin.body.velocity.x = 0;
    // if (pauseKey.onDown) {
    //     this.pauseGame(game);
    // }



    if (game.cursors.left.isDown) {
        game.muffin.body.velocity.x = -200;
        if (game.facing !== 'left') {
            game.muffin.play('left');
            game.facing = 'left';
        }
    } else if (game.cursors.right.isDown) {
        game.muffin.body.velocity.x = 200;
        if (game.facing !== 'right') {
            game.muffin.play('right');
            game.facing = 'right';
        }
    } else {
        if (game.facing !== 'idle') {
            game.muffin.animations.stop();
            if (game.facing === 'left') {
                game.muffin.frame = 0;
            } else {
                game.muffin.frame = 5;
            }
            game.facing = 'idle';
        }
    }
    if (!standing && game.wasStanding) {
        game.edgeTimer = game.time.time + 250;
    }
    if ((standing || game.time.time <= game.edgeTimer) && game.cursors.up.isDown && game.time.time > game.jumpTimer) {
        game.muffin.body.velocity.y = -500;
        game.jumpTimer = game.time.time + 750;
    }
    game.wasStanding = standing;

};