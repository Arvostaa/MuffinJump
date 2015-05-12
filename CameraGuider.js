CameraGuider = {};
var cameraCounter = 0.003;
CameraGuider = function (game, object) {
    if (game.muffin.position.y < 9800) game.camera.y -= 0.000000001;
    //  game.muffin.body.velocity.x = 250;
    //  game.background.tilePosition.y = -(game.camera.y * 0, 1);

};