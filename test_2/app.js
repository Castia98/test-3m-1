// Async===========================
const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        displayTitles(data);
    } catch (error) {
        console.error(error);
    }
};

const displayTitles = (products) => {
    const output = document.querySelector('#output');
    output.innerHTML = '';
    products.forEach(product => {
        const titleElement = document.createElement('p');
        titleElement.innerHTML = product.title;
        output.appendChild(titleElement);
        console.log(product.title);
    });
};
fetchProducts();
//цвета ===========================

const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
};

const buttons = document.querySelectorAll('#button-container button');

buttons.forEach(button => {
    button.onclick = () => {
        const color = button.getAttribute('data-color');
        changeBackgroundColor(color);
    };
});
//извлечение чисел=========================
const extractNumbers = (str) => {
    const matches = str.match(/\d+/g);
    if (!matches) return [];
    return matches.map(Number);
};

console.log(extractNumbers("a1fg5hj6"));
console.log(extractNumbers("no numbers here"));
console.log(extractNumbers("abc123def456ghi789"));
console.log(extractNumbers("0a2b4c6d8"));

//фибоначчи================================
const fibonacciWithDelay = (n, a = 0, b = 1) => {
    if (n === 0) {
        console.log(a);
        return;
    }
    console.log(a);
    setTimeout(() => {
        fibonacciWithDelay(n - 1, b, a + b);
    }, 1000);
};
fibonacciWithDelay(12);
//=========================
const btn = document.querySelector('#getDataBtn')
const fetchData = async () => {
    try {
        const response = await fetch('persons.json');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};
btn.onclick = fetchData;
//счетчик============================
const counter = document.querySelector('#counter');
let count = 0;

const updateCounter = () => {
    if (count <= 100) {
        counter.textContent = count++;
        setTimeout(updateCounter, 1);
    }
};
updateCounter();
// БЛОК==========================
const block = document.querySelector('#block');
const toggleButton = document.querySelector('#toggleButton');

toggleButton.addEventListener('click', () => {
    if (block.classList.contains('hidden')) {
        block.classList.remove('hidden');
        toggleButton.innerHTML = 'Скрыть блок';
    } else {
        block.classList.add('hidden');
        toggleButton.innerHTML = 'Показать блок';
    }
});
