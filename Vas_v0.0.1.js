/* Vas Gaming Engine v0.0.3 */

/* Created by Malmadork */

/* So far I have added simple geometry functions that can be used with canvas:

   1. Define your canvas's context as 'ctx', and canvas.width/canvas.height
   2. Use functions listed below. [Example: rect( 4, 4, 2, 2, 'red'); //This makes a red 2x2 rectangle at (4,4).]
   
*/

//This creates a rectangle at (x,y) with dimensions of width * height and a color of 'color'

    function rect( x, y, width, height, color ) {
      
      ctx.fillStyle = color;
      ctx.fillRect(x,y, width,height);
      
    }
    
//This creates a circle at (x,y) with a radius of [radius] and a color of 'color'
    
    function circle( x, y, radius, color ) {
      
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0,Math.PI*2, true);
      ctx.fill();
    
    }
    
//This creates a line that is [width] thick, starts at (startX, startY) and ends at (endX, endY), and is colored 'color'
    
    function line( width, startX, startY, endX, endY, color ) {
      
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = color;
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

    }
    
//This loads an image sprite at (x,y) from an image source of 'src'
    
    function sprite( x, y, src ) {
    
    var img = new Image();
    img.src = src;
    img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
    });
    
    }
    
//This creates a background with color 'color'

//This might change if I add a way to change viewports
    
    function back( color ) {
      
      ctx.fillStyle = color;
      ctx.fillRect( 0, 0, canvas.width, canvas.height );
      
    }
    
//More coming soon with loops, animations, and tilemaps
  
    
/*    function loop(){
      
      ctx.fillStyle = '#333';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    }
    
    function updatePlayer() {
    
    }
    
    function update(){
      
      function updatePlayer();
    
    }
 
 
 function update(){
   
     draw();
     playerX +=1;
     
     window.requestAnimFrame(update);

 }
 
 */
 
 
    