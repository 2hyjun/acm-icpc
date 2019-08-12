#include <stdio.h>

int main() {

	int hour, minutes;
	scanf("%d %d", &hour, &minutes);

	minutes -= 45;

	if (minutes < 0) {
		minutes += 60;
		hour -= 1; 
	}

	if (hour < 0) {
		hour += 24;
	}

	printf("%d %d", hour, minutes);


    return 0;
}
