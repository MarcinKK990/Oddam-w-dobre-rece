import React from "react";

function HomeHeader() {
  return (
    <>
      <div className="TopMenu container">
        <div className="TopMenu_photography"></div>
        <div className="TopMenu_mainView">
          <div className="TopMenu_nav">
            <div className="TopMenu_nav_log">
              <div className="TopMenu_nav_log_buttons">
                <button>Zaloguj</button>
                <button>Załóż konto</button>
              </div>
            </div>
            <div className="TopMenu_nav_menu">
              <div>
                <ul className="TopMenu_nav_menu_list">
                  <li className="menu">
                    <a href="#Start" class="nav__link">
                      Start
                    </a>
                  </li>
                  <li className="menu">
                    <a href="O co chodzi" class="nav_link">
                      O co chodzi ?
                    </a>
                  </li>
                  <li className="menu">
                    <a href="O nas" class="nav_link">
                      O nas
                    </a>
                  </li>
                  <li className="menu">
                    <a href="Fundacja i organizacje" class="nav_link">
                      Fundacja i organizacje
                    </a>
                  </li>
                  <li className="menu">
                    <a href="Kontakt" class="nav_link">
                      Kontakt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="TopMenu_navtwo">
            <div className="TopMenu_navtwo_welcomeInscription">
              <h1 className="inscription">
                Zacznij pomagać. Oddaj niechciane rzeczy w zaufane ręce
              </h1>
            </div>
            <div className="TopMenu_navtwo_decoration"></div>
            <div className="TopMenu_navtwo_buttons">
              <button>Oddaj rzeczy</button>
              <button>Zorganizuj zbiórkę</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
