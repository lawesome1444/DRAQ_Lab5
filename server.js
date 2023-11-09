const express = require('express')
const app = express()
const port = 3000

//Waiting for a HTTP request with a get
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello '+req.params.name);
  })

//Book API HTTP request
app.get('/api/books', (req, res) => {
    //Return Book Array
    const data = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ];
    res.status(200).json({
        myBooks:data,
        "message":"Hello from the API"
    });
  })

  //Listen for localhost:4000/test
  app.get('/test', (req, res) => {
    //Go to the same file directory as server.js and open index.html
    //(They are in the same folder so this is works)
    res.sendFile(__dirname + '/index.html');
  })

  //Routed from /test with fname and lname data
  app.get('/name', (req, res) => {
    res.send("Hello "+req.query.fname+" "+req.query.lname);
  })

//The server will constantly listen for HTTP requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})