#include <iostream>
#include <string>
#include <vector>
#include <fstream>

/*Напишите программу которая будет высчитывать минимальное расстояние
(выражаемое количеством слов) между любыми двумя словами в файле*/


enum ErrorId {

    SUCCESS,
    ERROR_OPENING_FILE

};

int main() {

    std::ifstream file_in("testt.txt");

    int count = 0, min, min2 = 99999;
    std::string word, temp_word, temp_word_2;
    std::vector<std::string>words;

    std::cin >> temp_word >> temp_word_2;

    if(file_in) {

        while(!file_in.eof()) {

            file_in >> word;
            words.push_back(word);

        }

        for(int i = 0; i < words.size(); i++) {

            if(words[i] == temp_word) {

                for(int j = i + 1; j < words.size(); j++) {

                    if(words[j] == temp_word_2) {

                        min = count;
                        count = 0;
                        break;

                    }

                    count++;

                }

            }

            if(min2 > min) min2 = min;
            
        }

        std::cout << min2;

        file_in.close();

        return SUCCESS;

    }

    return ERROR_OPENING_FILE;
    
}