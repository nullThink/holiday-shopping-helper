var imageArray = new Array();
imageArray[0] = new Image();
imageArray[0].src = "images/airpurifier.jpg";

imageArray[1] = new Image();
imageArray[1].src = "images/badmintonset1.jpg";

imageArray[2] = new Image();
imageArray[2].src = "images/beard_trimmer.jpg";

imageArray[3] = new Image();
imageArray[3].src = "images/BobaBlushie.jpg";


imageArray[4] = new Image();
imageArray[4].src = "images/bouquetKit.jpg";

imageArray[5] = new Image();
imageArray[5].src = "images/cutecatlamp.jpg";

imageArray[6] = new Image();
imageArray[6].src = "images/dysonairwrap.jpg";

imageArray[7] = new Image();
imageArray[7].src = "images/hotcocoakit.jpg";

imageArray[8] = new Image();
imageArray[8].src = "images/knitsocks.jpg";

imageArray[9] = new Image();
imageArray[9].src = "images/prismacolor_pencils.jpg";


imageArray[10] = new Image();
imageArray[10].src = "images/remarkable tablet.jpg";


imageArray[11] = new Image();
imageArray[11].src = "images/sony_headphones2.jpg";

imageArray[12] = new Image();
imageArray[12].src = "images/sushi_making_kit.jpg";

imageArray[13] = new Image();
imageArray[13].src = "images/toasteroven.jpg";

const curr_image = document.getElementById("current-image");

// let toggle = true;
var index = 1;
curr_image.addEventListener("click", changePic());

function changePic(){
    console.log("HELLO!!!!")
    curr_image.setAttribute("src", imageArray[index].src);
    index = (index + 1) % imageArray.length;
}

