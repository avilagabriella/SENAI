const selector = document.getElementById("selector");
const value = document.getElementById("valor");
const date = document.getElementById("data");
const quantity = document.getElementById("quantidade");
const product = document.getElementById("produtos");
const total = document.getElementById("total");

selector.addEventListener("change", (event) => {
    const targetValue = event.target.value;
    
    switch(targetValue) {
        case "null":
            value.value = ""
            break;
        case "Salgadinhos":
            value.value = "4.50"
            break;
        case "Coxinha":
            value.value = "7.50"
            break;
        case "HamburguerCheddar":
            value.value = "7.50"
            break;
        case "HamburguerBacon":
            value.value = "7.50"
            break;
        case "PãoDeQueijo":
            value.value = "4.00"
            break;
        case "PãoDeBatata":
            value.value = "7.50"
            break;
        case "CarneComBacon":
            value.value = "7.50"
            break;
        case "PresuntoEQueijo":
            value.value = "7.50"
            break;
        case "Laranja":
            value.value = "4.00"
            break;
        case "Agua":
            value.value = "2.50"
            break;
        case "Refrigerante":
            value.value = "5.00"
            break;
        case "Toddynho":
            value.value = "4.00"
            break;
        case "Bombom":
            value.value = "2.50"
            break;
        case "Barrinha":
            value.value = "5.00"
            break;
        case "Donuts":
            value.value = "8.00"
            break;
        case "Balas":
            value.value = "3.50"
            break;
        default:    
            break;
    }
})

quantity.addEventListener("input", (event) => {
    const targetValue = event.target.value;
    total.value = value.value * targetValue
})