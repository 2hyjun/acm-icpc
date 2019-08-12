#include <stdio.h>

int main() {
	int cnt = 0;
	int org;
	int num;
	scanf("%d", &org);

	num = org;

	while (1) {
		cnt++;
		int two = num / 10;
		int one = num % 10;
		int sum = one + two;

		num = (sum % 10) + (num % 10) * 10;

		if (num == org) break;
	}
    printf("%d", cnt);
    return 0;
}
