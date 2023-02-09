import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { store } from './redux/store'
import { Provider } from 'react-redux'

import Home from './pages/Home';
import Game from './pages/Game';
import Order from './pages/Order';

import Header from './components/Header/Header'

import style from './scss/style.scss'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/app/:title' element={<Game/>}></Route>
          <Route path='/order' element={<Order/>}></Route>        
        </Routes>
      </div>
    </Provider>
  );
}

export default App;