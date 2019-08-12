const readline = require('readline');
const input = [];

readline.createInterface(process.stdin, process.stdout)
	.on('line', line => input.push(line.trim()))
	.on('close', main);


function main() {
	const length = 10;
	const set = new Set([]);

	input.forEach(i => {
		set.add(i % 42);
	});

	console.log(set.size);
}



