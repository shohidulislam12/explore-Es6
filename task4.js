const oddArray=[1,3,5,7,9];
// const evenArray=[];
// for(let number of oddArray){
//     number=number+1;
//     evenArray.push(number)
// }
// console.log(evenArray);
const evenarray=oddArray.map(x=>x+1);
console.log(evenarray);

const array2=[33,50,79,78,90,101,30];
const filter=array2.filter(x=>x%10===0);
console.log(filter);
const find=array2.find(x=>x%10===0);
console.log(find);