import { join } from "path";

/* const sections = document.querySelectorAll('section');

const setSectionHeight = () => {
    sections.forEach((el) => {
        el.dataset.height = el.offsetHeight;
    })
}

const toogleSection = () => {
    
    sections.forEach((el) => {
        el.addEventListener('click', function(e) {
            console.log('click')
            e.stopPropagation();

            if (el.classList.contains('close')) {
                //el.style.height = `${el.dataset.height}px`;
                el.classList.remove('close');
            } else {
                console.log(el.children[0].offsetHeight);
                //el.style.height = `${el.children[0].offsetHeight + 40}px`;
                el.classList.add('close');
            }
        })
    })
}

// простенькая очередь :)
class Queue {
    constructor(items) {
        this._queueStartIndex = 0;
        this._queue = Array.isArray(items) ? [
            ...items
        ] : [];
    }

    add(item) {
        this._queue.push(item);
    }

    addAll(items) {
        this._queue.push(...items);
    }

    poll() {
        return !this.isEmpty() && this._queue[this._queueStartIndex++];
    }

    isEmpty() {
        return this._queueStartIndex === this._queue.length;
    }
}

class Trie {
    constructor(words, limit) {
        this._trie = this._createNode();
        this._words = Array.from(words); // запоминаем исходный массив
        this._limit = limit;

        this._buildTree();
    }

    _createNode() {
        return {
            edges: {},
            wordEnds: []
        }
    }

    _buildTree() {
        const words = this._words;
        const trie = this._trie;
        const prevDate = Number(new Date());
        let nodeCount = 0;

        for (let i = 0; i < words.length; i++) { // перебираем слова
            const currentWord = words[i].toLowerCase();
            for (let k = 0; k < currentWord.length; k++) { // перебираем все суффиксы слова
                let currentNode = trie;
                for (let j = k; j < currentWord.length; j++) { // записываем суффикс в дерево
                    if (!currentNode.edges[currentWord[j]]) {
                        currentNode.edges[currentWord[j]] = this._createNode();
                        nodeCount++;
                    }
                    currentNode = currentNode.edges[currentWord[j]];
                }
                currentNode.wordEnds.push(i); // запоминаем индекс строки в последнем символе
            }
        }

        console.log(trie);
        console.log(`trie building: ${Number(new Date()) - prevDate} ms`);
        console.log(`nodes count: ${nodeCount}`);
    }

    find(input) {
        input = input.toLowerCase();
        const prevDate = Number(new Date());
        // берем Set, чтобы избавиться от дублей
        const results = new Set();

        let currentNode = this._trie;
        // проверяем, что такая подстрока вообще есть, если нет, сразу возвращаем пустой массив
        for (let i = 0; i < input.length; i++) {
            if (currentNode.edges[input[i]]) {
                currentNode = currentNode.edges[input[i]];
            } else {
                console.log(`trie search: ${Number(new Date()) - prevDate} ms`);
                return [];
            }
        }

        // начинаем обход дерева, чтобы найти исходные строки
        const queue = new Queue([currentNode]);

        wh:
        while (!queue.isEmpty()) {
            currentNode = queue.poll();
            
            for (let i = 0; i < currentNode.wordEnds.length; i++) {
                results.add(currentNode.wordEnds[i]);
                // перестаем искать, если нашли 10
                if (results.size === this._limit) {
                    break wh;
                }
            }
            queue.addAll(Object.values(currentNode.edges))
        }

        console.log(`trie search: ${Number(new Date()) - prevDate} ms`);

        // возвращаем непосредственно строки
        return Array.from(results)
            .map(index => this._words[index]);
    }
}


window.trie = new Trie(window.defaultRoads, 10);

console.log(window.trie.find('твер')) */

//развернуть строку 
function curtail(str = 'AAABBACDDDAFF') {
    let count = 1;
    let result = [];
    
    for (let i = 0; i < str.length; i++) {
        let cur = str.charAt(i);
        if (cur !== str.charAt(i - 1)) {
            result.push(cur);
            count = 1;
        } else {
            if (typeof result[result.length - 1] == 'number') {
                result[result.length - 1] = ++count
            } else {
                result.push(++count);
            }
        }
        
    }

    return result.join('');
}

//console.log('A3B2ACD3AF2' === curtail());

function flat(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flat(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

let notFlatArr = [1, [2], [3, [[[4]]]]];
let notFlatArr1 = [[0, 1], [2, 3], [4, 5]];

function flat1(arr) {
    return arr.reduce(function (a, b) {
        return a.concat(b);
    })
}

//console.log('total res', flat(notFlatArr));
//console.log('total res1', flat1(notFlatArr1));

function isAnagram(str1, str2) {
    if (str1 === str2) return false;
    
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

//console.log(isAnagram('стационар', 'соратница'))

function correctBrackets(str) {
    // объект с открывающими и закрывающими скобками
    let opening = {
        '[': ']',
        '{': '}',
        '(': ')',
        '<': '>',
    };

    // простенький стэк
    let stack = [];

    // результурующа строка
    let result = '';

    // пробегаем по всем симовлам входной строки
    for (let i = 0; i < str.length; i++) {
        let skobka = str[i];

        
        if (opening[skobka]) { //если скобка открывающаяся кладем ее в стэк
            stack.push(skobka);        
        } else {
            // проверяем длину стэка, если в стэке пусто значит мы уже закрыли все скобки 
            // и строка не подлежит исправлению
            if (stack.length === 0) {
                return null;
            }
            // берем скобку из стека и находим её закрывающую
            skobka = opening[stack.pop()];
        }

        // добавляем к результирующей строке скобку
        result += skobka;
    }

    // если после всех манипуляций в стэке остались скобки значит строка не правильная
    if (stack.length > 0) {
        return null;
    }

    return result;
}

console.log(correctBrackets('((]){]'));