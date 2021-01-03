class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0,
            'density':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
  };
  