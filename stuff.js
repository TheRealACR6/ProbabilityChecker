const denom = document.getElementById('prob');
const display = document.getElementById('chanceDisplay');
const coin = document.getElementById('coin');
const kapowie = document.getElementById('lightning');
const butt = document.getElementById('roll')
const rollOut = document.getElementById('rollOutput')

denom.addEventListener('input', (event) => {
	let chance = event.target.value
	rollOut.textContent = ''
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

butt.addEventListener('click', (event) => {
	let randy = Math.random()
	let chance = (1/denom.value)*100
	if (randy < chance/100) {
		rollOut.textContent = 'Event occured!'
	} else {
		rollOut.textContent = 'Event did not occur. :c'
	}
});
