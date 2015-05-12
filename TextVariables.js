TextVariables = {};

TextVariables = function (game) {
    /*
      muffinPos = game.add.text(16, 1550, 'muffinPos: ', {
          fontSize: '15 px',
          fill: '#FFF'
      });*/

    scoreText = game.add.text(16, 1500, 'Score: 0', {
        fontSize: '25 px',
        fill: '#000'
    });
};

TextVariables.prototype.updateText = function (game) {

    var camPos = game.camera.y;

    //  muffinPos.text = "MUFFINposX:" + game.muffin.body.x + ", posY: " + game.muffin.body.y;
    //  muffinPos.y = camPos + 20;

    scoreText.y = camPos + 30;
};