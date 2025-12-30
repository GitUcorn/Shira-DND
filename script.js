function generateStats() {
    const stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
    const container = document.getElementById('statsDisplay');
    const heroImg = document.getElementById('heroImg');
    
    // Change portrait randomly for visual variety
    const randomSeed = Math.floor(Math.random() * 1000);
    heroImg.src = `https://api.dicebear.com/7.x/adventurer/svg?seed=${randomSeed}`;

    container.innerHTML = '';
    
    stats.forEach(stat => {
        const score = roll4d6DropLowest();
        container.innerHTML += `
            <div class="stat-card">
                <div style="font-size: 0.8rem; color: #ffd700;">${stat}</div>
                <div style="font-size: 1.8rem; font-weight: bold;">${score}</div>
            </div>
        `;
    });
}

function roll4d6DropLowest() {
    let rolls = Array.from({length: 4}, () => Math.floor(Math.random() * 6) + 1);
    return rolls.sort().slice(1).reduce((a, b) => a + b, 0);
}