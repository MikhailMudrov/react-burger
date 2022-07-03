import React from 'react';
import appStyles from './app.module.css';
import { Header } from '../header/header';

function App() {

  return (
    <body className={appStyles.body}>
      <Header />

    </body>
  )
}

export default App
