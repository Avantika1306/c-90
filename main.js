var canvas=new fabric.Canvas("mycanvas");
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img) { 
        player_object = Img;
        player_object.scaleToWidth(150); 
        player_object.scaleToHeight(140); 
        player_object.set({
             top:player_y,
              left:player_x });
         canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img) { 
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width); 
        block_image_object.scaleToHeight(block_image_height); 
        block_image_object.set({
             top:player_y,
              left:player_x });
         canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftkey == true && keyPressed == '80'){
        console.log("shift p pressed together");

        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftkey == true && keyPressed == '77'){
        console.log("shift m pressed together");
                block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPressed=='38'){
        console.log("up key is pressed");
    }
    if(keyPressed=='40'){
        console.log("down key is pressed");
    }
    if(keyPressed=='37'){
        console.log("left key is pressed");
    }
    if(keyPressed=='39'){
        console.log("right key is pressed");
    }
    if(keyPressed=='87'){
        console.log("w key is pressed");
    }
    if(keyPressed=='71'){
        console.log("g key is pressed");
    }
    if(keyPressed=='76'){
        console.log("l key is pressed");
    }
    if(keyPressed=='84'){
        console.log("t key is pressed");
    }
    if(keyPressed=='82'){
        console.log("r key is pressed");
    }
    if(keyPressed=='89'){
        console.log("y key is pressed");
    }
    if(keyPressed=='68'){
        console.log("d key is pressed");
    }
    if(keyPressed=='85'){
        console.log("u key is pressed");
    }
    if(keyPressed=='67'){
        console.log("c key is pressed");
    }
}