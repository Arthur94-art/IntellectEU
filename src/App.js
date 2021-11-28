import React from 'react';
import './components/styles/App.scss'
import HeaderContainer from './components/header/headerContainer';
import PlayersContainer from './components/players/playerContainer';
import TableTeamsContainer from './components/teams/tableTeamsContainer';




function App() {


  return (
    <div className='App'>
      <HeaderContainer />
      <TableTeamsContainer />
      <PlayersContainer />
    </div>
  );
}

export default App;
