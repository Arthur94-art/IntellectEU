import React from 'react';
import './components/styles/App.scss'
import HeaderContainer from './components/header/headerContainer';
import PlayersContainer from './components/players/playerContainer';
import TableTeamsContainer from './components/teams/tableTeamsContainer';
import PaginationContainerTeams from './components/pagination/paginationContainerTeams';
import PaginationContainerPlayers from './components/pagination/paginationContainerPlayers';




function App() {


  return (
    <div className='App'>
      <HeaderContainer />
      <TableTeamsContainer />
      <PaginationContainerTeams />
      <PlayersContainer />
      <PaginationContainerPlayers />
    </div>
  );
}

export default App;
