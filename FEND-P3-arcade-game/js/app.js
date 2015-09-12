// Enemy stuff ..
var Enemy = function() {
  this.minX = -102;  // Enemy start position
  this.maxX = 607;  // Enemy end position
  this.enemyPaths = [60, 140, 220, 300];  // Enemy path(s) options
  this.minSpeed = 250;
  this.maxSpeed = 2000;
  this.sprite = 'images/enemy-bug.png';  // Load enemy sprite image(s)
  this.reset();
};

// Spawn enemy to initial position with random path(s) and speeds
Enemy.prototype.reset = function() {
  var spawn = this.minX;

  this.x = spawn;
  this.y = this.getRandomY();
  this.speed = this.getRandomSpeed();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {  // Move enemy with respect to time delta to ensure constant speed across all devices
  var rightEdge = this.maxX;
  this.x += this.speed * dt;

  if (this.x > rightEdge) {  // Check and/or reset enemy to start from end position
    this.reset();
  }
};

// Draw enemy on canvas
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Compute random enemy path(s)
Enemy.prototype.getRandomY = function() {
  return this.enemyPaths[Math.floor(this.enemyPaths.length * Math.random())];
};

// Compute random enemy speed(s)
Enemy.prototype.getRandomSpeed = function() {
  return Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed;
};

// Player stuff ..
var Player = function() {
  this.minX = -2;  // Player left boundary
  this.maxX = 402;  // Player right boundary
  this.minY = -20;  // Player top boundary
  this.maxY = 380;  // Player bottom boundary
  this.sprite = 'images/char-boy.png';
  this.newGame();  // Reset player stats for new game
  this.reset();
};

// Update player stuff
Player.prototype.update = function() {
  this.checkCollisions();
  var htmlLives = this.lives;
  var htmlScore = this.score;
  // Determine, increment and/or update player stats
  document.getElementById('left').innerHTML = "Lives : " + htmlLives;//
  document.getElementById('right').innerHTML = "Score : " + htmlScore;//
  if (this.y === -20) {
    this.score ++;
    this.reset();
  }
};

// Determine if player: ..
Player.prototype.checkCollisions = function() {
  if (this.y >= 60 && this.y <= 300) {  // .. is on stone blocks
    var self = this;
    allEnemies.forEach(function(enemy) {
      if (enemy.y == self.y) {  // .. is on same column as an enemy
        if (enemy.x >= player.x - 30 && enemy.x <= player.x + 30) { // .. is also on the same row as an enemy
          self.lives --;  // .. then decrease number of lives
          self.reset();
      }
    }
  });
  }
};

// Reset to player start position
Player.prototype.reset = function() {
  this.x = 200;
  this.y = 380;
  // Determine if lose
  if (this.lives < 1) {
    alert("you lose");
    this.newGame();
  }
  // Determine if win
  if (this.score == 5) {
    alert("you win");
    this.newGame();
  }
};

// Reset stats for new game
Player.prototype.newGame = function() {
  this.lives = 3;
  this.score = 0;
};

// Draw player on canvas
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Translate input to move player
Player.prototype.handleInput = function(key) {
  if (key === 'left') {
    if (this.x - 101 < this.minX) {
      this.x -= 0;
    } else {
      this.x -= 101;
    }
  } else if (key === 'right') {
    if (this.x + 101 > this.maxX) {
      this.x += 0;
    } else {
      this.x += 101;
    }
  } else if (key === 'up') {
    if (this.y - 80 < this.minY) {
      this.y -= 0;
    } else {
      this.y -= 80;
    }
  } else if (key === 'down') {
    if (this.y + 80 > this.maxY) {
      this.y += 0;
    } else {
      this.y += 80;
    }
  }
};

// Instantiate enemy objects
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3];
// Instantite player object
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
