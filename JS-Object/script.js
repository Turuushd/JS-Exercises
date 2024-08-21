// 1. Нохой нэртэй хоосон объект үүсгэ
// Нохойн объектыг консол дээр хэвлэ
// Нохойны объектын үүлдэр, нэр, өнгө, нас, хайр татсан шинж чанарыг нэмнэ үү. 
// Нохойн объектоос үүлдэр, нэр, хөл, өнгө, нас, хайр татсан шинж чанарын value - г аваарай

// const dog = {
//     dogBreed: "german shephard",
//     dogName: "dog",
//     dogColor: "black",
//     dogYear: 2,
//     dogQualities: "playfulness",
// };
// console.log(dog)

// 2. Машин нэртэй объект  
// let car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2019,
//   color: "Red"
// };
// 2.1 "color" property-г солих
// 2.2 "owner" нэртэй шинэ property нэмэх
// 2.3 Бүх property-руу хандаж log дээр хэвлэх 

// let car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2019,
//   color: "Red"
// };

// car.color = "black";
// car.owner = "you";
// console.log(car);

// 3. Create an object called 'person' with properties name, age, and address.
// 3.1 The address property should be an object with properties street, city, and country.
// 3.2 Access and log the properties of the `address` object. 

// 3. Нэр, нас, хаяг бүхий 'хүн' нэртэй объект үүсгэ.
// 3.1 Хаягийн шинж чанар нь гудамж, хот, улсын шинж чанартай объект байх ёстой.
// 3.2 `хаяг` объектын шинж чанаруудад нэвтэрч, бүртгэнэ.

// const person = {
//     personName: "John",
//     personAge: 25,
//     personAddress: {
//         countryAddress: "MGL",
//         cityAddress: "UB",
//         streetAddress: "Yavuukhulan"
//     }
// }
// console.log(person.personName, person.personAge, person.personAddress);

// 4. Create an object called book with properties title, author, and year.
// Delete the year property from the book object.
// Log the updated book object.

// Номын нэр, зохиогч, он гэсэн шинж чанартай объект үүсгэ.
// Номын объектоос жилийн шинж чанарыг устгана уу.
// Шинэчлэгдсэн номын объектыг бүртгэх.

// const book = {
//     title: "Don Quixote",
//     author: "Miguel de Cervantes",
//     year: 1605
// };
// delete book.year
// console.log(book)

// 5. Create an object called movie with properties title, director, and year.
// Log all the keys and values of the movie object to the console.

// Кино нэртэй объектыг шинж чанарын нэр, найруулагч, жилээр үүсгэ.
// Кино объектын бүх түлхүүр, утгыг консол руу оруулна уу.

// const movie = {
//     title: "Titanic",
//     director: "James Cameron",
//     year: 1997
// };
// console.log(movie.title, movie.director, movie.year)

// 6. Create two objects representing two people's details.
// Merge them into a single object.
// Log the merged object.

// Хоёр хүний ​​дэлгэрэнгүй мэдээллийг харуулсан хоёр объект үүсгэ.
// Тэдгээрийг нэг объект болгон нэгтгэ.
// Нэгтгэсэн объектыг бүртгэх.

// const detail = {
//     bat: {
//         batAge: 25,
//         batNickname: "taba",
//     },
//     bold: {
//         boldAge: 25,
//         boldNickname: "dold",
//     }
// };
// console.log(detail.bat, detail.bold)

// 7. Create an object data with properties firstName, lastName, and age.
// Rename the firstName property to name.
// Log the updated data object.

// FirstName, LastName болон нас шинж чанаруудтай объектын өгөгдлийг үүсгэ.
// FirstName шинж чанарыг нэрлэхийн тулд өөрчил.
// Шинэчлэгдсэн өгөгдлийн объектыг бүртгэх.

// const data = {
//     firstName: "John",
//     lastName: "Dell",
//     age: 25,
// }
// delete data.firstName
// data.name = 'John'
// console.log(data)

// 8. Create an object userProfile with properties username, email, and age.
// Write code to check if email exists and log it; if it doesn't, assign a default value and log the updated object.

// Хэрэглэгчийн нэр, имэйл, нас шинж чанаруудтай userProfile объект үүсгэ.
// Имэйл байгаа эсэхийг шалгахын тулд код бичээд бүртгүүлэх; Хэрэв тийм биш бол өгөгдмөл утгыг оноож, шинэчлэгдсэн объектыг бүртгэнэ.

// const userProfile = {
//     userName: "John Dell",
//     email: "",
//     age: 25
// }
// if(userProfile.email.length == 0){
//     userProfile.email = prompt("Email oruulna uu:")
//     console.log(userProfile.email)
// }else{
//     console.log('email bn')
// }