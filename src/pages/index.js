import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import std from "../images/save-the-date.png";

// markup
const IndexPage = () => {
  return (
    <Layout title="Home">
      <main>
        <div class="home">
          <img
            src={std}
            alt="Jacqi and Noah Make it Official - June 4, 2022"
            class="hero"
          />
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
