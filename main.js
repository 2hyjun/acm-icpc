const readline = require('readline');
const input = [];

readline.createInterface(process.stdin, process.stdout)
	.on('line', line => input.push(line.trim()))
	.on('close', main);


function main() {
	const N = parseInt(input[0], 10);
	const stars = new Array(N);
	for (let i = 0; i < N; i++) {
		stars[i] = new Array(N).fill(' ');
	}
	star(N, 0, 0, false);
	stars.forEach(s => {
			console.log(s.join(''))
			});


	function star(N, x, y, blank) {
		if (N === 3) {
			setStar(x, y, blank)
		} else {
			const offset = N / 3;
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					star(N / 3, x + i * offset, y + j * offset, blank || (i === 1 && j === 1))
				}
			}
		}
	}

	function setStar(x = 0, y = 0, blank) {
		// console.log(x, y, blank)
		if (!blank) {
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					if (i === 1 && j === 1) {
					} else {
						stars[x + i][y + j] = '*'
					}
				}
			}
		} else {
		}
	}
}
