#include <iostream>

int main() {
    float deg = 0, rad = 0.0174533, result;
    std::cin >> deg;
    result = deg * rad;
    std::cout << "deg to rad = " << result;
    return 0;
}