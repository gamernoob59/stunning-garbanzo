class Particle{
    constructor(x, y, width, height){
        var options = {
            
        }
        this.radius=2;
        this.body = Bodies.circle(x, y, this.radius, options)
        this.color = (random(0,255), random(0,255), random(0,255));
        this.x = x
        this.y = y
        World.add(world, this.body)
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius,this.radius);
    }

};