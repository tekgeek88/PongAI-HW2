var canvas = document.getElementById("game");
    game = new Game(canvas);


game.entities = [
    game.player = new Player(game),
    game.bot = new Bot(game) 
];


// Start the game loop
game.start();
canvas.focus();
