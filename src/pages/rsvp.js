import * as React from "react";
import Layout from "../components/layout";

// markup
const RSVPPage = () => {
  return (
    <Layout title="RSVP">
      <div class="container page">
        <h1>RSVP</h1>
        <p>
          Let us know if you'll be joining, and if so, we just have a few
          questions for you. Just enter your name or email address to get
          started and you can RSVP for everyone in your group.
        </p>
        <iframe
          title="rsvp"
          src="https://jaxandnono.rsvpify.com?embed=1"
          class="rsvp-form"
        ></iframe>
      </div>
    </Layout>
  );
};

export default RSVPPage;
