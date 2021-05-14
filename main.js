leftWristScore=0;
currentSongLeft="";
whenPlayedLeft="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
song1="";
song2="";
function preload(){
    song1=loadSound("07.Geometry Dash Jumper.mp3");
    song2=loadSound("06.DJVI - Can't Let Go.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
    fill('#00fffb');
    stroke('#00fffb');
    SongStatus1=song1.isPlaying();
    if(leftWristScore>0.2&&SongStatus1==false){
        circle(leftWristX,leftWristY,20);
        song2.stop();
        song1.play();
    }
}
function modelLoaded(){
    console.log("MODEL LOADED YEAH!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristScore=results[0].pose.keypoints[9].score;
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
        leftWristScore=results[0].pose.keypoints[9].score
    }
}
function play(){
    song.play();
    song.setVolume(0.1);
    song.rate(1);
}