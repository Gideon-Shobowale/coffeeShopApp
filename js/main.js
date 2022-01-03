// coffeshop by Gidoen Shobowale 
let symbole = "£";
let price = [1, 2, 3];
let newPrice = []; // [5, 10, 15]
let checkoutPrice = '';
// Calculation for new price 
for (let i = 0; i < 5; i++){
    if (price) {
        let count = price[i] * 5;
        newPrice.push(count);
    }
};
const firstClick = () => {
    checkoutPrice = document.getElementById("incre").innerHTML = `${symbole}` + newPrice[0];
}
document.getElementById("one").addEventListener("click", firstClick);

const secondClick = () => {
    checkoutPrice = document.getElementById("incre").innerHTML = `${symbole}` + newPrice[1];
}
document.getElementById("two").addEventListener("click", secondClick);

const thirdClick = () => {
    checkoutPrice = document.getElementById("incre").innerHTML = `${symbole}` + newPrice[2];
}
document.getElementById("three").addEventListener("click", thirdClick);

// Get value from user input and multiply it by 5
const someNumber = () => {
    let num = document.getElementById("a-choice").value * 5;
    checkoutPrice = document.getElementById("incre").innerHTML = `${symbole}` + num;
}
// Open modal
const openBtn = () => {
    document.getElementById("openModal").style.display = "block";
}
document.getElementById("bnw").addEventListener("click", openBtn);
// Close and reset modal
const closeBtn = () => {
    document.getElementById("openModal").style.display = "none";
    document.getElementById("your-email").value = '';
}
document.getElementById("closeModal").addEventListener("click", closeBtn);
// Checkout price
const checkOut = () => {
    document.getElementById("checkout").innerHTML = checkoutPrice;
}
document.getElementById("bnw").addEventListener("click", checkOut);