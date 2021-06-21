import React, { useState } from "react";
import decoration from "../assets/Decoration.svg";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [winInfo, setWinInfo] = useState("");
  const [valname, setValname] = useState("");
  const [valemail, setValemail] = useState("");
  const [valmessage, setValmessage] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const validationName = (event) => {
    if (name.lenght >= 1) {
      setValname("Podane imię jest nieprawidłowe !");
    } else {
      setValname("");
    }
  };

  const validationMail = (event) => {
    if (email.includes("@")) {
      setValemail("");
    } else {
      setValemail("Podany email jest nieprawidłowy !");
    }
  };

  const validationMessage = (event) => {
    if (message.length >= 120) {
      setValmessage("");
    } else {
      setValmessage("Wiadomość musi mieć conajmniej 120 znaków !");
    }
  };

  const handleSubmit = () => {
    const form = {
      name: name,
      email: email,
      message: message,
    };
    console.log(form);
    const API = "https://fer-api.coderslab.pl/v1/portfolio";
    fetch(`${API}/contact`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .then(setWinInfo(`Wiadomość została wysłana! Wkrótce się skontaktujemy.`))
      .catch((error) => {
        console.log(error);
      });

    console.log(winInfo);
  };

  return (
    <section id="contactForm">
      <div className="leftSideImage"></div>
      <div className="rightSideForm">
        <h1>Skontaktuj sie z nami </h1>
        <img src={decoration} alt="decoration" />
        <h4>{winInfo}</h4>
        <form onSubmit={handleSubmit}>
          <label>
            Wpisz swoje imię
            <input type="text" placeholder="Marcin" onChange={handleName} />
            {valname}
          </label>
          <label>
            Wpisz swój email
            <input
              type="text"
              placeholder="marcin@wp.pl"
              onChange={handleEmail}
            />
          </label>
          {valemail}
          <label>
            Wpisz swoją wiadomość
            <textarea
              onChange={handleMessage}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ></textarea>
            {valmessage}
          </label>
          <button
            onClick={handleSubmit}
            onClick={validationName}
            onClick={validationMail}
            onClick={validationMessage}
          >
            Wyślij
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
