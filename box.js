class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          
          'density':1.0
      }
      this.body = Matter.Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      
    }
    display(){
     
      if(this.body.speed < 6){
      var pos =this.body.position;
      const angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke(0);
      rect(0, 0, this.width, this.height);
      pop();
      
      }
      else{
        
       this.body.position.y = 600;
       score = score + 0.1;
       }
   
       }
  };