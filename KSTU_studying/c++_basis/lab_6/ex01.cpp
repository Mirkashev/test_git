#include <iostream>
#include <array>
#include <iterator>

//добавить итераторы

int main() {

	int array_count = 4, arr_elem = 0, max_am = 0;
    //шаблонный контейнер array для демонстрации работы итератора
    std::array<int, 16> arr;

	int array[array_count][array_count];

	for(int i = 0; i < array_count; i++) {

		for(int j = 0; j < array_count; j++) {

			array[i][j] = arr_elem;
            arr[i * array_count + j] = arr_elem;
            arr_elem++;

		}

	}
    //собственно итератор
    auto begin {std::begin(arr)};
    auto end {std::end(arr)};
    int cost = 0;

    for(auto p{begin}; p != end; ++p) {

        if(cost % array_count == 0) std::cout << "\n";
        std::cout << *p << " ";
        cost++;

    }


	// for(int i = 0; i < array_count; i++) {

	// 	for(int j = 0; j < array_count; j++) {

	// 		std::cout << array[i][j] << " ";

	// 	}

	// 	std::cout << "\n";

	// }

    int i_start = 0, j_start, submatrix_count = 0, fake_sub = 0;

    std::cout << "\n-----------------------\n";

    //основные два цикла фор для вычета строк и столбцов
    for(i_start; i_start < array_count; i_start++) {

        for(j_start = 0; j_start < array_count; j_start++) {

            int j_temp = j_start, i_temp = i_start, j_end = array_count, i_end = array_count;
            //здесь происходит последовательное смещение для подсчёта субматриц справа налево
            while(i_temp > -1) {
                
                int temp_am = 0;

                for(int i = i_temp; i < i_end; i++) {

                    for(int j = j_temp; j < j_end; j++) {

                        if(i == 0 && i_end == array_count && j == 0 && j_end == array_count) {
                            fake_sub++;
                            break;
                        }

                        else std::cout << array[i][j] << " ";

                        temp_am = temp_am + array[i][j];

                    }

                    std::cout << "\n";

                }
                std::cout << "------------------\n";

                j_temp--;
                j_end--;

                if(j_temp == -1) {

                    i_temp--;
                    i_end--;
                    j_temp = j_start;
                    j_end = array_count;

                }

                if(temp_am > max_am) max_am = temp_am;

                submatrix_count++;

            }

        }

    }

    std::cout << "submatrix_count = " << submatrix_count - fake_sub << "\n";
    std::cout << "max submatrix amount = " << max_am << "\n";

}