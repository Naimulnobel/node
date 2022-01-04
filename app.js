// const htttp= require('http')
const express= require('express')
const bodyParser= require('body-parser')
const adminRoute= require('./routes/admin')
const localRoute= require('./routes/shop')

const app = express()
app.use(bodyParser.urlencoded({ extended:false }))
app.use('/admin',adminRoute)
app.use(localRoute)
// app.use('/users',(req, res,next)=> {
//     res.send('<h1>users list</h1>')
// });
// app.use('/',(req, res,next)=> {
   
//     res.send('<h1>hello from expess</h1>')
    
// });
app.use((req, res, next)=> {
    res.status(404).send('<h1>404 Not Found</h1>')
})



app.listen(3000)