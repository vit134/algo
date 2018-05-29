/* class Algo {
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
console.log(algo.insertionSort());
console.timeEnd('insertionSort');


class LessonArray {
    constructor() {
        this._obj = {
            className: 'open menu'
        }
    }

    _indexOf(what, where) {
        return where.indexOf(what);
    }

    //добавление подстроки в строку разбитой пробелами
    addClass(cls, obj = this._obj) {
        let classes = obj.className.split(' ');
        
        if (this._indexOf(cls, classes) === -1) {
            classes.push(cls);
        }

        obj.className = classes.join(' ');

        console.log(obj.className)
    }

    // приведение строки вида background-color к backgroundColor
    camelize(str) {
        let arr = str.split('-');

        const a = arr.map((el, i) => {
            if (i !== 0) {
                el = el[0].toUpperCase() + el.slice(1);
            }

            return el;
        });

        console.log(a.join(''));
    }

    //Удаленеие подстроки из строки разбитой пробелами
    removeClass(cls, obj = {className: 'open menu open'}) {
        let classes = obj.className.split(' ');

        for (let i = 0; i < classes.length; i++) {
            if (classes[i] === cls) {
                classes.splice(i, 1);
            }
        }

        console.log(classes.join(' '));
    }

    // фильтрация массива на "месте". Удаление чисел вне диапазона a..b
    filterrangeInPlace(a, b, arr = [5, 3, 8, 1]) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= a || arr[i] >= b) {
                arr.splice(i, 1);
            }
        }

        console.log(arr);
    }

    reverseFilter(arr = [5, 2, 1, -10, 8]) {
        console.log(arr.sort().reverse());
    }

    copyAndSort(arr = ["HTML", "JavaScript", "CSS"]) {
        let sortArr = arr.map(el => {
            return el;
        });

        sortArr.sort();

        console.log(arr, sortArr);
    }

    randomSort(arr = [1, 2, 3, 4, 5]) {
        arr = arr.sort((a, b) => {
            return Math.random() - 0.5;
        })

        console.log(arr);
    }

    objectSort() {
        var vasya = { name: "Вася", age: 23 };
        var masha = { name: "Маша", age: 18 };
        var vovochka = { name: "Вовочка", age: 6 };

        var people = [ vasya , masha , vovochka ];

        people.sort((a, b) => {
            return a.age - b.age;
        })

        console.log(people);
    }

    oneList(arr = [1,2,3,4]) {
        const list = {};
        let entry = list;

        for (let i = 0, item; item = arr[i++];) {
            entry.next = {};
            entry.value = item;

            entry = entry.next;
        }

        console.log(list);
    }
}

const lessonArray = new LessonArray();

lessonArray.addClass('new');
lessonArray.addClass('open');
lessonArray.addClass('me');

lessonArray.camelize('background-color');
lessonArray.camelize('list-style-image');
lessonArray.camelize('-webkit-transition');

lessonArray.removeClass('open');
lessonArray.removeClass('blabla');
lessonArray.removeClass('menu');

lessonArray.filterrangeInPlace(1, 4);
lessonArray.reverseFilter();
lessonArray.copyAndSort();
lessonArray.randomSort();
lessonArray.objectSort();
lessonArray.oneList();
 */

import './style.css';

const displayHeight = 10;
const displayWidth = 20;

const screen = document.querySelector('.screen');
let arr = [];

for (let i = 0; i < displayHeight * displayWidth; i++) {
    let cell = document.createElement('div');
    cell.className = 'screen__cell';

    screen.appendChild(cell);

    cell.addEventListener('click', function (e) {
        this.classList.toggle('active');
        
        if (this.classList.contains('active')) {
            arr.push(i)
        } else {
            const ind = arr.indexOf(i);
            arr.splice(ind, 1);
        }

        console.log(arr);
    })
}

const numWidth = 5;
const numHeight = displayHeight;

const num_2 = [10, 6, 7, 8, 14, 19, 24, 28, 32, 31, 35, 40, 41, 42, 43, 44];

const getOffset = (num, i) => {
    return num.map(el => {
        return {
            x: el / numWidth,
            y: el
        }
    });
}