class String{
    constructor(bodyA,pointB){
      
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            length : 10
        }
        this.string = Matter.Constraint.create(options);
        this.pointB = pointB
        World.add(world,this.string);
    }
    display(){
        var A = this.string.bodyA.position;
        var B = this.pointB;
        strokeWeight(10);
        stroke("yellow")
        line(A.x,A.y,B.x,B.y);
        
    }
}