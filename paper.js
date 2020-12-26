class Paper {
    constructor(x,y,radius,angle){
        var options={

'restitution':0.3,
'friction':0.5,
'density':1.2
        }
 this.body= Bodies.circle(x,y,radius,options)
 this.radius=70

      
        World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos=this.body.position

      push()
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER)
     ellipse(pos.x,pos.y,this.radius,this.radius)
     pop()
    }
}