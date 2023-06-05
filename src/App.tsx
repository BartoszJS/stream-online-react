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
          <Route path='/' element={<Home />} />
          <Route path='/article' element={<Article />} />
          <Route path='/player' element={<Player />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
