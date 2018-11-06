// const person={
//     name:'itai',
//     age:29,
//     loction: {
//         city:'givat-shmuel',
//         temp: '26'
//     }
// }
// const {name,age}=person;
// console.log(`${name} is ${age}`)

const book = {
    name:'must die',
    aouther:'kill him',
    publisher:{
        name:'penguin'
    }
}
const{ name: publisherName='self-published'}=book.publisher;
console.log(publisherName);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name,,medium='$2.25']=item;
console.log(`medium ${name} coast ${item[3]}`);
