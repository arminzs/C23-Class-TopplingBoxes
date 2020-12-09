class Box
{
    constructor(x, y, width, height)
    {

        var boxOptions={
            restitution:0.7,
            density:1,
            friction:0.5
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,boxOptions);
        World.add(myWorld, this.body);
    }

    display()
    {
        var angle=this.body.angle;
        angleMode(RADIANS);
        
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER);
        stroke("blue");
        strokeWeight(4);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
