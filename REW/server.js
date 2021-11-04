const express = require("express")
const reload = require('reload')
let  app = express()
//app.get('/', (req, res) => res.send("HELLO FROM EXPRESS"));
app.use(express.static('public'))

app.get('/test', (req, res) => res.send("HELLO FROM EXPRESS"));

app.listen(3000,  () => console.log("Example app listening on port 3000!"));
reload(app);