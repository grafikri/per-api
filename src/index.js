const db = require('./../database')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());
app.use(express.text());


app.get('/', (req, res) => { 
  res.send("Hello world")
})

app.post('/analytics', (req, res) => {
  /**
   * @type {{name: string, date: string}} 
   */
  const data = JSON.parse(req.body)

  res.send({ id: db.analytics.save({ ...data, date: Date.now() }) })
})



app.get('/analytics', async (req, res) => {
  /**
   * @type {{startDate?: string, endDate?: string}}
   */
  const query = req.query
  
  res.send(await db.analytics.fetch(parseInt(query.startDate), parseInt(query.endDate)))
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})