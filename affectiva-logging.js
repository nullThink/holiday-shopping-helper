let detector;
let likedObjectLog = [];
let debugMode = false;

let pictureAnalysisTimestamp = 5;
let emotionLogTimestamp = 0;
let joyOverTime = [];
let disgustOverTime = [];
let contemptOverTime = [];
let sadOverTime = [];
let angerOvertime = [];


const emotions = ["joy", "sadness", "disgust", "contempt", "anger"];

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

    // potential need for weighting averages since some emotions are more dom.
    function findDominantEmotion() {
        let maxValue = 0;
        let maxValueIndex = 0;

        var joyAvg = getEmotionAverage(joyOverTime);
        var disgustAvg = getEmotionAverage(disgustOverTime);
        var sadAvg = getEmotionAverage(sadOverTime);
        var contemptAvg = getEmotionAverage(contemptOverTime);
        var angerAvg = getEmotionAverage(angerOvertime);

        emotionAverages = [joyAvg, sadAvg, disgustAvg, contemptAvg, angerAvg];

        for (let i = 0; i < emotionAverages.length; i++) {
            if (emotionAverages[i] > maxValue) {
                maxValue = emotionAverages[i];
                maxValueIndex = i;
            }
        }

        return [maxValue, emotions[maxValueIndex]];
    }

    //Add a callback to receive the results from processing an image.
    //The faces object contains the list of the faces detected in an image.
    //Faces object contains probabilities for all the different expressions, emotions and appearance metrics

    detector.addEventListener("onImageResultsSuccess", function(faces, image, timestamp) {
        try {
            if (emotionLogTimestamp == timestamp || emotionLogTimestamp == 0) {
                emotionOverTime = [];
                joyOverTime = [];
                disgustOverTime = [];
                contemptOverTime = [];
                sadOverTime = [];
                angerOvertime = [];
                emotionLogTimestamp += 5;
            }

            joyOverTime.push(faces[0].emotions["joy"]);
            disgustOverTime.push(faces[0].emotions["disgust"]);
            sadOverTime.push(faces[0].emotions["sadness"]);
            angerOvertime.push(faces[0].emotions["anger"]);
            contemptOverTime.push(faces[0].emotion["contempt"]);
        } catch {}


        if (timestamp >= pictureAnalysisTimestamp || pictureAnalysisTimestamp == 0) {
            if (debugMode) {
                document.getElementById("link-holder").innerHTML = ""
                log("link-holder", "Timestamp: " + timestamp.toFixed(2));
                log("link-holder", "Number of faces found: " + faces.length);
            }
            if (faces.length > 0) {
                if (debugMode) {
                    log("link-holder", "Appearance: " + JSON.stringify(faces[0].appearance));
                    log("link-holder", "Emotions: " + JSON.stringify(faces[0].emotions, function(key, val) {
                        return val.toFixed ? Number(val.toFixed(0)) : val;
                    }));
                    log("link-holder", "Expressions: " + JSON.stringify(faces[0].expressions, function(key, val) {
                        return val.toFixed ? Number(val.toFixed(0)) : val;
                    }));
                    log("link-holder", "Emoji: " + faces[0].emojis.dominantEmoji);
                }

                if (findDominantEmotion()[1] == "joy") {
                    console.log("Added to Likes")
                    pictureAnalysisTimestamp = timestamp + 5;
                    console.log(getEmotionAverage(joyOverTime));

                    if (index <= products.length) {
                        if (index != 0) {
                            likedObjectLog.push(products[index - 1]);
                            log("link-list", "")
                        }

                        joyOverTime = [];
                        disgustOverTime = [];
                        contemptOverTime = [];
                        sadOverTime = [];
                        angerOvertime = [];

                        changePic();
                    }
                } else if (findDominantEmotion()[1] != "joy") {
                    console.log("Disliked")
                    pictureAnalysisTimestamp = timestamp + 5;
                    console.log(getEmotionAverage(disgustOverTime));

                    joyOverTime = [];
                    disgustOverTime = [];
                    contemptOverTime = [];
                    sadOverTime = [];
                    angerOvertime = [];
                    changePic();
                }
            } else {
                console.log("Waiting");
            }
        }
    });

    function getEmotionAverage(emotionOverTimeArray) {
        var total = 0;
        for (var i = 0; i < emotionOverTimeArray.length; i++) {
            total += emotionOverTimeArray[i];
        }
        var avg = total / emotionOverTimeArray.length;
        return avg;
    }

    function log(node_name, msg) {
        if (debugMode) {
            document.getElementById(node_name).innerHTML += "<span>" + msg + "</span><br/>"
        } else {
            if (index <= products.length) {
                document.getElementById(node_name).innerHTML = "";

                likedObjectLog.forEach((product) => {
                    let listItem = document.createElement("li")
                    let newLink = document.createElement("a");

                    newLink.innerHTML = product.getName();
                    newLink.setAttribute("href", product.getLink());
                    newLink.setAttribute("target", "_blank");

                    listItem.appendChild(newLink);
                    document.getElementById(node_name).appendChild(listItem);
                })

                // REALLY BAD FIX (manually increments index by 1 so that log is not reset)
                if (index == products.length) {
                    index++;
                }
            }
        }
    };
}