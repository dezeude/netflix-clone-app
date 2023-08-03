//imports
const api = require('./api')
const express = require('express')
//routers
const browse = require('./routers/browse')

//start the server
const app = express()
const port = 5000
console.log(`server running at ${port}`)

//middleware
app.use('/browse', browse)

// app.use((req, res, next) => {
//     console.log('request received')
//     fetch(`${api.url}/3/movie/11?api_key=${api.key}`)
//     .then((resp) => {return resp.json()})
//     .then(resp => console.info(resp))
//     res.send("Request Received")
//     next()
// })

//instantiate server at port
app.listen(port) //proxy will redirect to port 5000 from package.json