// 1.===================================

const haveNumbers = (str) => {
const regExp = /^\d+$/;
    console.log(regExp.test(str));
}

haveNumbers("12345");
haveNumbers("12345a");
haveNumbers("abc123");
haveNumbers("!@#$46%");
haveNumbers("!@#$46egg%");

//2.============================================
let second = 0;
const intervalFrom = setInterval(() => {
    second++
    console.log("Прошла секунда")
},1000);

// 3.=======================================================

let count = 0;
const interval = setInterval(() => {
    count++
    document.querySelector("span").innerHTML = count},1000)

setTimeout(()=> {
    clearInterval(interval)
}, 10000)

// 4.=============================================================

const button = document.querySelector('#button');

button.onclick = () => {
    if (document.body.classList.contains('highlight')) {
        document.body.classList.remove('highlight');
    } else {
        document.body.classList.add('highlight');
    }
};
// 5===========================================
const request = new XMLHttpRequest();
request.open('GET', 'examp.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.onload = () => {
    const data = JSON.parse(request.response);
    console.log(data);
}
