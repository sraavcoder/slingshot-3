class Circle{
    constructor(x, y) {
        var options = {
            'restitution':0.08,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,25,options);

        Matter.Body.setMass(this.body,this.body.mass * 4);
        
      
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
    
        ellipseMode(CENTER);
        
        ellipse(pos.x,pos.y,50,50);
      
      }
}