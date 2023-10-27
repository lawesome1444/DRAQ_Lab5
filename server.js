const express = require('express')
const app = express()
const port = 4000

//Waiting for a HTTP request with a get
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

app.get('/hello', (req, res) => {
    res.send('Hello ')
  })

//The server will constantly listen for HTTP requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})