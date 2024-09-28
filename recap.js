const a=56;
const number=[56,7,8]
const person={
    name:'saikib khan'

}

const massage=`hi im ${person.name} has a : ${a} acess to ${number[2]}`
console.log(massage);
const { x,y,...other}={x:2,y:5,z:4}
console.log(...other);