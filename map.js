const numbers=[4,5,6,7,8];
function doubleIt(num){
    return num*2;
}


const result=numbers.map(doubleIt);
//console.log(result);

console.log(numbers.map(x=>x*2));


// const doubles=[];
// for(const num of numbers){
//     const double=num*2;
//     doubles.push(double)
// }
//console.log(doubles);