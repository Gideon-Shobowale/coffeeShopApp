// coffeshop by Gidoen Shobowale 
const symbole = "£";
const price = [1, 2, 3, 4, 5];
const newPrice = []; // [5, 10, 15....]
// Calculation for new price 
for (let i = 0; i < 5; i++){
    if (price) {
        let count = price[i] * 5;
        newPrice.push(count);
    }
};
const firstClick = () => {
    document.getElementById("incre").innerHTML = `${symbole}` + newPrice[0];
}
document.getElementById("one").addEventListener("click", firstClick);

const secondClick = () => {
    document.getElementById("incre").innerHTML = `${symbole}` + newPrice[1];
}
document.getElementById("two").addEventListener("click", secondClick);

const thirdClick = () => {
    document.getElementById("incre").innerHTML = `${symbole}` + newPrice[2];
}
document.getElementById("three").addEventListener("click", thirdClick);


console.log(newPrice);