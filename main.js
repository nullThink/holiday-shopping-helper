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

    getName() {
        return this.productName;
    }
    getPrice() {
        return this.price;
    }
    getLink() {
        return this.link;
    }
};

imageArray[0] = new Image();
imageArray[0].src = "images/airpurifier.jpg";
imageArray[0].id = "airpurifier";

imageArray[1] = new Image();
imageArray[1].src = "images/badmintonset1.jpg";
imageArray[1].id = "badminton";

imageArray[2] = new Image();
imageArray[2].src = "images/beard_trimmer.jpg";
imageArray[2].id = "beard_trimmer";

imageArray[3] = new Image();
imageArray[3].src = "images/BobaBlushie.jpg";
imageArray[3].id = "boba_plushie";

imageArray[4] = new Image();
imageArray[4].src = "images/bouquetKit.jpg";
imageArray[4].id = "bouquet_kit";


imageArray[5] = new Image();
imageArray[5].src = "images/cutecatlamp.jpg";
imageArray[5].id = "cute_cat_lamp";

imageArray[6] = new Image();
imageArray[6].src = "images/dysonairwrap.jpg";
imageArray[6].id = "dyson_air_wrap";

imageArray[7] = new Image();
imageArray[7].src = "images/hotcocoakit.jpg";
imageArray[7].id = "cocoa_kit";

imageArray[8] = new Image();
imageArray[8].src = "images/knitsocks.jpg";
imageArray[8].id = "knit_socks";

imageArray[9] = new Image();
imageArray[9].src = "images/prismacolor_pencils.jpg";
imageArray[9].id = "pencils";

imageArray[10] = new Image();
imageArray[10].src = "images/remarkable tablet.jpg";
imageArray[10].id = "rem_tablet";

// currently it's just test information with the link going to the air filter.

// TODO: Individually add product information. Could probably consolidate
// into a JSON object or add to a class.
function populateProducts() {
    for (var i = 0; i < imageArray.length; i++) {
        let newProduct;
        if (imageArray[i].id === "airpurifier") {
            newProduct = new Product("LEVOIT Air Purifier", imageArray[i].src, 99);
            newProduct.setLink("https://tinyurl.com/4arcfctj");;
        } else if (imageArray[i].id === "badminton") {
            newProduct = new Product("HIRALIY Badminton Rackets Set of 4", imageArray[i].src, 55);
            newProduct.setLink("https://tinyurl.com/ucbcfwbj");;
        } else if (imageArray[i].id === "beard_trimmer") {
            newProduct = new Product("Braun Hair Clippers for Men 9-in-1 Beard", imageArray[i].src, 60);
            newProduct.setLink("https://tinyurl.com/29bb4ch7");;
        } else if (imageArray[i].id === "boba_plushie") {
            newProduct = new Product("KEDE Cartoon Bubble Tea Plush Pillow", imageArray[i].src, 14);
            newProduct.setLink("https://tinyurl.com/yjdy34mj");;
        } else if (imageArray[i].id === "bouquet_kit") {
            newProduct = new Product("LEGO Icons Flower Bouquet", imageArray[i].src, 48);
            newProduct.setLink("https://tinyurl.com/2mm27sy9");;
        } else if (imageArray[i].id === "cute_cat_lamp") {
            newProduct = new Product("Cute Cat Night Light Lamp", imageArray[i].src, 15);
            newProduct.setLink("https://tinyurl.com/3w8pmr5u");;
        } else if (imageArray[i].id === "dyson_air_wrap") {
            newProduct = new Product("Dyson Airwrap", imageArray[i].src, 886);
            newProduct.setLink("https://tinyurl.com/22n7k2hj");;
        } else if (imageArray[i].id === "cocoa_kit") {
            newProduct = new Product("Ghirardelli Holiday Hot Chocolate Gift Set", imageArray[i].src, 19);
            newProduct.setLink("https://tinyurl.com/47nhmsx4");;
        } else if (imageArray[i].id === "knit_socks") {
            newProduct = new Product("Loritta 5 Pairs Womens Wool Socks", imageArray[i].src, 18);
            newProduct.setLink("https://tinyurl.com/53pm5a5z");;
        } else if (imageArray[i].id === "pencils") {
            newProduct = new Product("Prismacolor Premier Colored Pencils", imageArray[i].src, 56);
            newProduct.setLink("https://tinyurl.com/tfep9wmx");
        } else if (imageArray[i].id === "rem_tablet") {
            newProduct = new Product("reMarkable - The Paper Tablet - 10.3 Digital Notepad", imageArray[i].src, 650);
            newProduct.setLink("https://tinyurl.com/yckf8eby");
        };
        products.push(newProduct);
    }
}

var index = 0;
populateProducts();

window.onload = () => {
    textInfo = document.getElementById("text-info");
    textInfo.innerHTML = products[index].toString();
}

function changePic() {
    const curr_image = document.getElementById("current-image");
    const product_name = document.getElementById("name");
    const product_price = document.getElementById("price");

    if (index < products.length) {
        console.log(index);
        console.log(products[index]);
        curr_image.setAttribute("src", imageArray[index].src);

        product_name.innerHTML = "Name: " + products[index].getName();
        product_price.innerHTML = "Price: $" + products[index].getPrice();
        index++;
    }
}