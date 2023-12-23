// const name = 'yoshi';
// console.log(name);

/*
CTRL + / = comment out a highlighted code block

*/

// const greet = (name) => {
//     console.log(`Hello, ${name}`)
// }

// greet('mario');
// greet('yoshi');

setTimeout(()=>{
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(()=>{
    console.log('in the interval');
}, 1000);
