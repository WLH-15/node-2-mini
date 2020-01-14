const express = require('express'),
      booksCtrl = require('./controller/books_controller'),
      app = express();

app.use(express.static(__dirname + "/../build"));
app.use(express.json());

//endpoints
app.get('/api/books', booksCtrl.read);
app.post('/api/books', booksCtrl.create);
app.put('/api/books/:id', booksCtrl.update);
app.delete('/api/books/:id', booksCtrl.delete);

const port = 4000;
app.listen(port, () => console.log(`Server running on ${port}`));