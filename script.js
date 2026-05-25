const numDice = document.getElementById("numDice");
const diceType = document.getElementById("diceType");
const rollButton = document.getElementById("rollButton");
const results = document.getElementById("rollResults");

rollButton.addEventListener('click', function() {
    const numberOfDice = parseInt(numDice.value);
    const sides = parseInt(diceType.value);

    let rolls = [];
    let total = 0;

    for (let i = 0; i < numberOfDice; i++) {
        let roll = Math.floor(Math.random() * sides) + 1;
        rolls.push(roll);
        total += roll;
    }

    results.innerHTML = `
        <p>You rolled ${numberOfDice} x D${sides}</p>
        <p>Individual rolls: ${rolls.join(', ')}</p>
        <p>Total: ${total}</p>
    `;
});