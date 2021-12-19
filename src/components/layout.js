import React from "react";
import "../styles/main.scss";

export default function Layout({ title, children }) {
  return (
    <html lang="en">
      {children}
      <footer>
        Questions? <a href="mailto:hi@jaxandnono.party">hi@jaxandnono.party</a>
      </footer>
    </html>
  );
}
