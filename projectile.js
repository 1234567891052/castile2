class projectile{
  constructor(x, y,width,height) {
    var options = {
      'density':15,
      'friction': 100,
      'restitution':5
    }
    this.body = Bodies.rectangle(x, y,width,height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
   
    fill("black");
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();

    
  }
}
