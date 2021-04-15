class Paper
{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = 
	{
	  'restitution' : 0.1,
	  'friction' : 5,
	  'density': 3

	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

        this.image=loadImage("paper.png");

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
            imageMode(CENTER);
			image(this.image, 0,0,this.r,this.r);
			pop()
	}

}