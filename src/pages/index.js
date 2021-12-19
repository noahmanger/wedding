import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import engaged from "../images/engaged.jpg";

// markup
const IndexPage = () => {
  return (
    <Layout title="Home">
      <main>
        <div class="banner">
          <a href="https://www.youtube.com/watch?v=pjB1QK43zxM">
            Take me I'm yours
          </a>
        </div>
        <div class="home">
          <img
            src={engaged}
            alt="Jacqi and Noah in Palm Springs"
            class="hero"
          />
          <div className="intro">
            <div>
              <h1>Jacqi Ko & Noah Manger</h1>
              <p>June 4, 2022</p>
              <p>McMinnville, Oregon</p>
            </div>
          </div>
        </div>
        <Link className="cta" to="/lodging">
          → → → Book your lodging today ← ← ←
        </Link>
        <p class="coming-soon">More info coming soon!</p>
      </main>
    </Layout>
  );
};

export default IndexPage;
