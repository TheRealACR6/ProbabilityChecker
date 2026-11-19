const denom = document.getElementById('prob');
const display = document.getElementById('chanceDisplay');
const coin = document.getElementById('coin');
const kapowie = document.getElementById('lightning');

denom.addEventListener('input', (event) => {
	let chance = event.target.value
	if (chance >= 1) {
		let percento = (1/chance)*100
		let headsStreak = Math.log2(chance);
		let kapow = chance/15000

		display.textContent = Number(percento.toFixed(4)); 
    	coin.textContent = Number(headsStreak.toFixed(2));
		kapowie.textContent = Math.floor(kapow);
	} else {
		display.textContent='undefined'
		coin.textContent='undefined'
	}
});
