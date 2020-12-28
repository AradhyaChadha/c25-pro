class Dustbin{
    constructor(x,y,width,height){
        var options = {
            "istatic" : true
        }
        this.bodyb = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.bodyb);
        this.body1 = Bodies.rectangle((x-(width/2)) , (y-(height*2)) );
        World.add(world,this.body1);
        this.bodyr = Bodies.rectangle((x+(width/2)) , (y-(height*2)));
        World.add(world,this.bodyr);
        this.bodyb.width=width;
        this.bodyb.height=height;

    
    }

    display(){
        fill ("white");
        rect(this.bodyb.position.x,this.bodyb.position.y,this.bodyb.width,this.bodyb.height);
        rect((this.bodyb.position.x-(this.bodyb.width/2)),this.bodyb.position.y-(this.bodyb.height/2));
        rect((this.bodyb.position.x+(this.bodyb.width/2)),this.bodyb.position.y+(this.bodyb.height/2));
    }
}

