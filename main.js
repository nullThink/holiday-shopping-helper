var imageArray = new Array();

let products = [];
let textInfo;

class Product {
    constructor(name, image, price) {
        this.productName = name;
        this.img = image;
        this.price = price;
        this.link = "";
    }

    toString() {
        return "Name: " + this.productName + "\n Price: " + this.price;
    }

    setName(newName) {
        this.productName = newName;
    }

    setPrice(newPrice) {
        this.price = newPrice;
    }

    setLink(newLink) {
        this.link = newLink;
    }
};

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

// currently it's just test information with the link going to the air filter.

// TODO: Individually add product information. Could probably consolidate
// into a JSON object or add to a class.
imageArray.forEach((object) => {
    let newProduct = new Product("Test", object.src, 1.1);
    newProduct.setLink("https://a.co/d/5R4oIxt");
    products.push(newProduct);
});

var index = 0;

window.onload = () => {
    textInfo = document.getElementById("text-info");
    textInfo.innerHTML = products[index].toString();
}

function changePic() {
    console.log(products[index]);
    const curr_image = document.getElementById("current-image");
    const product_info = document.getElementById("text-info");
    if (index < 14) {
        console.log(imageArray[index].src);
        curr_image.setAttribute("src", imageArray[index].src);

        product_info.innerHTML = products[index].toString();
        index++;
    }
}