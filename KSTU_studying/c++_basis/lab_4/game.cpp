#include <iostream>
#include <vector>
#include <string>


void p_vector (std::vector<char> vect) {
	for (char i : vect) {
		std::cout << i << " ";
	}
	std::cout << "\n";
}


int main () {

    std::vector<std::string> word = {"clown", "autism", "icecream", "toy",
                                        "legal", "another", "game", "rectangle", "lamp",
                                        "bow", "cancer", "hamburger", "phone", "clock",
                                        "street", "clothes", "army", "bus", "cigarette",
                                        "information", "computer", "drugs", "dumbbell",
                                        "cub", "magic", "fire", "water", "tomato",
                                        "watermelon", "melon", "sand", "home", "slave",
                                        "master", "sun", "moon", "anime", "monkey", "dog",
                                        "robe", "manager", "music", "text", "copy", "coin",
                                        "money", "flower", "shower", "bath", "party"};
    
    int main_check = 1;
    while (main_check != 0) {
        std::cout << "game started" << "\n";
        int word_num = rand() % 49;
        //создать массив с нижними подчёркиваниями
        std::vector<char> hide_word;
        for(int i = 0; i < word[word_num].size(); i++) {
            hide_word.push_back(95);
        }
        int count_try = 5;
        while (count_try > 0) {
            system("cls");
            std::cout << count_try << " attempts left" << "\n";
            p_vector(hide_word);        
            char inpt_letter;
            std::cout << "\n";
            std::cin >> inpt_letter;
            int letter_in_check = 0;
            for(char i : hide_word) {
                if(inpt_letter == i) {
                    letter_in_check = 1;
                    break;
                }
                else letter_in_check = 0;
            }
            if(letter_in_check == 0) {
                int count_char = 0, count_check = 0, same_lttr_chck = 0;
                for (char i : word[word_num]) {
                    if(i == inpt_letter) {
                        //замена символа по индексу same_lttr_chck - нужен для предотвращения начисления попытки за две одинаковые буквы в слове
                        hide_word[count_char] = inpt_letter;
                        same_lttr_chck++;
                        if(same_lttr_chck == 1) {
                            count_try++;
                        }
                    }
                    //переменная count_char считает количество найденных в скрытом массиве букв, при совпадении найденных символов с количеством символов в слове = победа
                    count_char++;
                    int quit = 0;
                    for(int i = 0; i < word[word_num].size(); i++) {
                        if(word[word_num][i] == hide_word[i]) quit++;
                        else quit = 0;
                    }
                    if(quit == word[word_num].size()) {
                        system("cls");
                        std::cout << "You win!" << "\n" << "Word is ";
                        p_vector(hide_word);
                        count_try = -999;
                        break;
                    }
                }
                same_lttr_chck = 0;
            }
            else {
                count_try++;
            }
            count_try--;
        }
        //перезапуск игры
        if(count_try == 0) system("cls");
        std::cout << "restart game? press Y to continue" << "\n";
        char restart_check;
        std::cin >> restart_check;
        restart_check = toupper(restart_check);
        if(restart_check == 89) main_check = 1;
        else main_check = 0;
    }
    return 0;
}