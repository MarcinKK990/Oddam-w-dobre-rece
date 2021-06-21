import React from "react";
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";

export default function AboutUs() {
  return (
    <section id="aboutUs" className="aboutUs">
      <div className="leftSideAboutUs">
        <h1>O nas</h1>
        <img src={decoration} alt="decoration" />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img className="signatureImage" src={signature} alt="signature" />
      </div>
      <div className="rightSideAboutUs"></div>
    </section>
  );
}
