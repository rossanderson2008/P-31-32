class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
       this.Visiblity=255;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      if(this.body.speed<3){
       translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height); 
      }else{
         World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 10;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
      }
      pop();
    }
    increase(){
      if (this.Visiblity < 0 && this.Visiblity > -1100){
        score++;
      }
    }
    
  };

 