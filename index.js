const express = require('express')
const path = require('path')
const {graphqlHTTP} = require('express-graphql')
const sequelize = require('./utils/database')
const schema = require('./graphql/schema')
const resolver = require('./graphql/resolver')
const app = express()
const PORT = process.env.PORT || 3000

//to use folder public
app.use(express.static(path.join(__dirname, 'public')))

//to use body
app.use(express.json())

//to use graphql
app.use(graphqlHTTP({
  schema: schema,
  rootValue: resolver
}))

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

