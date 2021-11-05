const express = require("express")
const reload = require('reload')

const session = require('express-session')

let  app = express()
//app.get('/', (req, res) => res.send("HELLO FROM EXPRESS"));
app.use(express.static('public'))

app.use(session({
    key:"userID",
    secret:"skr",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*60*24,
    },
}));

app.get('/login', (req, res) =>{
    req.session.user = "Srikanth";
    console.log(req.session);
    //const LocalStorage = require('node-localstorage').LocalStorage;
    //let localStorage = new LocalStorage('./scratch');
    //localStorage.setItem('session',JSON.stringify(req.session));
    res.send(`Session set`);
});

app.get('/test', (req, res) =>{
    console.log(req.session);
    res.send(`Hello From ${req.session.user}`);
});

app.get('/logout',(req,res) => {
    req.session.destroy();
    console.log(req.session);
    res.send(`Session Destoryed`);
});


app.listen(3000,  () => console.log("Example app listening on port 3000!"));
reload(app);