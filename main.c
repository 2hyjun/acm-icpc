#include <stdio.h>

int main() {
	int size = 9;
	// scanf("%d", &size);

	int* arr = (int*)malloc(size * sizeof(int));

	int i = 0;

	for (i = 0; i < size; i++) {
		scanf("%d", arr + i);
	}

	int max = arr[0], maxCnt = 0;
	for (i = 1; i < size; i++) {
		if (arr[i] > max) {
			max = arr[i];
			maxCnt = i;
		}
	}

	printf("%d\n%d", max, maxCnt + 1);



    return 0;
}
