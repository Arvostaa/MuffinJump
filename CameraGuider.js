CameraGuider = {};

CameraGuider = function (game, object) {
    game.camera.follow(object);
    game.background.tilePosition.y = -(game.camera.y * 0, 1);

};