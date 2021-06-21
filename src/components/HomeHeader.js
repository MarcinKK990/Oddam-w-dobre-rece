import React from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import ConstantHeader from "./ConstantHeader";
//import ConstantHeaderAfterLogin from "./ConstantHeaderAfterLogin";

function HomeHeader() {
  return (
    <>
      <div className="allSide">
        <div className="leftSide"></div>
        <div className="rightSide">
          {<ConstantHeader />}
          <div className="headerButton">
            <h1>
              Zacznij pomagać!
              <br />
              Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <img src={decoration} alt="obrazek" />
            <br />
            <Link to={"/Login"}>ODDAJ RZECZY</Link>
            <Link to="/#">ZORGANIZUJ ZBIÓRKĘ</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeHeader;
