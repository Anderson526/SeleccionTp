function ret(button){



    var ret2 = document.getElementById("canvas2") 
  
    animate2();
    
    
    }




    var cnv2,ctx2,post_x = 100, post_y = 0, hg2=650,plane2;




        function animate2(){


            ctx2.clearRect(0,0,1000,1080);


            ctx2.drawImage(plane2,post_x,post_y,hg2,500);
            post_y +=30;
            hg2 +=15;



            setTimeout(animate2,30);

        }
  


        window.onload = function load (){


     plane2=new Image();
         plane2.src="images/plane.png";

            
      cnv2=document.getElementById("canvas2");
         ctx2= cnv2.getContext("2d");


}
