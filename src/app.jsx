import React from 'react';
import './app.scss';
import Header from './components/header/header';
import Items from './components/items/items';
import Youtube from './service/youtube';
import { HashRouter, Route } from "react-router-dom";
import Details from './components/details/details';
import Footer from './components/footer/footer';

function App() {
  const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
  return (
    <div className="grid">
      <HashRouter>
      <Header />
        <Route path="/" exact>
          <Items youtube={youtube}/>
        </Route>
        <Route path="/search/:id">
          <Items youtube={youtube}/>
        </Route>
        <Route path="/details/:id" component={Details}/>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
