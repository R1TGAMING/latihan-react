import {
  faDiscord,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Header from "./assets/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <main className={dark ? "bg-black" : "bg-slate-100"}>
      <Header className="rounded-b-sm">
        <div>
          <img src="../src/assets/logo.png" width={100} />
        </div>
        <nav className="flex gap-5 text-md font-extrabold text-blue-300  ">
          <button onClick={() => setDark(!dark)}>
            {dark ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
          <a
            href=""
            className="hover:text-blue-300 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href=""
            className="hover:text-blue-300 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href=""
            className="hover:text-blue-300 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </nav>
      </Header>

      <section id="hero" className="flex items-center h-screen">
        <div className="max-w-200 p-4">
          <h2 className="font-black text-8xl text-blue-400">
            Ingin Menjadi Programmer Handal?
            <br />
            <span className="text-blue-300 underline decoration-wavy">
              Namun Enggan Ngoding
            </span>
          </h2>
        </div>
      </section>
    </main>
  );
}

export default App;
