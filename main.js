song = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload(){
    song = loadSound("Music.mp3");
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is loaded!");
}

function gotPoses(results) {
    if(results.length > 0) {

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

    }
}

function draw(){
    image(video, 0, 0, 500, 400);
}