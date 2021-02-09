#include <iostream>
#include <string>
#include <string_view>

int main() {


    std::string word = "hell";

    std::string_view word_ptr = word;

    std::string &word_ptr_1 = word;

    std::cout << word_ptr << " " << word_ptr_1 << "\n";

    word[0] = 49;

    std::cout << word_ptr << " " << word_ptr_1 << "\n";


    return 0;

}