#include <iostream>
#include <cmath>
#include <fstream>
#include <vector>
#include <string>

int main() {
    std::ifstream fin25("test1.txt");
    std::ifstream fin12("text1.txt");


    std::string test;
    while (! fin25.eof() ) {
        getline (fin25, test);
        std::cout << test;
    }
    // for(int n; fin25 >> n; ) {
    //     std::cout << n << " ";
    // }
    std::cout << "\n";
    for(int n; fin12 >> n; ) {
        std::cout << n << " ";
    }

    return 0;
}