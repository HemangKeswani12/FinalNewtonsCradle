class Bob{
    constructor(x, y, r) {
        var options={
            'restitution': 1.0,
            'density': 1.2,
            'friction':0.5,
            'isStatic': false
        }
        this.x = x;
        this.y = y;
        this.r = 70;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
	    World.add(world, this.body);
    }
    display(){
        var bobpos = this.body.position;
        push();
        translate(bobpos.x,bobpos.y);
        ellipseMode(CENTER);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r)
        pop();
    }
}