import React from "react";
import { Helmet } from "react-helmet";
import "../styles/main.scss";

export default function Layout({ title, children }) {
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
      <div>{children}</div>
    </React.Fragment>
  );
}
