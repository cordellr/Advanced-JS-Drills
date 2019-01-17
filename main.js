/* Hoisting and Functions practice
console.log('some text'); //logged first
let avg = findAvg(2,2);
console.log('some text', avg); //logged third
function findAvg (a,b) {
    console.log('some text'); //logged second
    var answer = (a + b) / 2;
    return answer;
}
*/

let fruits = ['apple', 'peach', 'orange'];

nameFunction();
function nameFunction() {
    console.log('Hello Cordell')
}


function printFruits() {
    let favFruit;
    favFruit = fruits[1];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }

    printFavFruit();

    let leastFav = fruits[2];
    console.log(leastFav);

}


printFruits();

let alertFunction = function() {
    alert("This is a test alert to practice hoisting");
}

alertFunction();
