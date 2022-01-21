let { id, productTitle, price, productImg, qty } = JSON.parse(localStorage.getItem("openedProduct"));

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