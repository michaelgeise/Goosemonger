
var makeColor = "blue";
var makeBlue = function(){
    makeColor = "blue";
      }
var makeRed = function(){
    makeColor = "red";
      }
var makeRandom = function(){
    makeColor = "rand";
      }
var makeEraser = function(){
    makeColor = "eraser";
      }
//Chagned this to be called, instead of load automatically. It was conflicting with wordpress javascript
jQuery(function(){
var color = "rgba(0, 0, 0, 0)";
var paint = "false";
   /*jQuery("td").click(function () {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        color = "rgb(" + r + "," + g + "," + b + ")";
        jQuery(this).css("background-color", color);*/
    
//if(color = "rgb(" + r + "," + g + "," + b + ")"){
  //     color ="rgba(0, 0, 0, 0)";
    //          jQuery(this).css("background-color", color);

      //}
  jQuery("td").mouseenter(function () {if(paint === "true"){
        cColor=jQuery(this).css("background-color");
        console.log(cColor);
      //  color = "rgb(" + r + "," + g + "," + b + ")";
      // if(cColor == "rgba(0, 0, 0, 0)"){
      /*if(cColor !== "rgb(165, 213, 243)" && cColor !== "rgb(239, 63, 35)"){
      color ="rgb(165, 213, 243)"; //blue
      jQuery(this).css("background-color", color);
      } 
      
      else if(cColor=== "rgb(165, 213, 243)"){
       color ="#EF3F23";//red
              jQuery(this).css("background-color", color);
       }
       else if(cColor=== "rgb(239, 63, 35)"){
       color ="rgba(0, 0, 0, 0)";
              jQuery(this).css("background-color", color);

       }*/
    /*if(makeColor == "blue)
       color ="rgb(165, 213, 243)"; //blue
      jQuery(this).css("background-color", color);*/
    if(makeColor == "red"){
      color ="rgb(239, 63, 35)";//red
      jQuery(this).css("background-color", color);
      }
    else if(makeColor == "rand"){
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        color = "rgb(" + r + "," + g + "," + b + ")";
        jQuery(this).css("background-color", color);
        }
    else if(makeColor == "eraser"){
        color ="rgba(0, 0, 0, 0)";
        jQuery(this).css("background-color", color);
        }
    else{
      color ="rgb(165, 213, 243)"; //blue
      jQuery(this).css("background-color", color);
    }
   //    jQuery(this).css("background-color", color);
    }});
       /*Start your content here jQuery("td").on("vmouseover","p",function () {
        cColor=jQuery(this).css("background-color");
        console.log(cColor);
     
    if(makeColor == "red"){
      color ="rgb(239, 63, 35)";//red
      jQuery(this).css("background-color", color);
      }
    else if(makeColor == "rand"){
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        color = "rgb(" + r + "," + g + "," + b + ")";
        jQuery(this).css("background-color", color);
        }
    else if(makeColor == "eraser"){
        color ="rgba(0, 0, 0, 0)";
        jQuery(this).css("background-color", color);
        }
    else{
      color ="rgb(165, 213, 243)"; //blue
      jQuery(this).css("background-color", color);
    }
   //    jQuery(this).css("background-color", color);
    }); */
        jQuery("td").mousedown(function () {
  paint = "true";
  console.log(paint);
  });
   jQuery("td").mouseup(function () {
  paint = "false";
  console.log(paint);
  });
  });

$(document).ready(function(){  
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
     $(".paint-main").attr('style','display:none !important');
  }
});
