class Roof{
    constructor(){
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.rectangle(width/2,50,width - 100, 50,options);
        this.width = width - 100;
        this.height = 50;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("grey")
        rect(pos.x,pos.y,this.width,this.height)

    }
}