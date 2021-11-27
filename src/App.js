import React from 'react';


import './App.scss';
import HeaderContainer from './components/header/headerContainer';
import PlayersContainer from './components/players/playerContainer';
import Teams from './components/teams/teams';



function App() {


  return (
    <div className='App'>
      <HeaderContainer />
       <Teams />
      <PlayersContainer /> 
    </div>
  );
}

export default App;
