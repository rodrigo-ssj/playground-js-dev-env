import path from 'path';
import open from 'open';
import express from 'express';

const port = 3000
const app = express()

app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../src/index.html')
  )
})

app.listen(port, err => {
  if (err)
    return console.err(err)

  open(`http://localhost:${port}`)
})
