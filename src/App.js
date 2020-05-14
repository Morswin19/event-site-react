import React from 'react';
import { HashRouter } from 'react-router-dom'
import './App.sass';
import Footer from './components/Footer'
import Header from './components/Header'
import Page from './components/Page'

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <div className="mainContainer">
          <Page />
          <Footer />
        </div>
      </div>
    </HashRouter >
  );
}

export default App;


