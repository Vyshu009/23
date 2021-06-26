class Log{
    constructor(speed){
        this.x = random([100,300,500,700,900]);
        this.y = height-random([550,650,750,1350,1450,1550]);
        this.width = 1500;
        this.height = 800;
        this.speed = speed;
        this.spt = createSprite(this.x,this.y,this.width,this.height);
        this.spt.velocityX = this.speed;
        this.spt.shapeColor = "brown";
        this.spt.addAnimation("log",logAnimation);
        this.spt.scale=0.1;

          
 if(logGroup1.isTouching(player.spt)){  
    player.spt.x= player.spt.x-3;
  }
  else if((player.spt.y > height-1550 && player.spt.y < height-1300) ||
  (player.spt.y < height-500 && player.spt.y > height-850)|| 
  (player.spt.y>height)||
  (player.spt.x<0)||
 (player.spt.x>width)){
 player.spt.x = width/2;
 player.spt.y = height-75;
  }
    }

   
}