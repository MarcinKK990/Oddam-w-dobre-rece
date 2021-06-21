import { Link } from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import ConstantHeader from "./ConstantHeader";

function register() {
  return (
    <>
      <ConstantHeader />
      <div className="loginForm">
        <h1>Zarejestruj się</h1>
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
          <button>Załóż konto</button>
          <Link to="/login">Zaloguj się</Link>
        </form>
      </div>
    </>
  );
}

export default register;
