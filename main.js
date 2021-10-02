// const person ={
//     firstname: 'John',
//     lastname: 'Jalosjos',
//     age: '21',
//     hobbies: ['music', 'movies', 'sports'],
//     address:{
//         street: 'Looc Maribago',
//         city: 'Lapu-lapu',
//         state: 'Cebu'
//     }
// }

// console.log(person.hobbies[1]);
// const  {firstname, lastname, address: {city}} = person;
// console.log(city)

// person.email = 'John@gmail.com';
// console.log(person)

// const todos=[
//     {
//         id: 1,
//         task: 'take out trashcan',
//         isCOmpleted: true
//     },
//     {
//         id: 2,
//         task: 'Meeting with the dentist',
//         isCOmpleted: true
//     },
//     {
//         id: 1,
//         task: 'study programming',
//         isCOmpleted: false
//     },
// ];

// console.log(todos)
// //const {id:{task}} = todos;
// console.log(todos[1].task)

// const todoJson = JSON.stringify(todos);
// console.log(todoJson);

// const a = new Array();
// let number = prompt("Enter n: ");
// while(number != 0){
//     a.push(number);
//     number = prompt("Enter n: ");
//     if(number < 0){
//         number = prompt("Enter n: ");
//     }
//     else if(number == 0){
//         const evens = new Array();
//         for(let i = 0; i < a.length; i++ ){
//             if(i < 0){
//                 delete a[1];
//             }
//             else if(i % 2 == 0){
//                 evens.push(i);
//             }
//         }
//         console.log(evens);
//         let isEven = true;
//         if(evens == true){
//             console.log(`The highest EVEN integer is ${Math.max(evens)}`);
//         }
//         else{
//             console.log('No EVEN integer found!')
//         }
//     }
// }
