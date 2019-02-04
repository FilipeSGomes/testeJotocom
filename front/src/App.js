import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Carousel from "./components/Carousel/Carousel";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div style={styles} class="container-fluid text-center">
      <div className="App">
        <Header />
        <Banner />
        <Carousel />
        <Product />
        <Footer />
      </div>
      </div>
    );
  }
}
const styles = {
  blackgroud: "black",
}

export default App;
