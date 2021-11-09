import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { Router,Route, Switch } from 'react-router-dom';
import Home from './Home'
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
    const [loginStatus, setLoginStatus] = useState("");
    const [data, setData] = useState("");
    const [error, setError] = useState(null);

    const login = () => {
        fetch("/api/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({username: username, password: password})
        }).then(res => res.json())
        .then(
          (result) => {
            setData(JSON.stringify(result));
            if (result.message) {
                setLoginStatus(result.message);
              } else {
                setLoginStatus(result.result[0].username + " sucessfully authenticated");
            }
          },
          (error) => {
            setError(error);
          }
        )
      };

      useEffect(() => {
        fetch("/api/login").then(res => res.json()).then((result) => {
            //console.log("--->Use Effect: "+result.loggedIn)
          if (result.loggedIn == true) {
             // console.log("--->Use Effect: "+result.user.result[0].username)
            setLoginStatus(result.user.result[0].username + " is already logged-in" );
          }
        });
      }, []);

      if (error) {
        return <div>Error: {error.message}</div>;
      }
    else if(loginStatus != ""){
        return <div><Home /></div>//Need to use Routes
    
    }else{
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
                            <Button onClick={login} className="btnStyle" color='primary' variant="contained"  fullWidth>Login</Button>
                    
                    </Paper>
                </Grid>
                <h1>{loginStatus}</h1>
                <h1>{error}</h1>
            </div>
            
        )}
};

export default Login;