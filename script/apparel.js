let { id, productTitle, price, productImg, qty } = JSON.parse(localStorage.getItem("details_prod"));
    //    console.log(productTitle);
    document.querySelector("#productImage>img").src = productImg[0];

    productImg.forEach((img) => {
        let prodimg = document.createElement("img");
        prodimg.onclick = () => {
            document.querySelector("#productImage>img").src = img;
        }
        prodimg.src = img;
        document.querySelector("#multiImage").append(prodimg);
    });

    document.querySelector("#title").textContent = productTitle;

    document.querySelector("#price").textContent = "Price : ₹ " + price + "/-";

    document.querySelector("#qtyDiv>input").value = qty;

    function decQty() {
        let quantity = document.querySelector("#qtyDiv>input").value
        if (quantity > 1) {
            document.querySelector("#qtyDiv>input").value = --quantity;
            document.querySelector("#pieces").textContent = quantity + " pieces";
            document.querySelector("#item-amount").textContent = "₹"+ (quantity*price).toFixed(2);
            document.querySelector("#showtotal").textContent = "₹" + (quantity*price+11700.63).toFixed(2);
        }
    }
    function incQty() {
        let quantity = document.querySelector("#qtyDiv>input").value;
        document.querySelector("#qtyDiv>input").value = ++quantity;
        document.querySelector("#pieces").textContent = quantity + " pieces";
        document.querySelector("#item-amount").textContent = "₹"+ (quantity*price).toFixed(2);
        document.querySelector("#showtotal").textContent = "₹" + (quantity*price+11700.63).toFixed(2);
    }

    let quantity = document.querySelector("#qtyDiv>input").value;
    document.querySelector("#pieces").textContent = quantity + " pieces";
    document.querySelector("#item-amount").textContent = "₹"+ (quantity*price).toFixed(2);
    document.querySelector("#showtotal").textContent = "₹" + (quantity*price+11700.63).toFixed(2);

    var apparels = [
        {
        img_url: "https://s.alicdn.com/@sc02/kf/HTB15BWDOXzqK1RjSZFoq6zfcXXah.jpg_80x80xz.jpg",
        text: "Women's clothing",
        },{
        img_url: "https://s.alicdn.com/@sc02/kf/HTB1WI2lQ7voK1RjSZPf760PKFXaf.png_80x80xz.jpg",
        text: "Men's clothing",
        },{
        img_url: "https://s.alicdn.com/@sc02/kf/HTB1isuIOgHqK1RjSZJnq6zNLpXaz.jpg_80x80xz.jpg",
        text: "Sport's wear",
        },{
        img_url: "https://s.alicdn.com/@sc02/kf/HTB1qIiwOmzqK1RjSZPxq6A4tVXam.jpg_80x80xz.jpg",
        text: "Children's clothing",
        },{
        img_url: "https://s.alicdn.com/@sc02/kf/HTB1cimCOkvoK1RjSZPfq6xPKFXa5.jpg_80x80xz.jpg",
        text: "Garments",
        },{
        img_url: "https://s.alicdn.com/@sc02/kf/HTB1yz5NOcfpK1RjSZFOq6y6nFXaj.jpg_80x80xz.jpg",
        text: "Novelty & Special",
        },{
        img_url: "https://s.alicdn.com/@img/imgextra/i4/O1CN014ezbRF1xIPTRcpOl3_!!6000000006420-2-tps-84-80.png_80x80xz.jpg",
        text: "Baby clothing",
        },{
        img_url: "https://s.alicdn.com/@img/imgextra/i4/O1CN01ljyw0V1g1bTCvykun_!!6000000004082-2-tps-80-80.png_80x80xz.jpg",
        text: "Todlers's Clothing",
        }
        ];
        let h1 = document.createElement("h1");
        h1.innerText = "Recommended for you";
        let divy = document.createElement("div");
        // divy.append(h1);
        divy.setAttribute("class","hyper_recom")
        apparels.forEach(({img_url,text}) => {
            let div =document.createElement("div");
            let img = document.createElement("img");
            img.src=img_url;
            img.style.width = "80px";
            let t = document.createElement("p");
            t.innerText = text;
            div.append(img,t);
            divy.append(div);
        });
        document.querySelector("body").append(h1,divy);
