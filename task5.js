const instractor=[
{name:"nodi",age:23,position:'seniour'},
{name:"akil",age:45,position:'junior'},
{name:"shobuj",age:54,position:'seniour'},
]
//const filter=instractor.filter(x=>x['position']=="seniour")
const filter=instractor.filter(x=>x.position=="seniour")
const name=filter.map(x=>x=x.name);
console.log(...name);
