noseX=0;
noseY=0;

function preload(){
mustache= loadImage('https://i.postimg.cc/Bbjqc3tC/png-clipart-black-mustache-beard-icon-beard-people-cartoon-beard-removebg-preview.png')
}
function draw(){
image(video,0,0,300,300)
image(mustache,noseX,noseY,45,45)
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("Model is Loaded !")

}

function gotPoses(result) {
if(result.length>0){
    console.log(result);
    noseX=result[0].pose.nose.x -25;
    noseY=result[0].pose.nose.y -15;
    console.log("nose X="+result[0].pose.nose.x);
    console.log("nose Y="+result[0].pose.nose.y);

}
}



function take_snapshot(){
    save("myFilter.png");
}

