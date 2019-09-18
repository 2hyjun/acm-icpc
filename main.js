const readline = require('readline');
const input = [];

readline.createInterface(process.stdin, process.stdout)
	.on('line', line => input.push(line.trim()))
	.on('close', main);


function main() {
	let N = parseInt(input[0]);
	let sum = 1;
	while(N > 0) {
		sum *= N--;
	}

	console.log(sum);
}



