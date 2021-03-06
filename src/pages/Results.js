import React, { Component } from "react";
import NavBarMini from "../components/navbar/NavBarMini";
import Footer from "../components/Footer";
import HeroTitle from "../components/hero/HeroTitle";
import HeroInput from "../components/hero/HeroInput";
import ResultList from "../components/ResultList";

export default class Results extends Component {
  render() {
    return (
      <div className="Results-Page">
        <NavBarMini />
        <main className="main">
          <section className="hero pt-5">
            <HeroTitle />
            <HeroInput />
          </section>
          <ResultList />
        </main>
        <Footer />
      </div>
    );
  }
}
