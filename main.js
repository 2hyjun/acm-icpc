const readline = require('readline');
const input = [];

readline.createInterface(process.stdin, process.stdout)
	.on('line', line => input.push(line.trim()))
	.on('close', main);


function main() {
	const arr = JSON.parse(input[0])
	console.log(solution(arr))
}


function solution(v) {
	// v = // [[1, 4], [3, 4], [3, 10]]
	var rstX = 0;
	var rstY = 0;
	v.forEach((em) => {

		const x = em[0]
		const y = em[1]

		if (!rstX && v.filter(e => e[0] == x).length === 1) {
			rstX = x
		}

		if (!rstY && v.filter(e => e[1] == y).length === 1) {
			rstY = y
		}
	})
	return [rstX, rstY]
}



