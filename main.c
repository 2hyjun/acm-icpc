#include <stdio.h>

int main() {
	int T;

	scanf("%d", &T);
	int i = 0;
	for (i  = 0; i < T; i++) {
		int l, r;
		scanf("%d %d", &l, &r);
		printf("%d\n", l + r);
	}

    return 0;
}
