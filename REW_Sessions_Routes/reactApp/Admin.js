import React, { useState, useEffect } from "react";
import Home from './Home'
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    } from "@material-ui/core";

const Admin = () => {

    const [loginStatus, setLoginStatus] = useState("");
    const [error, setError] = useState(null);

    const logout = () => {
        fetch("/api/logout").then(res => res.json())
        .then(
          (result) => {
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
      if(loginStatus == "Session Destoryed"){
        return <div><Home /></div>//Need to use Routes
    
    }else{
      return (
    <div>
    <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
            <Grid container align='center' wrap="wrap">
                <Grid item>
                    <Typography variant="h6">Admin</Typography>
                </Grid>
            </Grid>
            <Button onClick={logout} className="btnStyle" color='primary' variant="contained"  fullWidth>Logout</Button>
        </Toolbar>
    </AppBar>

    <h1>Admin</h1>
    <h1>{error}</h1>
</div>
)}};

export default Admin;