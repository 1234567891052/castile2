class catapault {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:1,
            length: 50
        }
        this.bodyA= bodyA,
        this.pointB = pointB
        this.catapault = Constraint.create(options);
        World.add(world, this.catapault);
    }
    attach(body){
        this.catapault.bodyA = body;
    }
    fly(){
        this.catapault.bodyA = null;
    }

    display(){
       
        if(this.catapault.bodyA){
            var pointA = this.catapault.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("brown");
            if(pointA.x < 220) {
                strokeWeight(5);
                line(pointA.x - 10, pointA.y, pointB.x -5, pointB.y);
                line(pointA.x - 10, pointA.y, pointB.x + 20, pointB.y - 3);
                
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                
            }
           
            
            pop();
        }
    }
    
}