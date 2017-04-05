//maze object
  //size can be an arbitrary number
  //spaces(x , y)

  //Methods
    //move forward 
    //turn right
    //turn left
    //orientation method
    //is there a wall(which direction)
    //add wall method
    //ending coordinates

//robot object

'use strict';

const MazeSpace = function(directions) {
  directions.forEach(dir => {
    this[dir] = false;
  })
}

MazeSpace.prototype.setWall = function(direction) {
  this[direction] = true;
}

const Maze = function(height, width){
  this.height = height;
  this.width  = width;
  this.startX = null;
  this.startY = null;
  this.endX   = null;
  this.endY   = null;
  this.board = [];
  this.validDirections  = ["north", "east", "south", "west"];
  this.startOrientation = null;

  for(var i = 0; i < this.height; i++) {
    var row = [];
    for(var j = 0; j < this.width; j++) {
      row.push(new MazeSpace(this.validDirections));
    }
    this.board.push(row);
  }
};

Maze.prototype.setStart = function(x, y, orientation) {
  if(this.isInBounds(x, y) && this.isValidDirection(orientation)){
    this.startX = x;
    this.startY = y;
    this.startOrientation = orientation;
  }
}

Maze.prototype.setEnd = function(x, y) {
  if(!this.isInBounds(x, y) || !this.isValidDirection(orientation)) {
    return false;
  }

  this.endX = x;
  this.endY = y;
  return true;
}

Maze.prototype.setWall = function(x, y, direction) {
  if (this.isInBounds(x, y) && this.isValidDirection(direction)) {
        this.board[x][y].setWall(direction);
        return true;
  }
  return false;
}

Maze.prototype.isValidDirection = function(direction) {
  return this.validDirections.indexOf(direction) !== -1;
}

Maze.prototype.isInBounds = function(x, y) {
  return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
}
Maze.prototype.canMove = function(x, y, direction) {
  if(!this.isValidDirection(direction)){
    return false;
  }

  if(!this.isInBounds(x, y)) {
    return false;
  }

  var forwardX, forwardY;
  switch(direction) {
    case "north":
      forwardX = x;
      forwardY = y + 1;
      break;
    case "east":
      forwardX = x + 1;
      forwardY = y;
      break;
    case "south":
      forwardX = x;
      forwardY = y - 1;
      break;
    case "west":
      forwardX = x - 1;
      forwardY = y;
      break;
  }

  if(!this.isInBounds(forwardX, forwardY)){
    return false;
  }

  if(this.spaces[x][y][direction]) {
    return false;
  }

  var opposites ={
    north: 'south',
    east: 'west',
    south: 'north',
    west: 'east'
  }

  if(this.spaces[forwardX][forwardY][opposites[direction]]) {
    return false;
  }
}


const Robot = function() {
  this.x = null;
  this.y = null;
  this.orientation = null;
  this.maze = null;
}

Robot.prototype.setMaze = function(first_argument) {
  this.maze = maze;
  this.x = maze.startX;
  this.y = maze.startY;
  this.orientation = maze.startOrientation;
}

Robot.prototype.turnRight = function(direction) {
  if(!this.maze || !this.maze.IsValidDirection(direction)) {
    return false;
  }
  var rights = {
    north: 'east',
    east: 'south',
    south: 'west',
    west: 'north'
  }
  this.orientation = rights[this.orientation];
  return true;
}

Robot.prototype.turnLeft = function(direction) {
  if(!this.maze || !this.maze.IsValidDirection(direction)) {
    return false;
  }

  var lefts = {
    north: 'west',
    east: 'north',
    south: 'east',
    west: 'south'
  }

  this.orientation = lefts[this.orientation];
  return true;
}


Robot.prototype.moveForward = function() {
  if(!this.canMoveForward()) {
    return false;
  }
  switch(this.orientation) {
    case "north":
      this.y += 1;
      break;
    case "east":
      this.x += 1;
      break;
    case "south":
      this.y -= 1;
      break;
    case "west":
      this.x -= 1;
      break;
  }
  return true;
}

Robot.prototype.canMoveForward = function() {
  if(!this.maze) {
    return false;
  }
  return this.maze.canMove(this.x, this.y, this.orientation);
}

Robot.prototype.exitMaze = function(steps) {
  if(this.maze) {
    while(steps !== 0) {
      steps -= 1;

      if(this.canMoveForward()) {
        this.moveForward();
        this.turnLeft();
      } else {
        this.turnRight();
      }

      if(this.x === this.maze.endX && this.y === this.maze.endY) {
        return true;
      }
    }
    return false;
  }
}
