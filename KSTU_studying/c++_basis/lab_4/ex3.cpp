#include <iostream>

/*Дан указатель: double **p = 0; Выполните следующие задания (решения можно оформлять внутри функции main):

* создайте конструкцию, изображенную на рисунке;

* выведите число, указанное в квадратике, на экран;

* после этого удалите все динамические объекты.

(указатель указывает на указатель, который указывает на значение)*/

int main() {

    double **p = 0;
    double val = 2;

    p = new double*;
    *p = new double;

    *p = &val;
    p = &(*p);
 
    std::cout << **p;

    delete *p;
    delete p;


    return 0;

}