// function to provide information with button 

function animation(button){



  var Img = document.getElementById("canvas") 
  if(button.value=="sh"){
    anim();
    button.value = "ns"

  }else{
    

    fun();
    button.value = "sh"
  }


  

  
  

  }


  

// initialize variables to display

var cnv,ctx,pos_x = 100, pos_y = 650, hg=650,img;

var cloud1x=10 ,cloud1y=10,cloud1;

var cloud2x=10 ,cloud2y=680,cloud2;

var cloud3x=-100,cloud3y=-100,cloud3;

var cloud4x=0,cloud4y=300,cloud4;




function fun(){
  return inverse();
}

function inverse() {
  pos_y=650;
  pos_x=200;
  hg =450;

}

// function to animation

function anim(){

  ctx.clearRect(0,0,1000,1080);


  ctx.drawImage(img,pos_x,pos_y,hg,500);


  pos_y -=30;
  hg +=15;


 
 



  ctx.drawImage(cloud1,cloud1y,cloud1x,400,400);
  cloud1y +=45;
  cloud1x  +=10;


  
  ctx.drawImage(cloud2,cloud2y,cloud2x,400,400);
  cloud2y -=35;
  cloud2x  +=20;



  ctx.drawImage(cloud3,cloud3y,cloud3x,250,250);
  cloud3y +=30;
  cloud3x  +=10;


  ctx.drawImage(cloud4,cloud4y,cloud4x,300,300);
 
  cloud4x  +=45;





  setTimeout(anim,30);


}



// function to call ever image use in the website

window.onload = function(){

  img=new Image();
  img.src="images/plane.png";

  cloud1=new Image();
  cloud1.src="images/cloud1.png";

  cloud2=new Image();
  cloud2.src="images/cloud2.png";

  cloud3=new Image();
  cloud3.src="images/cloud3.png";

  cloud4=new Image();
  cloud4.src="images/cloud4.png";



  

  
  
  cnv=document.getElementById("canvas");
  ctx= cnv.getContext("2d");


}








