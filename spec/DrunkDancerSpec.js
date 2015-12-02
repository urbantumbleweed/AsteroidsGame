describe('#DrunkDancer()', function(){

  it('should exist as a function', function(){
    expect(DrunkDancer).to.be.a('function');
  });

  it('should be a child class of Dancer', function(){
    var drunkDancer = new DrunkDancer(10, 10, 500);
    expect(drunkDancer.step).to.be.a('function');
    expect(DrunkDancer.prototype === Dancer.prototype).to.be.false;
  });
});