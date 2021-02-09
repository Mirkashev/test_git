#include <iostream>
#include <vector>

int main(void) {
    int array_count = 4;
    std::vector<std::vector<int>>arr(array_count, std::vector<int>(array_count));
    // std::vector<int>arr(array_count);
    // int arr[array_count][array_count];
    for (int i = 0; i < array_count; i++) {
        for (int k = 0; k < array_count; k++) {
            arr[i][k] = rand() % 10;
        }
    }
    std::cout << "array:" << "\n";
    for (int i = 0; i < array_count; i++) {
        for (int k = 0; k < array_count; k++) {
            std::cout << arr[i][k];
        }
        std::cout << "\n";
    }
    //главная диагональ
    int check = 1;
    while (check == 1) {
        check = 0;
        for (int i = 0; i < array_count - 1; i++) {
            for (int k = 0; k < array_count - 1; k++) {
                if(i == k) {
                    if(arr[i][k] > arr[i + 1][k + 1]) {
                        std::swap(arr[i][k], arr[i + 1][k + 1]);
                        check = 1;
                    }
                }
            }
        }
    }
    //побочная диагональ
    check = 1;
    while (check == 1) {
        check = 0;
        //от 3 до 0(невкл)
        for (int i = array_count - 1; i > 0; i--) {
            //от 2 до 0(вкл)
            for (int k = array_count - 2; k > -1; k--) {
                if(i + k == array_count - 1) {
                    if(arr[i][k] < arr[i - 1][k + 1]) {
                        std::swap(arr[i][k], arr[i - 1][k + 1]);
                        check = 1;
                    }
                }
            }
        }
    }
    std::cout << "sorted array:" << "\n";
    for (int i = 0; i < array_count; i++) {
        for (int k = 0; k < array_count; k++) {
            std::cout << arr[i][k];
        }
        std::cout << "\n";
    }
}