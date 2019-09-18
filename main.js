const readline = require('readline');
const input = [];

readline.createInterface(process.stdin, process.stdout)
	.on('line', line => input.push(line.trim()))
	.on('close', main);


function main() {
	const N = parseInt(input[0], 10);
	const one = []
	const two = []
	const three = []

	for (let i = N; i > 0; i--) {
		one.push(i);
	}

	console.log(one);
}



