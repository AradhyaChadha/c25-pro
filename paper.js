class Paper{
    constructor(x,y,radius){
        var options={
            isstatic=false,
            restituion=0.2,
            friction=0.3,
            density=1.0
        }
      
        this.body = Bodies.circle(250,540,20,options);
        this.width = 33;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        fill ("white");
       imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
    }
}
