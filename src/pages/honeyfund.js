import * as React from "react";
import Layout from "../components/layout";
import jk3 from "../images/jaxnoah-3.jpg";

// markup
const HoneyfundPage = () => {
  return (
    <Layout title="Honeyfund">
      <div class="container page">
        <h1>Honeyfund</h1>
        <img src={jk3} class="photo" alt="Jax and Noah" />
        <p>
          Seeing all our favorite people let loose is the single greatest gift
          we could ask for, plus we know it's a journey for a lot of you, so
          gifts are extremely not necessary. We really, deeply, truly appreciate
          you taking the time and effort to join us on this special day.
        </p>
        <p>
          But if you really want, we've got a honeyfund set up to help us have
          the time of our lives when we honeymoon in Portugal this summer.
        </p>
        <p class="big strong center">
          <a
            href="https://www.hitchd.com/jacqiandnoah"
            target="_blank"
            rel="noreferrer"
          >
            Give a gift
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default HoneyfundPage;
