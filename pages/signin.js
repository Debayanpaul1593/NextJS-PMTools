import Head from "next/head";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { UnauthApi, storeAsString, store } from "../services";
import Router from 'next/router';
export default function singin() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  function handleSubmit() {
    console.log(username, password);
    UnauthApi()
      .login({ username, password })
      .then((res) => {
        console.log(res);
        store('token', res?.token?.token);
        Router.push('/dashboard');
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="container">
      <Head>
        <meta />
      </Head>

      <div className="cardContainer">
        <h1 style={{ textAlign: "center" }}>SignIn</h1>
        <div className="itemContainer">
          <TextField
            id="outlined-basic"
            label="Username/Email"
            variant="outlined"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            style={{ marginTop: 24 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ marginTop: 48, marginBottom: 20 }}
            onClick={handleSubmit}
          >
            SignIn
          </Button>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: #dfdbe5;
          background-image: url("/images/topography.svg");
          display: flex;
          height: 100vh;
        }

        .cardContainer {
          background-color: white;
          border-radius: 10px;
          box-shadow: 2px 2px 5px grey;
          padding: 12px 24px 12px 24px;
          display: block;
          margin: auto;
        }

        .itemContainer {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
