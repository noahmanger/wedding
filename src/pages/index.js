import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import jn5 from "../images/jaxnoah-5.jpg";

// markup
const IndexPage = () => {
  return (
    <Layout title="Home">
      <div>
        <div class="container">
          <img class="photo" src={jn5} alt="Jacqi and Noah" />
          <div class="column">
            <div class="block">
              <p class="big">Jacqi Ko & Noah Manger are making it official.</p>
              <p class="big strong">
                <Link to="/story">Read our story</Link>
              </p>
            </div>
            <div class="block">
              <p class="big display">June 4, 2022</p>
              <p>Arrive at 5pm</p>
              <p>Ceremony at 5:30pm</p>
              <p>Dinner to follow. Drinks & dancing 'til midnight</p>
            </div>
            <div class="block">
              <p class="big display">The Bindery</p>
              <p>610 NE Fourth Street</p>
              <p>McMinnville, OR 97128</p>
              <p class="big strong">
                <Link to="/details">More details</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
