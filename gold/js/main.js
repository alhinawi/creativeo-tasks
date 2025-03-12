function goldCalc(gold, goldPrice) {
    gold = parseFloat(prompt("How many gold grams would you like to buy?"));
    goldPrice = 100;
    let totalPrice = gold * goldPrice * 1.14;
    document.body.innerHTML += `<img src="imgs/profile.png" alt="">`;
    document.body.innerHTML += `<h1>The Total price is: ${(totalPrice).toFixed(2)}💲🪙</h1>`;
}

goldCalc();