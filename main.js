const readline = require('readline');
const input = [];

readline.createInterface(process.stdin, process.stdout)
	.on('line', line => input.push(line.trim()))
	.on('close', main);


function main() {
	const T = parseInt(input.shift());
	
	for(let i = 0; i < T; i++) {
		console.log(calc(input[i]));
	}
}


function calc(str) {
	let sum = 0;
	let cnt = 0;

	[...str].forEach(s => {
		if (s === 'O') {
			sum += ++cnt;
		} else if (s === 'X') {
			cnt = 0;
		}
	})

	return sum;
}


