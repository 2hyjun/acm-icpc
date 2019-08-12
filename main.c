#include <stdio.h>

int main() {
	int T;

	scanf("%d", &T);
	int i = 0;
	for (i  = 0; i < T; i++) {
		int l, r;
		scanf("%d %d", &l, &r);
		printf("Case #%d: %d + %d = %d\n", i + 1, l, r, l + r);
	}

    return 0;
}
