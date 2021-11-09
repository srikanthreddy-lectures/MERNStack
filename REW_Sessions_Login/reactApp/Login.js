import React, { useState } from "react";
import "./Login.css";
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    } from "@material-ui/core";

const Login = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("AAAA");

    const login = () => {
        fetch("/api/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({username: username, password: password})
        }).then((response) => {
            response.json();
            /*if (response.data.message) {
                setLoginStatus(response.data.message);
              } else {
                setLoginStatus(response.data[0].username);
              }
              */
        }).then((data) =>{console.log(data)} );
      };

   return (
    <div>
        <AppBar position="static" alignitems="center" color="primary">
            <Toolbar>
                <Grid container align='center' wrap="wrap">
                    <Grid item>
                        <Typography variant="h6">Login</Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

        <Grid>
            <Paper className="paperStyle" elevation={10}>
                
                    <TextField label='Username' placeholder='Enter username' fullWidth
                     onChange={(e) => {
                        setUsername(e.target.value);
                      }} 
                    required/>
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth 
                     onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    required/>
                    <Button type='submit' onClick={login} className="btnStyle" color='primary' variant="contained"  fullWidth>Login</Button>
               
            </Paper>
        </Grid>
        <h1>{loginStatus}</h1>
    </div>
)};

export default Login;