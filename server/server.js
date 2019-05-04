const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/../dist`))

// app.get("/", function(req, res) {
//   res.send("hello world")
// })
console.log("app is listening on port 3000");

app.listen(3000)
