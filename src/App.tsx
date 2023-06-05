import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Article from "./components/Article/Article";
import Player from "./components/Player/Player";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/stream-online-react' element={<Home />} />
          <Route path='/stream-online-react/article' element={<Article />} />
          <Route path='/stream-online-react/player' element={<Player />} />
          <Route path='/stream-online-react/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
