const symbole = "£";

let count = 1;
let secondCount = 2;
let newCount = count;
let secCount = secondCount;


do{
    newCount = newCount * 5;
}   while (newCount < 1);

do{
    secCount = secCount * 5;
}   while (secondCount < 1);




const firstValue = () => {
    document.getElementById("incre").innerHTML = `${symbole}${newCount}`;
};
document.getElementById("one").addEventListener("click", firstValue);

const secondValue = () => {
    document.getElementById("incre").innerHTML = `${symbole}${secCount}`;
};
document.getElementById("two").addEventListener("click", secondValue);