var Like_img = document.getElementsByClassName("like");
for (let i = 0; i < Like_img.length; i++) {
        Like_img[i].setAttribute("id", "Not_Liked");        
}

function like_item(index) {
    if (Like_img[index].id == "Not_Liked") {
        Like_img[index].setAttribute("style", "color:red;");
        Like_img[index].id = "Liked";
    } else {
        Like_img[index].setAttribute("style", "color:black;");
        Like_img[index].id = "Not_Liked";
    }
}


var prices = document.getElementsByClassName("price");
var Base_price = [];

var Quantite = document.getElementsByClassName("Quant");
var Quan = [];

var plus_btn = document.getElementsByClassName("plus-btn");

var minus_btn = document.getElementsByClassName("minus-btn");

var finalPrice = document.getElementById("finalPrice");

var remove_btn = document.getElementsByClassName("delete");



//get all values
Get_Values();

function Plus_price(index) {
    let s = Number(prices[index].innerHTML);
    s += Base_price[index];
    prices[index].innerHTML = s + ".00";
    Quan[index]++;
    Quantite[index].setAttribute("value", `${Quan[index]}`);
    Get_final_price();
}

function Minus_price(index) {
    if (Quan[index] > 0) {
        let s = Number(prices[index].innerHTML);
        s -= Base_price[index];
        prices[index].innerHTML = s + ".00";
        Quan[index]--;
        Quantite[index].setAttribute("value", `${Quan[index]}`);
        Get_final_price();
    }
}

function Get_final_price() {
    let s = 0;
    for (let i = 0; i < prices.length; i++) {
        s += Number(prices[i].innerHTML);
    }
    finalPrice.setAttribute("value", `${s}`);
}

function remove_parent(index) {
    remove_btn[index].parentElement.remove();
    Get_Values();
    Get_final_price();
}

function Get_Values() {
    for (var i = 0; i < prices.length; i++) {
        Base_price[i] = Number(prices[i].innerHTML);
    }
    for (let i = 0; i < Quantite.length; i++) {
        Quan[i] = Number(Quantite[i].getAttribute("value"));
    }
    for (let i = 0; i < plus_btn.length; i++) {
        plus_btn[i].setAttribute("onClick", `Plus_price(${i})`);
    }
    for (let i = 0; i < minus_btn.length; i++) {
        minus_btn[i].setAttribute("onClick", `Minus_price(${i})`);
    }
    for (let i = 0; i < remove_btn.length; i++) {
        remove_btn[i].setAttribute("onClick", `remove_parent(${i})`);
    }
    for (let i = 0; i < Like_img.length; i++) {        
        Like_img[i].setAttribute("onClick", `like_item(${i})`);
    }
}
