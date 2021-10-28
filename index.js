require('dotenv').config()
const express = require('express')
const { MongoClient } = require('mongodb');

const app = express()
const port = 5000


const uri = `mongodb+srv://${process.env.Db_USER}:${process.env.DB_PASS}@cluster0.1hb6l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run () {
  try{
    
    await client.connect()
    console.log('data base connected');

  }
  finally{
    // await client.close()
  }
}

run().catch(console.dir)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})