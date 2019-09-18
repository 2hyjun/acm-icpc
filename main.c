#include <stdio.h>
char BLANK = ' ';
char STAR = '*';
char **stars;

void star(int N, int x, int y, int blank);
void setStar(int x, int y, int blank);

int main() {
	int N;
	scanf("%d", &N);
	stars = malloc(N * sizeof(char *));
	int i, j;
	for (i = 0; i < N; i++) {
		stars[i] = malloc(N * sizeof(char));
	}

	star(N, 0, 0, 0);

	for (i = 0; i < N; i++) {
		for (j = 0; j < N; j++) {
			printf("%c", stars[i][j]);
		}
		printf("\n");
	}

	return 0;
}

void star(int N, int x, int y, int blank) {
	if (N == 3) {
		return setStar(x, y, blank);
	} else {
		int offset = N / 3;
		int i, j;
		for (i = 0; i < 3; i++) {
			for (j = 0; j < 3; j++) {
				star(N / 3, x + i * offset, y + j * offset, blank == 1 || (i == 1 && j == 1));
			}
		}
	}
}

void setStar(int x, int y, int blank) {
	if (blank == 0) {
		int i, j;
		for (i = 0; i < 3; i++) {
			for (j = 0; j < 3; j++) {
				if (!(i == 1 && j == 1)) {
					stars[x + i][y + j] = STAR;
				} else {
					stars[x + i][y + j] = BLANK;
				}
			}
		}
	} else {
		int i, j;
		for (i = 0; i < 3; i++) {
			for (j = 0; j < 3; j++) {
				stars[x + i][y + j] = BLANK;
			}
		}
	}
}
