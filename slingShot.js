class SlingShot{
    constructor(x,y){
    
    var options={
    bodyA:x,
    pointB:y,
    
    
    stiffness:0.04,
    lenght:10

    
    
    }
    this.pointB=y;
    
    this.slingShot=Constraint.create(options);
    World.add(world,this.slingShot);

    }


    
    fly()
    {
        this.slingShot.bodyA=null;
    
    }
    display(){
        if(this.slingShot.bodyA){
            var pointA = this.slingShot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
        
    }
  



