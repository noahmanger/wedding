import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout title="Home">
      <main>
        <div className="intro">
          <h1>Jacqi and Noah</h1>
          <p>Saturday // June 4, 2022</p>
          <p>The Bindery // McMinnville, Oregon</p>
          <Link className="cta" to="/lodging">
            → → → Book your lodging today ← ← ←
          </Link>
          <p class="coming-soon">More info coming soon!</p>
        </div>
      </main>
      <footer>
        Questions? <a href="mailto:hi@jaxandnono.party">hi@jaxandnono.party</a>
      </footer>
    </Layout>
  );
};

export default IndexPage;
