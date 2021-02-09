#include <iostream>
#include <vector>

int main(void) {
    int array_count = 5;
    float neg_num = 0;
    float count_neg_num = 0;
    std::vector<int>arr(array_count);
    for (int i = 0; i < array_count; i++) {
        arr[i] = rand() % 11 - 8;
    }
    //список
    std::cout << "array:" << "\n";
    for (int i = 0; i < array_count; i++) {
        std::cout << "[" << arr[i] << "]";
    }
    //среднее арифметическое отрицательных элементов списка
    std::cout << "\n" << "average of negative numbers:" << "\n";
    for (int i = 0; i < array_count; i++) {
        if(arr[i] < 0) {
            neg_num = neg_num + arr[i];
            count_neg_num++;
        }
    }
    std::cout << neg_num / count_neg_num;
}