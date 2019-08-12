#include <stdio.h>

int main() {
	int size;
	scanf("%d", &size);

	int* arr = (int*)malloc(size * sizeof(int));

	int i = 0;

	for (i = 0; i < size; i++) {
		scanf("%d", arr + i);
	}

	int min = arr[0], max = arr[0];
	for (i = 0; i < size; i++) {
		if (arr[i] < min) {
			min = arr[i];
		} else if (arr[i] > max) {
			max = arr[i];
		}
	}

	printf("%d %d", min, max);



    return 0;
}
