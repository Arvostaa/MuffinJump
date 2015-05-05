ObjectsFactory = {};
var CameraGuider;

ObjectsFactory = function (game) {
    game.steps = game.add.physicsGroup();
    game.cookies = game.add.physicsGroup();

    this.createSteps(game);
    this.setGravity(game);
    this.createMuffin(game);

    //  return this;
};

ObjectsFactory.prototype.createSteps = function (game) {
    var x = 0;
    var y = 100;

    for (var i = 0; i < 19; i++) {
        var type = i % 2 === 1 ? 'step' : 'ice';
        var step = game.steps.create(x, y, type);

        var cookie1 = game.cookies.create(x + 10, y - 35, 'cookie');
        var cookie2 = game.cookies.create(x + 90, y - 35, 'cookie');

        var rand = Math.random() * (80 - 65) + 65;
        step.body.velocity.x = rand;
        cookie1.body.velocity.x = rand;
        cookie2.body.velocity.x = rand;
        if (Math.random() > 0.5) {
            step.body.velocity.x *= -1;
            cookie1.body.velocity.x *= -1;
            cookie2.body.velocity.x *= -1;
        }
        x += 200;
        if (x >= 600) {
            x = 0;
        }
        y += 100;
    }
};

ObjectsFactory.prototype.createMuffin = function (game) {
    game.muffin = game.add.sprite(20, 1980, 'muffin');
    game.physics.arcade.enable(game.muffin);
    // game.camera.follow(game.muffin);
    game.muffin.body.collideWorldBounds = true;
    game.muffin.body.setSize(70, 58, 0, 0);
    game.muffin.animations.add('left', [0, 1, 2, 3], 10, true);
    game.muffin.animations.add('turn', [4], 20, true);
    game.muffin.animations.add('right', [5, 6, 7, 8], 10, true);

};


ObjectsFactory.prototype.setGravity = function (game) {
    game.steps.setAll('body.allowGravity', false);
    game.steps.setAll('body.immovable', true);

    game.cookies.setAll('body.allowGravity', false);
    game.cookies.setAll('body.immovable', true);
};


ObjectsFactory.prototype.updateObjects = function (game) {
    cameraGuider = new CameraGuider(game, game.muffin);
    game.physics.arcade.collide(game.cookies, game.steps);
    game.physics.arcade.overlap(game.muffin, game.cookies, this.collectCookies, null, game);

    game.steps.forEach(this.wrapObjects, game);
    game.cookies.forEach(this.wrapObjects, game);

    game.physics.arcade.collide(game.muffin, game.steps, this.setFriction, null, game);

};

ObjectsFactory.prototype.wrapObjects = function (object) {
    if (object.x <= -150) {
        object.x = 640;

    } else if (object.x >= 640) {
        object.x = -150;

    }
};

ObjectsFactory.prototype.setFriction = function (muffin, step) {
    if (step.key === 'ice') {
        muffin.body.x -= step.body.x - step.body.prev.x;
    }
};

ObjectsFactory.prototype.collectCookies = function (muffin, cookie) {
    cookie.kill();
    scoreCounter += 10;
    scoreText.text = 'Score: ' + scoreCounter;
};