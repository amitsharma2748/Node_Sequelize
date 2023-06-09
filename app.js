const express = require('express');
const session=require('express-session');
const { postBook, fetchBook, deleteBook, updateBook, getLogin } = require('./controller');
const app = express();
const sequelize = require('./database');
 

app.use(express.json())
app.use(session({secret:"mySecret",resave:false,saveUninitialized:false}))
app.get('/login',getLogin)
app.post('/book', postBook)
app.get('/book', fetchBook)
app.delete('/book/:id', deleteBook)
app.put('/book/:id', updateBook)
sequelize.sync().then((res) => {
    app.listen(8800, () => {
        console.log('Connected to server')
    })
}).catch((err) => console.log(err))
// app.get('/', (req, res) => {
//     res.json("hello world")
// })
// app.get('/book', (req, res) => {
//     q = "select * from books"
//     db.query(q, (err, data) => {
//         if (err) {
//             return res.json(err)
//         }
//         return res.json(data)
//     })
// })
// app.post('/book', (req, res) => {
//     p = "INSERT INTO books (`title`,`desc`) VALUES (?)"
//     const values = [
//         req.body.title,
//         req.body.desc
//     ]
//     db.query(p, [values], (err, data) => {
//         if (err) {
//             return res.json(err)
//         }
//         return res.json("Book has been created successfully")
//     })
// })
// app.delete('/book/:id', (req, res) => {
//     p = "DELETE FROM books WHERE id =?"
//     const bookId = req.params.id
//     db.query(p, [bookId], (err, data) => {
//         if (err) {
//             return res.json(err)
//         }
//         return res.json("Book has been deleted successfully")
//     })
// })
// app.put('/book/:id', (req, res) => {
//     p = "UPDATE books SET `title`=? `desc`=? WHERE id =?"
//     const bookId = req.params.id
//     const values = [
//         req.body.title,
//         req.body.desc
//     ]
//     db.query(p, [...values,bookId], (err, data) => {
//         if (err) {
//             return res.json(err)
//         }
//         return res.json("Book has been UPDATED successfully")
//     })
// })
