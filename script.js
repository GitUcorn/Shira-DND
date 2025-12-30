function generateStats() {
    const stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
    const grid = document.getElementById('statsGrid');
    grid.innerHTML = '';

    stats.forEach((stat, index) => {
        const score = roll4d6();
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div style="color: #c5a059; font-size: 0.8rem;">${stat}</div>
            <div style="font-size: 2rem;">${score}</div>
        `;
        grid.appendChild(card);
    });
}

function roll4d6() {
    let rolls = Array.from({length: 4}, () => Math.floor(Math.random() * 6) + 1);
    return rolls.sort().slice(1).reduce((a, b) => a + b, 0);
}