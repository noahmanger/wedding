import React from "react";
import "../styles/main.scss";

export default function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title} | Jax and Nono's Wedding</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
