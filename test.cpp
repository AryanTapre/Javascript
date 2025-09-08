#include <iostream>
using namespace std; 

void print(int arr[], size_t& size) {
    if (arr == nullptr) {
        cout << "Operation aborted -- lends to access invalid memory!" << endl;
        return;
    }
    for (size_t i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << "\n";
}

int main() { 

    int arr[] {1,2,3,4};
    int* ptr = nullptr;
    size_t size = 4;
    print(arr, size);

    return 0;
}
