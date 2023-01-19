console.log('Hello from the main.js file');
console.log('Hello ajain');

/*
    Javascript Functions!
*/

// Regularly Named Funtions

function addNums(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2
};

console.log(addNums);
//
console.group(addNums());


//adding params

function addNums2(num1, num2){
    console.log(num1, num2)
    return num1 + num2
}

console.log(addNums2);

console.log(addNums2(100, 200))

// exercise 2 with function

let numbers1 = [10, 12, -9, 23, -25, 14];

function addPositives(numbers){
    let total = 0
    for (let num of numbers){
        if (num > 0){
            total += num
        }
    }
    return total
}

console.log(addPositives(numbers1));

//Default parameters
// function funcName(param1, param2=defaultValue)

function addNums3(num1, num2 = 100){
    return num1 + num2
};

//spread operator

console.log(addNums3(10));
console.log(addNums3(10, 50));

function acceptAll(x, ...all){
    console.log(x);
    console.log(all)
};

acceptAll('a', 'b', 'c', 'd');


// function expression 
// car (let, const)

var addSomeNums = function(){
    let num1 = 1000;
    let num2 = 9000;
    return num1 + num2
};

console.log(addSomeNums);

//arrow function expression
//syntax: () => { code to execute }
//syntax: (param1, param2, etc.) => { code t execute }
//syntax: () => { code t execute }

var myFirstArrowFuntion = ()  => {};
console.log(myFirstArrowFuntion);
console.log(typeof myFirstArrowFuntion);


// exercise 1 as an arrow 

function firstNonConsecutive(anArr){
    for (let i = 0; i < anArr.length; i++){
        if (anArr[i] + 1 !== anArr[i+1]){
            return i+1
        }
    }
    return -1
}