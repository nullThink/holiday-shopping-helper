let detector;
let likedObjectLog = {};

window.onload = () => {
    let cameraDivRoot = document.querySelector("#camera-feed");
    let width = 500;
    let height = 500;

    detector = new affdex.CameraDetector(cameraDivRoot, width, height, affdex.FaceDetectorMode.LARGE_FACES)

    //Enable detection of all Expressions, Emotions and Emojis classifiers.
    detector.detectAllEmotions();
    detector.detectAllExpressions();
    detector.detectAllEmojis();
    detector.detectAllAppearance();

    detector.addEventListener("onInitializeSuccess", () => {
        console.log("Detector reports initialized.");
        document.getElementById("face_video").style.width = "100%";
        document.getElementById("face_video").style.height = "100%";
        document.getElementById("face_video").style.display = "block";
    });

    detector.start();

    //Add a callback to notify when camera access is allowed
    detector.addEventListener("onWebcamConnectSuccess", function() {
        console.log("Webcam access allowed");
    });

    //Add a callback to notify when camera access is denied
    detector.addEventListener("onWebcamConnectFailure", function() {
        console.log("Webcam access denied");
    });
}