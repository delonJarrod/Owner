import React from "react";
import Header from "../components/profile/Header";
import Skills from "../components/profile/Skills";
import CV from "../components/profile/CV";
import Footer from "../components/profile/Footer";
function Homepage() {
  return (
    <div>
      <Header />
      <CV />
      <Skills />
      <Footer />
    </div>
  );
}

export default Homepage;
