var SpaceShip = function(x, y, speed){
  FlyingObject.call(this);
  this.origin = {
    x: $('body').width() * 0.5,
    y: $('body').height() * 0.85
  };
  this.$node.addClass('space-ship');
  this.moveDistance = 5;
  this.speed = speed;
  this.setPosition(this.origin.x, this.origin.y);
  $(".space-ship").keydown(this.control);
};

SpaceShip.prototype = Object.create(FlyingObject.prototype);
SpaceShip.prototype.constructor = SpaceShip;

SpaceShip.prototype.fly = function(toObj, completeCb){
  FlyingObject.prototype.fly.call(this, toObj, function(){
    this.origin.x = toObj.left;
    this.origin.y = toObj.top;
  });
};

SpaceShip.prototype.control = function(event){
  // up 38
  // down 40
  // right 39
  // left 37
  // space 32
  var focalObj = this;
  var keys = {
    38: focalObj.up
    40: focalObj.down,
    37: focalObj.left,
    39: focalObj.right,
    32: focalObj.space
  };
  keys[event.which]();
};

SpaceShip.prototype.up = function(){
  toObj = {top: this.origin.y - this.moveDistance , left: this.origin.x }
  this.fly(toObj)
};