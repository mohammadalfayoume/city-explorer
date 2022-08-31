import React, { Component } from "react";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Weather from "./Components/Weather";
import Weather02 from "./Components/Weather02";
import Movie from "./Components/Movie";


class App extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "yellowgreen",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        <Header />
        <Main />
        <Weather />
        <Weather02 />
        <Movie />
        <Footer />
      </div>
    );
  }
}

export default App;
