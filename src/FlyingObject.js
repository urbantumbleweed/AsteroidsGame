var FlyingObject = function(x, y, speed){
  
  this.origin = {
    x: x,
    y: y
  };

  this.speed = speed;
  this.$node = $('<span class="flying-object"></span>');

  this.setPosition(x,y);
};


FlyingObject.prototype.fly = function(toObject, flyCompleteCb){
  // calculate distance between origin to toObject
  var distance = Math.sqrt(Math.pow((this.origin.x - toObject.top), 2) + Math.pow((this.origin.y - toObject.left), 2));
  // use default speed or 1 if zero
  var speed = this.speed || 1;
  // calculate the time needed to reach destination
  var time = distance / speed;
  // use jQuery animate, passing in the distance and time
  this.$node.animate({left: toObject.left, top: toObject.top}, time, flyCompleteCb);
};

FlyingObject.prototype.setPosition = function(x, y){
  this.$node.css({left: x, top: y});
};