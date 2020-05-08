const readline = require('readline');
const input = [];

// readline.createInterface(process.stdin, process.stdout)
// 	.on('line', line => input.push(line.trim()))
// 	.on('close', main);



// console.log(solution([
// 	    [1,1,0,1,1],
// 		  [0,1,1,0,0],
// 			[0,0,0,0,0],
// 			[1,1,0,1,1],
// 			[1,0,1,1,1],
// 			[1,0,1,1,1]]
// ))

//
// console.log(solution([
// 	    [1, 1, 0],
// 			[0, 0, 0],
// 			[1, 1, 1]
// 	]
// ))

function solution(v) {
	const lenX = v[0].length
	const lenY = v.length
	const visited = [...Array(lenY)].map(() => [...Array(lenX)].map(() => 0))
	const rst = []

	console.log(v)
	console.log(visited)

	function func(x, y, d = 0) {
		if (x >= lenX || x < 0) return d
		if (y >= lenY || y < 0) return d

		const n = v[y][x]
		if (n != 1) return d

		if (visited[y][x]) return d
		visited[y][x] = 1

		const d0 = d + 1
		console.log(x, y, "visited!", d0)
		const d1 = func(x + 1, y, d0)
		const d2 = func(x, y + 1, d1)
		const d3 = func(x - 1, y, d2)
		const d4 = func(x, y - 1, d3)
		return d4
	}

	v.forEach((i, yi) => {
		i.forEach((j, xi) => {
			const depth = func(xi, yi, 0)
			if (depth != 0) {
				console.log('------------------------')

				rst.push(depth)
			}
		});
	});

	console.log(rst)

	return [rst.length, Math.max(...rst)]
}






