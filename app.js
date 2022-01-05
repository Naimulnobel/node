// const htttp= require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const adminData = require('./routes/admin')
const localRoute = require('./routes/shop')
const rootDir = require('./util/path')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminData.routes)
app.use(localRoute)
// app.use('/users',(req, res,next)=> {
//     res.send('<h1>users list</h1>')
// });
// app.use('/',(req, res,next)=> {

//     res.send('<h1>hello from expess</h1>')

// });
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})



app.listen(3000)