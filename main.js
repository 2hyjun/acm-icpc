const readline = require('readline');
const input = [];

readline.createInterface(process.stdin, process.stdout)
	.on('line', line => input.push(line.trim()))
	.on('close', main);


function main() {
	const T = parseInt(input.shift());

	input.forEach(line => {
		const arr = line.split(' ');
		const size = arr.shift()
		const sum = arr.reduce((p, c) => p + parseInt(c), 0);
		const avg = sum / parseInt(size);


		const good = arr.filter(i => i > avg).length;

		console.log(`${((good / size) * 100).toFixed(3)}%`);



	});
}



