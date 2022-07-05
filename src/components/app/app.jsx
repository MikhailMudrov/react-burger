import React from 'react';
import { useState, useEffect } from 'react';
import appStyles from './app.module.css';
import AppHeader from '../appHeader/appHeader';
import { API, checkResponse } from '../../utils/api';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';
import BurgerConstructor from '../burgerConstructor/burgerConstructor';

function App() {
  const [data, setData] = useState([])

  function getData() {
    fetch(API)
      .then(checkResponse)
      .then((res) => { setData(res.data) })
      .catch(err => { console.log(err) });
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={appStyles.body}>
      <AppHeader />
      <main className={appStyles.content}>
        <BurgerIngredients ingredients={data} />
        <BurgerConstructor ingredients={data} />
      </main>
    </div>
  );
}

export default App;
