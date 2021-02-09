#include <iostream>
#include <fstream>
#include <vector>

int main() {

    std::ifstream fin("test.txt");
    std::ifstream fin1("text.txt");

    std::vector<int> arr_simp;
    std::vector<int> arr_luck;

    for(int n; fin >> n; ) {
        arr_simp.push_back(n);
    }
    fin.close();
    for(int n; fin1 >> n; ) {
        arr_luck.push_back(n);
    }
    fin1.close();

    std::ofstream out("text.txt", std::ofstream::out | std::ofstream::trunc);
    std::ofstream outt("test.txt", std::ofstream::out | std::ofstream::trunc);

    int check = 0;
    for (int i : arr_simp) {
        check = 0;
        for (int j : arr_luck) {
            if(i != j) {
                check = 1;
            }
            else {
                check = 0;
                break;
            }
        }
        if(check == 1) {
            out << i << " ";
        }
    }
    out.close();

    for (int i : arr_luck) {
        check = 0;
        for (int j : arr_simp) {
            if(i != j) {
                check = 1;
            }
            else {
                check = 0;
                break;
            }
        }
        if(check == 1) {
            outt << i << " ";
        }
    }
    outt.close();

    fin.open("test.txt");
    fin1.open("text.txt");

    for(int n; fin >> n; ) {
        std::cout << n << " ";
    }
    fin.close();

    std::cout << "\n";
    for(int n; fin1 >> n; ) {
        std::cout << n << " ";
    }
    fin1.close();

    return 0;
}