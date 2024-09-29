import Head from "next/head";
import React from "react";
import { Navbar } from ".";
import { Footer } from ".";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Yuuj1nee Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
