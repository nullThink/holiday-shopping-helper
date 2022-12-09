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


imageArray[11] = new Image();
imageArray[11].src = "images/sony_headphones2.jpg";
imageArray[11].id - "headphones";

imageArray[12] = new Image();
imageArray[12].src = "images/sushi_making_kit.jpg";
imageArray[12].id - "sushi_kit";

imageArray[13] = new Image();
imageArray[13].src = "images/toasteroven.jpg";
imageArray[13].id - "toaster_oven";

// currently it's just test information with the link going to the air filter.

// TODO: Individually add product information. Could probably consolidate
// into a JSON object or add to a class.


function populateProducts(){
for(var i = 0; i < imageArray.length; i++){
    if(imageArray[i].id == "airpurifier"){
        let newProduct = new Product("LEVOIT Air Purifier", imageArray[i].src, 99);
        newProduct.setLink("https://tinyurl.com/4arcfctj");
        products.push(newProduct);
    }
    else if(imageArray[i].id == "badminton"){
        let newProduct = new Product("HIRALIY Badminton Rackets Set of 4", imageArray[i].src, 55);
        newProduct.setLink("https://tinyurl.com/ucbcfwbj");
        products.push(newProduct);
    }
    else if(imageArray[i].id == "beard_trimmer"){
        let newProduct = new Product("Braun Hair Clippers for Men 9-in-1 Beard", imageArray[i].src, 60);
        newProduct.setLink("https://tinyurl.com/29bb4ch7");
        products.push(newProduct);
    }
    else if(imageArray[i].id == "boba_plushie"){
        let newProduct = new Product("KEDE Cartoon Bubble Tea Plush Pillow", imageArray[i].src, 14);
        newProduct.setLink("https://tinyurl.com/yjdy34mj");
        products.push(newProduct);
    }
    else if(imageArray[i].id == "bouquet_kit"){
        let newProduct = new Product("LEGO Icons Flower Bouquet", imageArray[i].src, 48);
        newProduct.setLink("https://tinyurl.com/2mm27sy9");
        products.push(newProduct);
    }
    else if(imageArray[i].id == "cute_cat_lamp"){
        let newProduct = new Product("Cute Cat Night Light Lamp", imageArray[i].src, 15);
        newProduct.setLink("https://tinyurl.com/3w8pmr5u");
        products.push(newProduct);
    }
    else if(imageArray[i].id == "dyson_air_wrap"){
        let newProduct = new Product("Dyson Airwrap", imageArray[i].src, 886);
        newProduct.setLink("https://tinyurl.com/22n7k2hj");
        products.push(newProduct);
    }
    else if(imageArray[i].id == "cocoa_kit"){
        let newProduct = new Product("Dyson Airwrap", imageArray[i].src, 19);
        newProduct.setLink("https://tinyurl.com/47nhmsx4");
        products.push(newProduct);
    }
    else if(imageArray[i].id == "knit_socks"){
        let newProduct = new Product("Loritta 5 Pairs Womens Wool Socks", imageArray[i].src, 18);
        newProduct.setLink("https://tinyurl.com/53pm5a5z");
        products.push(newProduct);
    }
    else if(imageArray[i].id == "pencils"){
        let newProduct = new Product("Prismacolor Premier Colored Pencils", imageArray[i].src, 56);
        newProduct.setLink("https://tinyurl.com/tfep9wmx");
        products.push(newProduct);
    }
    else if(imageArray[i].id == "rem_tablet"){
        let newProduct = new Product("reMarkable - The Paper Tablet - 10.3 Digital Notepad", imageArray[i].src, 650);
        newProduct.setLink("https://tinyurl.com/yckf8eby");
        products.push(newProduct);
    }
    else if(imageArray[i].id == "headphones"){
        let newProduct = new Product("Sony WH-1000XM4 Wireless Premium Noise Canceling", imageArray[i].src, 348);
        newProduct.setLink("https://tinyurl.com/yuyb28fk");
        products.push(newProduct);
    }
    else if(imageArray[i].id == "sushi_kit"){
        let newProduct = new Product("Sushi Making Kit", imageArray[i].src, 35);
        newProduct.setLink("https://tinyurl.com/mrxvme28");
        products.push(newProduct);
    }

    else if(imageArray[i].id == "toaster_oven"){
        let newProduct = new Product("AUMATE Countertop Convection Toaster Oven", imageArray[i].src, 150);
        newProduct.setLink("https://tinyurl.com/26auztzv");
        products.push(newProduct);
    }

    
}
}

// imageArray.forEach((object) => {

//     if(imageArray[])
//     let newProduct = new Product("Test", object.src, 1.1);
//     newProduct.setLink("https://a.co/d/5R4oIxt");
//     products.push(newProduct);
// });

var index = 0;
populateProducts();

window.onload = () => {
    textInfo = document.getElementById("text-info");
    textInfo.innerHTML = products[index].toString();
}

function changePic() {
    const curr_image = document.getElementById("current-image");
    const product_info = document.getElementById("text-info");
    if (index < 14) {
        console.log(imageArray[index].src);
        curr_image.setAttribute("src", imageArray[index].src);

        product_info.innerHTML = products[index].toString();
        index++;
    }
}
