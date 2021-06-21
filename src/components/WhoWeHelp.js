import React, { useState } from "react";
import decoration from "../assets/Decoration.svg";

function WhoWeHelp() {
  const [dispFirst, setDispFirst] = useState("block");
  const [bordFirst, setBordFirst] = useState("1px solid black");

  const [dispSecond, setDispSecond] = useState("none");
  const [bordSecond, setBordSecond] = useState("none");

  const [dispThird, setDispThrird] = useState("none");
  const [bordThird, setBordThird] = useState("none");

  const dispNoneStyleFirst = {
    display: dispFirst,
  };
  const borderFirst = {
    border: bordFirst,
  };

  const dispNoneStyleSecond = {
    display: dispSecond,
  };
  const borderSecond = {
    border: bordSecond,
  };

  const dispNoneStyleThird = {
    display: dispThird,
  };
  const borderThird = {
    border: bordThird,
  };

  const handleClickFirstOption = () => {
    setDispFirst("block");
    setDispSecond("none");
    setDispThrird("none");
    setBordFirst("1px solid black");
    setBordSecond("none");
    setBordThird("none");
  };

  const handleClickSecondOption = () => {
    setDispSecond("block");
    setDispFirst("none");
    setDispThrird("none");
    setBordSecond("1px solid black");
    setBordFirst("none");
    setBordThird("none");
  };

  const handleClickThirdOption = () => {
    setDispThrird("block");
    setDispFirst("none");
    setDispSecond("none");
    setBordThird("1px solid black");
    setBordFirst("none");
    setBordSecond("none");
  };

  return (
    <section id="whoWeHelp" className="whoWeHelp">
      <div className="headerWhoHelp">
        <h1>Komu pomagamy?</h1>
        <img src={decoration} alt="decoration" />
      </div>
      <div className="switchWhoHelp">
        <button onClick={handleClickFirstOption} style={borderFirst}>
          Fundacjom
        </button>
        <button onClick={handleClickSecondOption} style={borderSecond}>
          Organizacjom
          <br />
          pozarządowym
        </button>
        <button onClick={handleClickThirdOption} style={borderThird}>
          Lokalny
          <br />
          zbiórkom
        </button>
      </div>
      <p className="articleP">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      <div className="viewInfo">
        <div className="firstDivInfo" style={dispNoneStyleFirst}>
          <div>
            <div>
              <h1>Fundacja “Dbam o Zdrowie”</h1>
              <p>
                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                życiowej.
              </p>
            </div>
            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
          </div>
          <div>
            <div>
              <h1>Fundacja “Dla dzieci”</h1>
              <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
            </div>
            <p>ubrania, meble, zabawki</p>
          </div>
          <div id="withoutBorder">
            <div>
              <h1>Fundacja “Bez domu”</h1>
              <p>
                Cel i misja: Pomoc dla osób nie posiadających miejsca
                zamieszkania.
              </p>
            </div>
            <p>ubrania, jedzenie, ciepłe koce</p>
          </div>
          <div className="pageNumber" id="withoutBorder">
            <span onClick={handleClickFirstOption}>1</span>
            <span onClick={handleClickSecondOption}>2</span>
            <span onClick={handleClickThirdOption}>3</span>
          </div>
        </div>
        <div className="secondDivInfo" style={dispNoneStyleSecond}>
          <div>
            <div>
              <h1>Organizacja “Lorem Ipsum 1”</h1>
              <p>
                Quis varius quam quisque id diam vel quam elementum pulvinar.
              </p>
            </div>
            <p>Egestas, sed, tempus</p>
          </div>
          <div>
            <div>
              <h1>Organizacja “Lorem Ipsum 2”</h1>
              <p>
                Hendrerit gravida rutrum quisque non tellus orci ac auctor
                augue.
              </p>
            </div>
            <p>Ut, aliquam, purus, sit, amet</p>
          </div>
          <div id="withoutBorder">
            <div>
              <h1>Organizacja “Lorem Ipsum 3”</h1>
              <p>Scelerisque in dictum non consectetur a erat nam.</p>
            </div>
            <p>Mi, quis, hendrerit, dolor</p>
          </div>
          <div className="pageNumber">
            <span onClick={handleClickFirstOption}>1</span>
            <span onClick={handleClickSecondOption}>2</span>
          </div>
        </div>
        <div className="thirdDivInfo" style={dispNoneStyleThird}>
          <div>
            <div>
              <h1>Fundacja “Lorem Ipsum 1”</h1>
              <p>
                Quis varius quam quisque id diam vel quam elementum pulvinar.
              </p>
            </div>
            <p>Egestas, sed, tempus, gestas, sed, tempus</p>
          </div>
          <div>
            <div>
              <h1>Fundacja “Lorem Ipsum 2”</h1>
              <p>
                Hendrerit gravida rutrum quisque non tellus orci ac auctor
                augue.
              </p>
            </div>
            <p>Ut, aliquam, purus, sit, amet, Ut, aliquam, purus, sit, amet</p>
          </div>
          <div id="withoutBorder">
            <div>
              <h1>Fundacja “Lorem Ipsum 3”</h1>
              <p>Scelerisque in dictum non consectetur a erat nam.</p>
            </div>
            <p>Mi, quis, hendrerit, dolor, Mi, quis, hendrerit, dolor</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeHelp;
