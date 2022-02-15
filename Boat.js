class Boat{
    constructor(x,y,width,height,boatPos){

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

        this.boatPosition = boatPos;

        this.image = loadImage("boat.png");

        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);

        World.add(world,this.body);
    }

    display(){

        var pos = this.body.positon;

        push();

        translate(this.x,this.y);

        imageMode(CENTER);
        image(this.image,0,this.boatPosition,this.width,this.height);

        pop();
    }
}