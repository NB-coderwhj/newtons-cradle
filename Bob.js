class Bob{
    constructor(x,y){
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.circle(x,y,50,options);
        this.diameter = 50;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position
        ellipseMode(RADIUS);
        fill(255)
        ellipse(pos.x,pos.y,this.diameter)

    }
}