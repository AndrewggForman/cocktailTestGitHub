//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)
let num = 0;

function getDrink() {

    let drink = document.querySelector('input').value
    let drinkFix = drink.replaceAll(' ', '\x20')

    fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkFix)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.drinks[num].strDrink
        document.querySelector('img').src = data.drinks[num].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[num].strInstructions
        if(num < data.drinks.length - 1){
            num += 1
        } else {
            num = 0
        }
    })

    .catch(err => {
        console.log(`error ${err}`)
    });
}