import { Link } from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import ConstantHeader from "../components/ConstantHeader";
//import React, { useState } from "react";

function LogIn() {
  //const [mail, setMail] = useState("");
  // const [password, setPassword] = useState("");

  // const validationPassword = (event) => {
  // if (password.length >= 6) {
  //  setPassword("");
  //  } else {
  // setPassword("Podane hasło jest za krótkie !");
  // }
  // };

  // const validationMail = (event) => {
  //if (email.length >= 6) {
  // setPassword("");
  // } else {
  // setPassword("Podany mail jest nieprawidłowy !");
  //  }
  // };

  return (
    <>
      <ConstantHeader />
      <div className="loginForm">
        <h1>Zaloguj się</h1>
        <img src={decoration} alt="decoration" />
        <form>
          <label>Email</label>
          <br />
          <input name="email" type="text" />
          <br />
          <label>Hasło</label>
          <br />
          <input name="password" type="password" />
          <br />
          <Link to="/register">Załóż konto</Link>
          <button>Zaloguj się</button>
        </form>
      </div>
    </>
  );
}

export default LogIn;
