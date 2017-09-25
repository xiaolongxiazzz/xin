    var box = document.getElementById("box");
    var screen = box.children[0];    
    var ul = screen.children[0];

    var ol = screen.children[1];
    var ulLis = ul.children;    
    var timer = null;
    
    var pic = 0;
    var square = 0; 
     function animate(obj,target){
       clearInterval(obj.timer);
       obj.timer=setInterval(function(){
        var step=10 ;
        var step=obj.offsetLeft<target?step:-step;
       if(Math.abs(obj.offsetLeft-target)>Math.abs(step)){
          obj.style.left=obj.offsetLeft+step+"px";
        }else{
          obj.style.left=target+"px";
           clearInterval(obj.timer);
        }
       },10)
     }  
     function playNext(){
        if(pic == ulLis.length-1){        
          ul.style.left=0;
          pic=0
        }       
        pic++;         
        var target= -pic*1349;
        animate(ul,target);
        if (square < olLis.length - 1) {
              square++;
          } else {
              square = 0;
          }
        for(var i=0;i<olLis.length;i++){
          olLis[i].className="";        
        }
        olLis[square].className = "color1";          
       }
         //初始动态添加ol中的li并设置第一个样式
      for (var i = 0; i < ulLis.length; i++) {
        var li = document.createElement("li");       
        ol.appendChild(li);
       }
       var olLis = ol.children;  
       olLis[0].className = "color1";
      //克隆第一个      
      var firstImg = ulLis[0].cloneNode(true);
      ul.appendChild(firstImg);

    timer = setInterval(playNext,3000);





    var border=document.getElementById("border");

     var ullisbody=border.children;
        for(var i=0;i<ullisbody.length;i++){      
         ullisbody[i].index=i;
         ullisbody[i].onclick =function(){
            for(var i=0;i< ullisbody.length;i++){
             ullisbody[i].className="";
            }
            this.className = "border";
            console.log(1)
          
        }
    }


    /**
    * test merge
    */
    var testmerge = function(){
      console.log('merge ....');
    }
    var conflicttest = function(){
      console.log('conflict ....');
    }
    var testconflict2 = function(){
      console.log('conflict ....1123123修改同一行使用webstrom解决冲突');

    }

    var btn=document.getElementById("btn");
    var btns=btn.children;   
    

      for(var i=0;i<btns.length;i++){      
        btns[i].index=i;
        btns[i].onmouseover=function(){           
              this.children[4].style.bottom="-2px";
              this.children[4].style.transition="all 1s";

        }
         btns[i].onmouseout=function(){
              this.children[4].style.bottom="-70px";
              this.children[4].style.transition="all 1s";
         }
    }
