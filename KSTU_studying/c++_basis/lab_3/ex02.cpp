#include <iostream>
#include <unistd.h>

int main() {
    int h, m, s = -1;
    std::cin >> h >> m;

    while(true) {
        s++;
        if(s < 60) {
            std::cout << h << ":" << m << ":" << s;
            sleep(1);
            system("cls");
        }
        else {
            s = -1;
            m++;
            if(m > 59) {
                m = 0;
                h++;
                if(h > 23) {
                    h = 0;
                }
            }
        }
    }
    return 0;
}