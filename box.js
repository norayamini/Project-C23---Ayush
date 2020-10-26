class Box {
    constructor(x,y,width,height,density){
        //Define all the properties here

        var body_options = {
            restitution : 0.8,
            isStatic:true
        }

        this.body = Bodies.rectangle (x,y,width,height+39, body_options);
        
        this.width = width;
        this.height = height;
        this.density = density;
      

        World.add(myWorld, this.body);
    }

    //Define all the functions here
    display(){
      
        rectMode(CENTER);
        fill("red");
        rect (this.body.position.x, this.body.position.y, this.width, this.height);
      
    }
}