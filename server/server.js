const express = require('express')
const app = express()
console.log('server running')

app.get('/server', (req, res, next) => {
    res.send("<div>Server Responded</div>")
})

app.listen(5000) //proxy will redirect to port 5000 from package.json