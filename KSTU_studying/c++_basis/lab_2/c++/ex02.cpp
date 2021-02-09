#include <iostream>
#include <vector>

int main(void) {
    int array_count = 10;
    std::vector<int>arr(array_count);
    for (int i = 0; i < array_count; i++) {
        arr[i] = rand() % 11 - 5;
    }
    //полный список
    std::cout << "full array:" << "\n";
    for (int i = 0; i < array_count; i++) {
        std::cout << "[" << arr[i] << "]";
    }
    //ближайшие числа с одинаковым знаком
    std::cout << "\n" << "Numbers with the same sign:" << "\n";
    for (int i = 0; i < array_count - 1; i++) {
        if(arr[i] * arr[i + 1] > 0) {
            std::cout << "[" << arr[i] << "]" << "[" << arr[i + 1] << "]";
            break;
        }
    }
}