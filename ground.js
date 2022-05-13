class Ground{
    // Its a method which is called implicityly when an object is created
    // Or When an instance is created from this class , constructor gets executed
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width  = width
        this.height = height
        World.add(world,this.body)
        
    }
    //Its an explicit method of class Ground 
    display(){
        //shortname for my matter body's posiiton
        var pos = this.body.position

        rect(pos.x,pos.y,this.width,this.height)
    }
}



