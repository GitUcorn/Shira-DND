function rollAbility() {
    let rolls = Array.from({length: 4}, () => Math.floor(Math.random() * 6) + 1);
    rolls.sort((a, b) => a - b);
    rolls.shift(); // Drop lowest
    return rolls.reduce((a, b) => a + b, 0);
}

function generateStats() {
    const stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
    const display = document.getElementById('statsDisplay');
    display.innerHTML = '';

    stats.forEach(stat => {
        const score = rollAbility();
        display.innerHTML += `
            <div class="stat-box">
                <span class="stat-name">${stat}</span>
                <span class="stat-value">${score}</span>
            </div>
        `;
    });
}