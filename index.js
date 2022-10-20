const express = require('express')
const path = require ('path')
const app = express()
const port = 3000

//app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'))
})

app.get('/stephanie', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'stephanie.html'))
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/comment', (req, res) => {
  let data = {userID: 121029102, userName: stephanie}
  let getName = () =>{
    return data.userName
  }
  let name = getName
  res.send(name)
})

app.post('/', (req, res) => {
  res.send('Received a post request!')
})

app.post('/comment', (req, res) => {
  res.send('Received a post request!')
})