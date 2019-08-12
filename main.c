#include <stdio.h>

int main() {
	int size = 8;

	int* arr = (int*)malloc(sizeof(int) * size);

	int i = 0;
	for (i = 0; i< size; i++) {
		scanf("%d", arr + i);
	}

	int diff = arr[1] - arr[0];
	int mixed = 0;



	for (i = 0; i < size - 1; i++) {
		int newDiff = arr[i + 1] - arr[i];
		if (diff != newDiff) {
			mixed = 1;
			break;
		} else if (newDiff != 1 && newDiff != -1) {
			mixed = 1;
			break;
		}

	}

	if (mixed) {
		printf("mixed");
	} else if (diff == 1) {
		printf("ascending");
	} else {
		printf("descending");
	}

	
    return 0;
}
