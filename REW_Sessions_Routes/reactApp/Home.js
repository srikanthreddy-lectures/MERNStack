import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';

import NormalUser from "./NormalUser";
import Admin from "./Admin";
import Login from "./Login"

export default function Home() {
  const [role, setRole] = useState("");

  useEffect(() => {
    fetch("/api/login").then(res => res.json()).then((response) => {
      if (response.loggedIn == true) {
        setRole(response.user.result[0].role);
      }
      else{
        setRole("a");
      }
    });
  }, []);

  return (
    <div>
      {role == "visitor" && <NormalUser />}
      {role == "admin" && <Admin />}
      {role == "a" && <Login />}
    </div>
  );
}