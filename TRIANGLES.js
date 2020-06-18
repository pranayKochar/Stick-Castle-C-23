class TRIANGLES{

    constructor(x,y,sides,radius){

        var triangle_options={
            isStatic:true
        }

        this.body=Bodies.polygon(x,y,sides,radius,triangle_options);

        World.add(world,this.body);
    
    }

        
    
    display(){

        var pos=this.body.position;
        rectMode(CENTER);
        triangle(pos.x,pos.y,pos.x-50,pos.y+100,pos.x+50,pos.y+100);


    }
}
