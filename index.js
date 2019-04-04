// libs
const config = require('config-yml')
const express = require('express')
const helmet = require('helmet')
const exphbs = require('express-handlebars')
const logger = require('morgan')

// app
const app = express()
app.locals.footerText = config.corp.footerText
app.locals.companyName = config.corp.companyName

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main'
}))

app.set('view engine', '.hbs')

// middleware
app.use(logger('combined'))
app.use('/public', express.static('public'))
app.use(helmet())

// routing
const router = require('./router')
app.use(router)

// light it up!
app.listen(config.app.port, () => console.info('app is running!'))
