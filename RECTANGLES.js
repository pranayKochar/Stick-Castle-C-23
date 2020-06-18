class RECTANGLES{

    constructor(x,y,width,height){

        var rectangle_options={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,rectangle_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    
    }

        
    
    display(){

        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }
}
