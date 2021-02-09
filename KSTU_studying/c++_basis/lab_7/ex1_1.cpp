#include <iostream>
#include <cmath>

class Rectangle {

private:
    int m_cord_array[8];
    //проверка на прямоугольник
    void check_rect() {

        if(m_cord_array[0] == m_cord_array[4] && m_cord_array[2] == m_cord_array[6] && m_cord_array[1] == m_cord_array[3] && m_cord_array[5] == m_cord_array[7]) {
            //используем предикатную функцию для проверки прямоугольника на принадлежность к квадратам
            if(pred(sqrt(pow(m_cord_array[2] - m_cord_array[0], 2)), sqrt(pow(m_cord_array[5] - m_cord_array[1], 2))) == true) std::cout << "square is get!\n";

            else std::cout << "rect is get!\n";

        }

        else {

            std::cout << "invalid coords, try again!\n";

            set_coords();

        }

    }
    //предикатная функция для проверки сторон
    bool pred(int a, int b) {

        if(a == b) return true;
        else return false;

    } 

public:
    //ввод координат
    void set_coords() {

        int coord;

        bool check = false;

        std::cout << "input upper left angle, then upper right angle, then down left angle, then down right angle\n";

        for(int i = 0; i < 8; i++) {
            //0(1;3) 1(4;3) 2(1;1) 3(4;1)
            std::cin >> coord;

            if(coord >= 0 && coord <= 20) {

                m_cord_array[i] = coord;

            }

            else {

                std::cout << "invalid coords, try again!\n";
                check = true;
                break;

            }

        }

        if(check == true) set_coords();
        else check_rect();

    }

    void lenght() {

        if(m_cord_array[2] - m_cord_array[0] > m_cord_array[5] - m_cord_array[1]) std::cout << "lenght: " << sqrt(pow(m_cord_array[2] - m_cord_array[0], 2)) << "\n";

        else std::cout << "lenght: " << sqrt(pow(m_cord_array[5] - m_cord_array[1], 2)) << "\n";

    }

    void width() {

        if(m_cord_array[2] - m_cord_array[0] < m_cord_array[5] - m_cord_array[1]) std::cout << "width: " << sqrt(pow(m_cord_array[2] - m_cord_array[0], 2)) << "\n";

        else std::cout << "width: " << sqrt(pow(m_cord_array[5] - m_cord_array[1], 2)) << "\n";

    }

    void perimeter() {

        std::cout << "perimeter: " << sqrt(pow(m_cord_array[2] - m_cord_array[0], 2)) * 2 + sqrt(pow(m_cord_array[5] - m_cord_array[1], 2)) * 2 << "\n";

    }

    void area() {

        std::cout << "area: " << (sqrt(pow(m_cord_array[2] - m_cord_array[0], 2)) + sqrt(pow(m_cord_array[5] - m_cord_array[1], 2))) * 2 << "\n";

    }

};



int main() {

    Rectangle test;

    test.set_coords();
    test.lenght();
    test.width();
    test.perimeter();
    test.area();

    return 0;

}