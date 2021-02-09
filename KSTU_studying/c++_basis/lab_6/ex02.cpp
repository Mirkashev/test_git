#include <iostream>
#include <string>
#include <vector>

/*Напишите метод, тасующий карточную колоду. Колода должна быть идеально перемешана. Перестановки карт должны быть равновероятными. Вы можете использовать идеальный генератор случайных чисел.*/


//рандомные неповторяющиеся числа
static void getSix (int *dst) {
    int sz, pos, i, src[36];
    for (i = 0; i < sizeof(src)/sizeof(*src); i++)
        src[i] = i + 1;
    sz = 36;
    for (i = 0; i < 36; i++) {
        pos = rand() % sz;
        dst[i] = src[pos];
        src[pos] = src[sz-1];
        sz--;
    }
}


int main() {

    //выбираем рандомную карту от 1 до 36, меняем местами с 1 значением, далее повторяем действие со 2 значением и т д

    std::vector<std::string> pack = { "6 of diamonds", "7 of diamonds", "8 of diamonds", "9 of diamonds", "10 of diamonds", "Jack of diamonds", "Queen of diamonds",
    "King of diamonds", "Ace of diamonds", "6 of hearths", "7 of hearths", "8 of hearths", "9 of hearths", "10 of hearths", "Jack of hearths", "Queen of hearths",
    "King of hearths", "Ace of hearths", "6 of Clubs", "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", "Jack of Clubs", "Queen of Clubs",
    "King of Clubs", "Ace of Clubs", "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades", "Jack of Spades", "Queen of Spades",
    "King of Spades", "Ace of Spades"};

    int count_of_cards = 36, numbers[36];


    //получаем рандомные неповторяющиеся числа
    getSix(numbers);

    for(int i = 0; i < count_of_cards; i++) {

        std::swap(pack[i], pack[numbers[i]]);

    }

    for(int i = 0; i < count_of_cards; i++) {

        std::cout << pack[i] << ", ";

        if(i != 0 && i % 2 == 0) std::cout << "\n";

    }
    return 0;

}