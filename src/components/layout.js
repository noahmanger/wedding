import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import monogram from "../images/monogram.svg";

import "../styles/main.scss";

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};

export default function Layout({ title, children }) {
  window.addEventListener("resize", appHeight);
  appHeight();

  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | Jacqi & Noah Make it Official</title>
        <script
          async
          defer
          src="https://beampipe.io/js/tracker.js"
          data-beampipe-domain="jaxandnono.party"
        ></script>
      </Helmet>
      <div class="border">
        <header>
          <div class="row container">
            <span class="detail">June 4, 2022</span>
            <Link to="/">
              <img class="logo" src={monogram} alt="J & N" />
            </Link>
            <span class="detail">McMinnville, Ore.</span>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/details">Details</Link>
              </li>
              <li class="display multi">
                <Link to="/rsvp">
                  <span class="color-4">R</span>
                  <span class="color-2">S</span>
                  <span class="color-3">V</span>
                  <span class="color-1">P</span>
                </Link>
              </li>
              <li>
                <Link to="/honeyfund">Honeyfund</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div>{children}</div>
        </main>
        <footer>
          Questions?{" "}
          <a href="mailto:hi@jaxandnono.party">hi@jaxandnono.party</a>
        </footer>
      </div>
    </React.Fragment>
  );
}
