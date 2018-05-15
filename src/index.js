class Algo {
    constructor(A) {
        this._A = A;
        
        this._methods = new Map();
    }

    addMethod(name, method) {
        this._methods.set(name, method);
    }

    getMethod(name) {
        return this._methods.get(name);
    }

    bubleSorting() {
        let A = this._A;

        var l = A.length;
        for (var i = 0; i < l - 1; i++) {
            for (var j = 0; j < l - 1 - i; j++) {
                if (A[j] > A[j + 1]) {
                    var tmp = A[j + 1];
                    A[j + 1] = A[j];
                    A[j] = tmp;
                }
            }
        }

        return A;
    }

    selectionSort() {
        let A = this._A;
        let l = A.length

        for (let i = 0; i < l - 1; i++) {
            var min = i; 
            
            for (let j = i + 1; j < l; j++) {
                if (A[j] < A[min]) {
                    min = j;
                }
            }

            var tmp = A[min];
            A[min] = A[i];
            A[i] = tmp;
        }

        return A;
    }

    insertionSort() {
        //[14, 23, 1, 4, 3, 16, 20, 43, 34, 55, 76];

        let A = this._A;

        var n = A.length;
        for (var i = 0; i < n; i++) {
            var v = A[i],
                j = i - 1;
            
            while (j >= 0 && A[j] > v) {
                A[j + 1] = A[j];
                j--;
            }

            A[j + 1] = v;
        }
        return A;
    }
}


const entry = [14, 23, 1, 4, 3, 16, 20, 43, 34, 55, 76];
const algo = new Algo(entry);



console.log('bubleSorting');
console.time('bublesorting');
console.log(algo.bubleSorting());
console.timeEnd('bublesorting');

console.log('selectionSort');
console.time('selectionSort');
console.log(algo.selectionSort());
console.timeEnd('selectionSort');

console.log('insertionSort');
console.time('insertionSort');

algo.insertionSort();
console.timeEnd('insertionSort');