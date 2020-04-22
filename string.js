class Spring{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.1,
            length: 20
        }
        this.slingR = loadImage('sling1.png');
        this.slingL = loadImage('sling2.png');
        this.pointB = pointB;
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    attach(body){
        this.string.bodyA = body;
        
    }
    
    fly(){
    setTimeout(() => {
      this.string.bodyA = null;    
    },100);
   }

    display(){
        image(this.slingR,190,280);
        image(this.slingL,160,280);
     if(this.string.bodyA){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.pointB;
        push();
            
        stroke(48,22,8);
        if(pointA.x < 220) {
            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            
        }
        else{
            strokeWeight(7);
            line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            
        }
       
        
        pop();
    
    }
    }
    
}