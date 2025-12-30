function rollDice() {
    // Rolls 4d6 and drops the lowest (D&D standard)
    let rolls = [];
    for (let i = 0; i < 4; i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    rolls.sort();
    rolls.shift(); // Remove the smallest number
    return rolls.reduce((a, b) => a + b, 0);
}

function generateStats() {
    const stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
    const display = document.getElementById('statsDisplay');
    display.innerHTML = ''; // Clear old stats

    stats.forEach(stat => {
        const score = rollDice();
        display.innerHTML += `
            <div class="stat-box">
                <strong>${stat}</strong>: ${score}
            </div>`;
    });
}
