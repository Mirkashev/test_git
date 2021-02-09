#include <iostream>
#include <vector>
#include <string_view>
#include <string>
#include <fstream>


/*Создать текстовый файл с набором слов (1000 слов). Найти самое встречающееся
слово. Предусмотреть вероятность того что файла может не быть. Воспользоваться
enum для контроля точек выхода из программы с определенными ошибками. (при
возникновении ошибки программа должна завершаться с определенным кодом,
который будет указан в вашем энаме ). Воспользоватся string_view/*/

//примечание: для string_view не гарантируется наличие нулевого символа на конце, поэтому я не могу напрямую передавать из файла слова в массив из string_view

/*Рассказать подробно про enum: */


enum ErrorId {

    SUCCESS,
    ERROR_OPENING_FILE

};


void most_recent(std::vector<std::string>array, std::string_view winrd) {

    int count_word = 0, max = 0;

    for(auto i : array) {
        for(auto j : array) {
            if(i == j) {
                count_word++;
            }
            if(max < count_word) {
                max = count_word;
                winrd = i;
            }
        }
    }

    std::cout << winrd;

}

int main() {

    std::ifstream file_in("words.txt");

    std::string word_s;
    std::vector<std::string>words;
    std::string_view win_word;
    
    if(file_in) {
        while(!file_in.eof()) {
            file_in >> word_s;
            words.push_back(word_s);
        }

        most_recent(words, win_word);

        file_in.close();
        return SUCCESS;
    }

    else return ERROR_OPENING_FILE;

}