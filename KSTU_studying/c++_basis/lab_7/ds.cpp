#include <iostream>

class Cit {

public:

	std::string *name;

	Cit(std::string &a) {

		name = new std::string;
		*name = a;

	}
	~Cit() {

		delete name;

		std::cout << "all fine\n";

	}

	std::string ret() {

		return *name;

	}

};
 
int main() {

	std::string col = "asd";

	Cit bank(col);

	std::cout << bank.ret();

}