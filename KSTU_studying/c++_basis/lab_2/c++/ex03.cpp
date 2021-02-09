#include <iostream>
#include <vector>

int main(void) {
    int array_count = 10;
    std::vector<int>arr(array_count);
    for (int i = 0; i < array_count; i++) {
        arr[i] = rand() % 11 - 5;
    }
    //список
    std::cout << "array:" << "\n";
    for (int i = 0; i < array_count; i++) {
        std::cout << "[" << arr[i] << "]";
    }
    //сортированный список
    int check = 1;
    while(check == 1) {
        check = 0;
        for (int i = 0; i < array_count / 2 - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                std::swap(arr[i], arr[i + 1]);
                check = 1;
            }
        }
    }
    check = 1;
    while(check == 1) {
        check = 0;
        for (int i = array_count / 2; i < array_count - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                std::swap(arr[i], arr[i + 1]);
                check = 1;
            }
        }
    }
    std::cout << "\n" << "sorted array:" << "\n";
    for (int i = 0; i < array_count; i++) {
        std::cout << "[" << arr[i] << "]";
    }
}