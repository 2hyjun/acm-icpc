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

function solution(bishops) {
	var set = new Set()
	bishops.forEach(bs => {
		set.add(bs)
		func(set, bs, 1, 1)
		func(set, bs, 1, -1)
		func(set, bs, -1, 1)
		func(set, bs, -1, -1)
	})

	return 64 - set.size
}

function func(set, origin, dX, dY) {
	const next = getPosition(origin, dX, dY)
	if (next != null) {
		set.add(next)
		return func(set, next, dX, dY)
	}

	return set
}


function getPosition(origin, dX, dY) {
	const x = origin[0].charCodeAt(0) + dX
	const y = parseInt(origin[1]) + dY

	if (x < 'A'.charCodeAt(0) || x > 'H'.charCodeAt(0)) {
		return null
	}

	if (y < 1 || y > 8) {
		return null
	}

	return String.fromCharCode(x) + y
}