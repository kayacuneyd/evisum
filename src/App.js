import { useState } from "react";
import "./App.css";
//import { Users } from "./users";
import { Countries } from "./countries";

function App() {
  const [query, setQuery] = useState("");

  /* console.log(
    Countries.filter((country) => country.ulke.toLowerCase().includes("af"))
  ); */
  return (
    <>
      <div className="w3-row w3-padding-large w3-flat-midnight-blue">
        <h1 className="w3-center">
          Turkey's Visa Regulations to the countries
        </h1>
        <form className="w3-container w3-padding">
          <input
            className="w3-input"
            placeholder="Search..."
            type="text"
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>

      <div className="w3-container w3-flat-belize-hole main-container">
        <div className="w3-row-padding ck-80vh">
          {Countries.filter((country) =>
            country.ulke.toLowerCase().includes(query)
          ).map((country) => {
            if (query.length > 3) {
              return (
                <div
                  className=""
                  key={country.id}
                  style={{
                    minWidth: "50%",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  <div className="w3-card-4 w3-margin-top w3-animate-right">
                    <header className="w3-container w3-light-grey w3-center">
                      <h1>
                        {country.ulke} | {country.bayrak}
                      </h1>
                    </header>

                    <div className="w3-container">
                      <p className="w3-large">
                        Can the citizens of {country.ulke} apply to Turkey's
                        e-visa? {country.e_vize}
                      </p>
                      <p className="w3-large">
                        Can the citizens of {country.ulke} travel to Turkey if
                        they hold an ordinary passport without visa?{" "}
                        {country.umuma_mahsus}
                      </p>
                      <p className="w3-large">
                        Can the citizens of {country.ulke} travel to Turkey if
                        they hold an offical passport without visa?{" "}
                        {country.resmi_pasaport}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="w3-row-padding w3-margin-top w3-flat-midnight-blue footer">
        <p className="w3-center">
          Copyright © All rights reserved. - Developed by{" "}
          <a href="https://kayacuneyt.com" target="_blank" rel="noreferrer">
            Cüneyt Kaya
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
