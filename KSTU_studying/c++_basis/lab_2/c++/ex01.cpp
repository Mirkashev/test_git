#include <iostream>
#include <vector>

int main (void) {
    int array_count = 10;
    std::vector<int>arr(array_count);
    for (int i = 0; i < array_count; i++) {
        arr[i] = rand() % 11;
    }
    //полный список
    std::cout << "full array:" << "\n";
    for (int i = 0; i < array_count; i++) {
        std::cout << "[" << arr[i] << "]";
    }
    //список с чётными элементами
    std::cout << "\n" << "multiple of two array:" << "\n";
    for (int i = 0; i < array_count; i++) {
        if(i % 2 == 0) {
            std::cout << "[" << arr[i] << "]";
        }
    }
} 