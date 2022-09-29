leftX = 0;
leftY = 0;
rightX = 0;
rightY = 0;
song1 = "";
song2 = "";
leftScore = 0;
rightScore = 0;
song1Status = "";
song2Status = "";

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
    stroke("#FF0000");
    fill("#FF0000");
    song1Status = song1.isPlaying();

    if(leftScore > 0.2 ) {
        circle(leftX, leftY, 20);
        song2.stop();
        

        if(song1Status = "false") {
            song1.play();
            document.getElementById("song_playing").innerHTML = "Harry Potter Theme Song Remix Is Playing";
            console.log("Song 1");
        }

       
}

song2Status = song2.isPlaying();

if(rightScore > 0.2 ) {
    circle(rightX, rightY, 20);
    song1.stop();

    if(song2Status = "false") {
        song2.play();
        document.getElementById("song_playing").innerHTML = "Peter Pan Song Is Playing";
    }

}

}

function modelLoaded() {
    console.log("PoseNet Is Initialized");

}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        leftScore = results[0].pose.keypoints[9].score;
        console.log("leftScore: " + leftScore);

        console.log("leftX: " + leftX + " leftY: " + leftY);

        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
        rightScore = results[0].pose.keypoints[10].score;
        console.log("rightScore: " + rightScore);

        console.log("rightX: " + rightX + " rightY: " + rightY);
    }
    }
