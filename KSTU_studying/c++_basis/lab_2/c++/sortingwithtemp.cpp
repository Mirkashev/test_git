#include <iostream>
#include <vector>
#include <algorithm>

void printMatrix(std::vector<std::vector<int>>&arr, int array_count) {

    for (int i = 0; i < array_count; i++) {
        for (int k = 0; k < array_count; k++) {
            std::cout << arr[i][k];
        }
        std::cout << "\n";
    }
}

void sortMatrix(std::vector<std::vector<int>>&arr, int array_count){

    std::vector<int>temp_main(array_count);
    std::vector<int>temp_other(array_count);

    //main diagonal
    for (int i = 0; i < 4 ; i++) {
		temp_main[i] = arr[i][i];
	}

    std::sort(temp_main.begin(), temp_main.end());

    for (int i = 0; i < 4 ; i++) {
		arr[i][i] = temp_main[i];
	}

    //other diagonal
    for (int i = 3, k = 0; i > -1 && k < 4 ; i--, k++) {
		temp_other[k] = arr[i][k];
	}

    std::sort(temp_other.begin(), temp_other.end(), [](int a,int b){
		return a > b;
	});

    for (int i = 3, k = 0; i > -1 && k < 4 ; i--, k++) {
		arr[i][k] = temp_other[k];
	} 
} 

int main() {

    int array_count = 4;

    std::vector<std::vector<int>>arr(array_count, std::vector<int>(array_count));
    for (int i = 0; i < array_count; i++) {
        for (int k = 0; k < array_count; k++) {
            arr[i][k] = rand() % 10;
            // std::cin >> arr[i][k];
        }
    }
    
    std::cout << "array:" << "\n";
    printMatrix(arr, array_count);
    sortMatrix(arr, array_count);
    std::cout << "sorted array:" << "\n";
    printMatrix(arr, array_count);
    return 0;
}