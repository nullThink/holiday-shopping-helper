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

    //Add a callback to receive the results from processing an image.
    //The faces object contains the list of the faces detected in an image.
    //Faces object contains probabilities for all the different expressions, emotions and appearance metrics
    detector.addEventListener("onImageResultsSuccess", function(faces, image, timestamp) {
        document.getElementById("link-holder").innerHTML = ""
        log("link-holder", "Timestamp: " + timestamp.toFixed(2));
        log("link-holder", "Number of faces found: " + faces.length);
        if (faces.length > 0) {
            log("link-holder", "Appearance: " + JSON.stringify(faces[0].appearance));
            log("link-holder", "Emotions: " + JSON.stringify(faces[0].emotions, function(key, val) {
                return val.toFixed ? Number(val.toFixed(0)) : val;
            }));
            log("link-holder", "Expressions: " + JSON.stringify(faces[0].expressions, function(key, val) {
                return val.toFixed ? Number(val.toFixed(0)) : val;
            }));
            log("link-holder", "Emoji: " + faces[0].emojis.dominantEmoji);

            // if (faces[0].emotions["joy"] > 70) {
            //     let m_value = document.getElementById("matchTracker");
            //     m_value.innerHTML = "MATCH!";
            //     m_value.style.color = "green";

            // } else if (faces[0].emotions["disgust"] > 11 || faces[0].emotions["contempt"] > 70) {
            //     let m_value = document.getElementById("matchTracker");
            //     m_value.innerHTML = "MISS!";
            //     m_value.style.color = "red";
            // } else {
            //     let m_value = document.getElementById("matchTracker");
            //     m_value.innerHTML = ("Detecting if it's a match...");
            //     m_value.style.color = "black";
            // }
        }
    });

    function log(node_name, msg) {
        document.getElementById(node_name).innerHTML += "<span>" + msg + "</span><br/>"
    };
}