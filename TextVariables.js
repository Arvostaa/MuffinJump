TextVariables = {};

var scoreTextStyle = {
    font: "20px Helvetica",
    fill: "#000"
}

TextVariables = function (game) {

    scoreText = game.add.text(20, 1500, 'Score: 0', scoreTextStyle);
};

TextVariables.prototype.updateText = function (game) {

    var camPos = game.camera.y;
    scoreText.y = camPos + 30;
};