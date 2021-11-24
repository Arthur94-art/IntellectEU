import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Players from './components/players/players';
import Teams from './components/teams/teams';



function App() {
  return (
    <div className='App'>
      <Header />
      <Teams />
      <Players />
    </div>
  );
}

export default App;
