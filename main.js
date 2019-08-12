const readline = require('readline');
const input = [];

readline.createInterface(process.stdin, process.stdout)
	.on('line', line => input.push(line.trim()))
	.on('close', main);


function main() {
	const length = Number(input.shift());
	const nums = input[0].split(' ').map(i => Number(i));
	const max = Math.max(...nums);

	const sum = nums.reduce((p, c) => {
		return p + c / max * 100
	}, 0);


	console.log(sum / length);


}



