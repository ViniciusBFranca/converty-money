const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency")

    const dolarToday = 5.8

    const convertedValue = inputCurrencyValue / dolarToday

    console.log(covertedValue)
}

convertButton.addEventListener("click", convertValues)