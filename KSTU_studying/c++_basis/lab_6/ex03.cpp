#include <iostream>

/*Разработка алгоритма, обнаруживающего в массиве все пары целых чисел, сумма которых равна заданному значению*/

int main() {

    int count = 40, array_of_numbers[count], amount_of_num;

    for(int i = 0; i < count; i++) array_of_numbers[i] = rand () % 50;

    for(auto i : array_of_numbers) std::cout << i << " ";

    std::cout << "\n";

    std::cin >> amount_of_num;

    int alg_count = 0;

    for(int i = alg_count; i < count - 1; i++) {

        if(array_of_numbers[i] + array_of_numbers[i + 1] == amount_of_num) std::cout << "para num " << i << " = " << array_of_numbers[i] << " & " << i + 1 << " = " << array_of_numbers[i + 1] << "\n";

    }


    return 0;

}