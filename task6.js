const instractor=[
    {name:"nodi",age:23,position:'seniour'},
    {name:"akil",age:45,position:'junior'},
    {name:"shobuj",age:54,position:'seniour'},
    ]

const reduce=instractor.reduce((previous,current)=>previous+current.age,0);
console.log(reduce);





//     let sum=0;
// for(i=0;i<instractor.length;i++){
//      let ageall= instractor[i].age;
//    sum=sum+ageall
// }
// console.log(sum);