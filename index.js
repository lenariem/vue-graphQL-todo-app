const express = require('express')
const path = require('path')
const sequelize = require('./utils/database')
const todoRoutes = require('./routes/todo')
const app = express()
const PORT = process.env.PORT || 3000

//to use folder public
app.use(express.static(path.join(__dirname, 'public')))

//to use body
app.use(express.json())

//routes
app.use('/api/todo', todoRoutes)

//to use index.html
app.use((req, res, next) => {
    res.sendFile('/index.html')
})

//DB connection
async function start() {
    try {
      await sequelize.sync()
      app.listen(PORT)
    } catch (e) {
      console.log(e)
    }
  }
  
  start()

