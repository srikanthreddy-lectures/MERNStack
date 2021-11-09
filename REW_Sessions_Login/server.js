const express = require("express")
const reload = require('reload')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const session = require('express-session')

let  app = express()



//app.get('/', (req, res) => res.send("HELLO FROM EXPRESS"));
//app.use(express.static('public'))

app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    key:"userID",
    secret:"skr",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*60*24,
    },
}));



app.get('/api/login', (req, res) =>{

    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
      } else {
        res.send({ loggedIn: false });
      }


    //req.session.user = "Srikanth";
    //console.log(req.session);
    //const LocalStorage = require('node-localstorage').LocalStorage;
    //let localStorage = new LocalStorage('./scratch');
    //localStorage.setItem('session',JSON.stringify(req.session));
    //res.send(`Session set`);
});

app.post('/api/login', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    // query to db

    if (username=="bob" && password=="12345") {
        var result = {
            "result": [
              {
                "username":"bob", 
                "lastName": "Reddy",
                "age": 23,
                "role":"admin"
              },
            ]                                  
          }
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
      } else {
        res.send({ message: "User doesn't exist" });
      }
});

app.get('/api/test', (req, res) =>{
    console.log(req.session);
    res.send(`Hello From ${req.session.user}`);
});

app.get('/api/logout',(req,res) => {
    req.session.destroy();
    console.log(req.session);
    res.send(`Session Destoryed`);
});


//Handles any requests that don't match the ones 
const root = require("path").resolve(__dirname, "public");
app.use(express.static(root));
app.get('*', (req, res) => {
  res.sendFile("index.html", { root });
});
app.listen(3000,  () => console.log("Example app listening on port 3000!"));
reload(app);