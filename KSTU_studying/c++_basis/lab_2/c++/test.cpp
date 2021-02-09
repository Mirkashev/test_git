#include <iostream>
#include <vector>
#include <algorithm>

// bool comp(std::vector<int>a, std::vector<int>b) {

// }

int main(void) {
    int array_count = 3;
    std::vector<std::vector<int>>arr(array_count, std::vector<int>(array_count));
    for (int i = 0; i < array_count; i++) {
        for (int k = 0; k < array_count; k++) {
            arr[i][k] = rand() % 5;
        }
    }
    std::cout << "array:" << "\n";
    for (int i = 0; i < array_count; i++) {
        for (int k = 0; k < array_count; k++) {
            std::cout << arr[i][k];
        }
        std::cout << "\n";
    }
    std::cout << arr.begin();
    //сортировка с помощью встроенной функции
    std::sort(arr.begin(), arr.end());
    // int check = 1;
    // while (check == 1) {
    //     check = 0;
    //     for (int i = 0; i < array_count - 1; i++) {
    //         for (int k = 0; k < array_count - 1; k++) {
    //             if(i == k) {
    //                 if(arr[i][k] > arr[i + 1][k + 1]) {
    //                     std::swap(arr[i][k], arr[i + 1][k + 1]);
    //                     check = 1;
    //                 }
    //             }
    //         }
    //     }
    // }
    // check = 1;
    // while (check == 1) {
    //     check = 0;
    //     for (int i = array_count - 1; i > 0; i--) {
    //         for (int k = array_count - 2; k > -1; k--) {
    //             if(i + k == array_count - 1) {
    //                 if(arr[i][k] < arr[i - 1][k + 1]) {
    //                     std::swap(arr[i][k], arr[i - 1][k + 1]);
    //                     check = 1;
    //                 }
    //             }
    //         }
    //     }
    // }
    std::cout << "sorted array:" << "\n";
    for (int i = 0; i < array_count; i++) {
        for (int k = 0; k < array_count; k++) {
            std::cout << arr[i][k];
        }
        std::cout << "\n";
    }
}