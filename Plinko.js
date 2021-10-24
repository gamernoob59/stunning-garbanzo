class Plinko{
    constructor(x, y){
        var options = {
            restitution: 1,
            isStatic: true,
            friction: 0,
        }
        this.radius=10;
        this.body = Bodies.circle(x, y, this.radius, options)
        this.x = x
        this.y = y
        World.add(world, this.body)
    }

    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, this.radius,this.radius);
    }

};