var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'theGame', { preload: preload, create: create, update: update });

var luna;
var zombies;
var chair;
var table;

function preload() {

  game.load.image('background', 'assets/background.png');
  game.load.image('luna', 'assets/luna.png');
  game.load.image('chair', 'assets/chair.png');
  game.load.image('table', 'assets/table.png');

  cursors = game.input.keyboard.createCursorKeys();

}

function create() {

  cursors = game.input.keyboard.createCursorKeys();

  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.sprite(0, 0, 'background');

  luna.body.collideWorldBounds = true;
  luna.animations.add('up',)
  luna.animations.add('down',)
  luna.animations.add('left',)
  luna.animations.add('right',)
  


}

function update() {
}
