#include <iostream>
#include <vector>

/*Дан int x[5]; что такое &x + 1?

Придумать задачу демонстрирующую происходящее и объяснить. Ответить на вопрос :можно ли передать массив (обычный) как аргумент в функцию. Если да, то добавить пример, если нет, то объяснить почему и показать как это обойти и объяснить свой способ.*/

void print_array(int *array, int count) {

    std::cout << array << "\n" << &array[0] << "\n" << array + 1 << "\n" << &array[5]; 

}

int main() {

    int count_array = 5;
    int array[count_array];
    for(int i = 0; i < count_array; i++) {
        array[i] = rand() % 10;
    }
    print_array(array, count_array);
    return 0;
}