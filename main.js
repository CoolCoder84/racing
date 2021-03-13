
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_width=100;
car_height=90;

car_X=10;
car_Y=10;

background="racing.gif";
car="car1.png";
car2="car1.png";
function add(){
    background_image=new Image();
    background_image.onload=uploadBackground;
    background_image.src=background;

    car_image=new Image();
    car_image.onload=uploadCar;
    car_image.src=car;

    car_image=new Image();
    car2_image.onload=uploadCar2;
    car2_image.src=Car2;
}

function uploadBackground(){
    ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}
function uploadCar(){
    ctx.drawImage(car_image,car_X,car_Y,car_width,car_height);
}
function uploadCar2(){
    ctx.drawImage(car2_image,car2_X,car_Y,car2_width,car2_height);
}

window.addEventListener("keydown",my_KeyDown);
function my_KeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
        console.log("up");  
    }

    if(keyPressed=="39"){
        right();
        console.log("right");  
    }

    if(keyPressed=="40"){
        down();
        console.log("down");  
    }

    if(keyPressed=="37"){
        left();
        console.log("left");  
    }
}

function up(){
    if(car_Y>=0){
        car_Y=car_Y-10;
        console.log("When up arrow is pressed, x= "+car_X+" ,Y= "+car_Y);
        uploadBackground();
        uploadCar();
    }  
}

function down(){
    if(car_Y<=500){
        car_Y=car_Y+10;
        console.log("When down arrow is pressed, x= "+car_X+" ,Y= "+car_Y);
        uploadBackground();
        uploadCar();
    }  
}

function left(){
    if(car_X>=0){
        car_X=car_X-10;
        console.log("When left arrow is pressed, x= "+car_X+" ,Y= "+car_Y);
        uploadBackground();
        uploadCar();
    }  
}

function right(){
    if(car_X<=700){
        car_X=car_X+10;
        console.log("When right arrow is pressed, x= "+car_X+" ,Y= "+car_Y);
        uploadBackground();
        uploadCar();
    }  
}

window.addEventListener("keydown",my_KeyDown);
function my_KeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="87"){
        up2();
        console.log("w");  
    }

    if(keyPressed=="68"){
        right2();
        console.log("d");  
    }

    if(keyPressed=="83"){
        down2();
        console.log("s");  
    }

    if(keyPressed=="65"){
        left2();
        console.log("a");  
    }
}

function up2(){
    if(car2_Y>=0){
        car2_Y=car2_Y-10;
        console.log("When w is pressed, x= "+car2_X+" ,Y= "+car2_Y);
        uploadBackground();
        uploadCar();
    }  
}

function down2(){
    if(car2_Y<=500){
        car2_Y=car2_Y+10;
        console.log("When s is pressed, x= "+car2_X+" ,Y= "+car2_Y);
        uploadBackground();
        uploadCar();
    }  
}

function left2(){
    if(car2_X>=0){
        car2_X=car2_X-10;
        console.log("When a is pressed, x= "+car2_X+" ,Y= "+car2_Y);
        uploadBackground();
        uploadCar();
    }  
}

function right(){
    if(car2_X<=700){
        car2_X=car2_X+10;
        console.log("When d is pressed, x= "+car_2X+" ,Y= "+car2_Y);
        uploadBackground();
        uploadCar();
    }  
}