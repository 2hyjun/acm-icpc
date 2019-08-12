const readline = require('readline');
const input = [];

readline.createInterface(process.stdin, process.stdout)
	.on('line', line => input.push(line.trim()))
	.on('close', main);


function main() {
	const result = new Array(10).fill(0);


	const sum = input.reduce((p, c) => {
		return p * Number(c);
	}, 1);

	const str = sum.toString();

	for (let i = 0; i < str.length; i++) {
		result[Number(str[i])]++;
	}

	result.forEach(r => {
		console.log(r);
	});
	return;

}



