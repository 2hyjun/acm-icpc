const readline = require('readline');
const input = [];

// readline.createInterface(process.stdin, process.stdout)
// 	.on('line', line => input.push(line.trim()))
// 	.on('close', main);
//
//
// function main() {
// 	const n = parseInt(input[0])
// 	console.log(solution(n))
// }

console.log(solution(5))


function solution(n) {
	var rst = "1";
	for (let i = 2; i <= n; i++) {
		// i = 1
		const r = calc(rst)
		console.log(i, r)
		rst = r
	}

	return rst
}

function calc(str) {
	var rst = "";
	const buffer = [null, null] // number, count
	const splited = str.split('')
	splited.forEach(number => {
		if (buffer[0] == number) {
			++buffer[1]
		} else {
				if (buffer[0] && buffer[1]) {
					rst += `${buffer[0]}${buffer[1]}`
				}
				buffer[0] = number
				buffer[1] = 1
		}
	})

	return rst + `${buffer[0]}${buffer[1]}`
}



