const product=[
    {id:1, name:'lanevo',price:34590},
    {id:2,name:'max',price:4590},
    {id:3,name:'del',price:37886},
    {id:4,name:'mac',price:324590},
]
class Product{
    country='bangladesh'
   speak(talk){
    console.log(`takling about ${talk} `);
   }
}
const lanevo = new Product()
console.log(lanevo);
lanevo.speak('dsdff');
// class teacher{
//     constructor(name,subject) {
//         this.name=name;
//         this.subject=subject;
//     }
//     lecturar(subject){
//         console.log('sir is teacthing ');
//     }
// }
// const tapon=new teacher('tapon','physics');
// console.log(tapon);

// const rasid =new teacher('rasid','biology')
// console.log(rasid);
class teacher{
constructor(name,sub){
    this.name=name;
    this.sub=sub;

}
}
const majid=new teacher('majid','biology');
console.log(majid);