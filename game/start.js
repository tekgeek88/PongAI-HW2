var canvas = document.getElementById("game");
    game = new Game(canvas);


game.entities = [
    game.player = new Player(game)
];


// Start the game loop
game.start();
canvas.focus();
