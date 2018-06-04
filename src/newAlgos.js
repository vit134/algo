//Глбуокое копирование объекта
let obj = {
    a: 'a',
    b: 'b',
    c: true,
    d: {
        bla: false,
        foo: 'bar'
    }
}

const deepClone = (obj) => {
    let clone = {};
    for (let prop in obj) {
        if (typeof obj[prop] === 'object') {
            clone[prop] = deepClone(obj[prop]);
        } else {
            clone[prop] = obj[prop];
        }
    }

    return clone;
}

//Разложить односвязное дерево
const list = {
    value: 'root',
    next: {
        value: 'a',
        next: {
            value: 'b',
            next: {
                value: 'c',
                next: {
                    value: 'd',
                    next: null
                }
            }
        }
    }
};

//Решение с помощью цикла
const expand = (list) => {
    let tmp = list;
    let obj = {};

    while(tmp.next) {
        obj[tmp.value] = tmp.next.value;
        tmp = tmp.next;
    }

    return obj;
}

//Решение с помощью рекурсии
const expandRec = (list) => {
    if (list.next && list.next !== null) {
        expandRec(list.next);
    }
}

//Функция compose 
const fn4 = (a) => {
    console.log('fn4', a, a + 4)
    return a + 4;
}

const fn3 = (b) => {
    console.log('fn3', b, b + 3)
    return b + 3;
}
const fn2 = (c) => {
    console.log('fn2', c, c + 2)
    return c + 2;
}
const fn1 = (d) => {
    console.log('fn1', d, d + 1)
    return d + 1;
}

function compose() {
    const fns = arguments;

    return (result) => {
        for (var i = fns.length - 1; i > -1; i--) {
            result = fns[i].call(this, result);
        }

        return result;
    }    
}

//Жадный алгоритм

let money = [1, 2, 5, 10, 50, 100, 500, 1000];

let result = {};

let need = 128;

for (let i = money.length - 1; i >= 0; i--) {
    if (money[i] <= need) {
        let count = parseInt(need / money[i]);
        result[money[i]] = count;

        need -= count * money[i];
    }
}