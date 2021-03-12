

const mongoose = require('mongoose')
// const { Schema } = mongoose;
//
// const  BookSchema = new Schema({
//         // currentUser: String,
//
//         // title: String,
//         // authors:[{
//         //   type: String,
//         //   required: 'Author can not be blank'
//         // }],
//         // cover: String,
//         // description: String,
//         book:[
//               {
//                 title: String,
//                 author: String
//               },
//               // a lot item here
//               // ...
//               {
//                 Cover: String,
//                 description: String
//               }
//             ]
//
//
// },
// {collection: 'books'}
// )


const Book = mongoose.model(
  "Book",
   new mongoose.Schema({

    title: String,
    authors:[{
      type: String,
      required: 'Author can not be blank'
    }],
    cover: String,
    description: String,
    currentUser: String,

  })

);

module.exports = Book;
// module.exports = mongoose.model('Book', BookSchema)


// var sketchSchema =  mongoose.Schema({ name: String, sketchData : Array
//   });
// var SavedSketch = mongoose.model('Sketch', sketchSchema);
// // });
//
//
// var userSchema =  new mongoose.Schema({
//   username: {type: String, unique : true},
//   password: {type: String},
//   firstname: String,
//   lastname: String,
//
//   sketches:[sketchSchema]
//
//
// var User = mongoose.model('User', userSchema);
//
// module.exports = User;

//
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// {
// currentUser: String,
// "book" : [
// {
// authors:
//         [
//               {
//                 type: String,
//                 required: 'Author can not be blank'
//               }
//         ]
// },
//     {
//         title: String,
//         cover: String,
//         description: String
//
//     }
// ]
// }
