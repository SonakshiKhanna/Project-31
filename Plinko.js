class Plinko{
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,10,options);
        this.r = 10;
        World.add(world, this.body);
      }
      display(){
        push();
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x, pos.y, this.r,this.r);
        pop();
        // for(var j = 40; j<=width; j=j+50){
        //   	plinkos.push(new Plinko(j,75));
        // }
      }
}