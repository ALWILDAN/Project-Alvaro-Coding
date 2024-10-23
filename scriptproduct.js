const quantityinput = document.getElementById("quantityinput");
const stockinfo = document.getElementById("stockinfo");
const maxstock = 20;

stockinfo.innerText = `Avaible stock = ${maxstock}` ;

quantityinput.addEventListener("input", function() {
    let value = parseInt(quantityinput.value);
    if (value < 1){
        quantityinput.value = 1;
    }
    if (value > maxstock) {
        quantityinput.value = maxstock;
        alert(`Sorry, We only got Skibidi ${maxstock} items in stock!`)
    }
});
let coolorinput = document.querySelectorAll(".color input");

coolorinput.forEach((input) => {
    input.addEventListener("change", function() {
        if (this.checked) {
            productImg.src = this.getAttribute("data-image");
        }
    });
});