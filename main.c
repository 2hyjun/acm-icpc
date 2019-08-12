#include <stdio.h>

int main() {
    int l, r;
    scanf("%d", &l);
    scanf("%d", &r);


    printf("%d\n", l * ( r % 10));
    printf("%d\n", l * ((r % 100) / 10));
    printf("%d\n", l * (r / 100));

    printf("%d", l * r);
    return 0;
}
