const product=[
    {id:1, name:'lanevo',price:34590},
    {id:2,name:'max',price:4590},
    {id:3,name:'del',price:37886},
    {id:4,name:'mac',price:324590},
]
//map
// const names=product.map(x=>x.name);
// console.log(names);
const names=product.map(x=>x.price);
console.log(names);


const filter=product.filter(x=>x.price<50000);
console.log(filter[0].price);
const foreach=product.forEach(x=>console.log(x.id));
const find=product.find(x=>x.price>40000);
console.log(find);
const total=product.reduce((acum,current)=>acum+current.price,0);
console.log(total);