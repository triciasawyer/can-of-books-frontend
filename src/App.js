import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import Footer from './Components/Footer/Footer.js';



class App extends React.Component {

  render() {

    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}




export default App;
