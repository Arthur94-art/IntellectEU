import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export const Context = createContext(null);

const Main = () => {

  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch(
      ` https://www.balldontlie.io/api/v1/players
      `
    )
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data)
      })
      .catch((error) => console.log(error.message));
  }, []);

  console.log(players)


  useEffect(() => {
    fetch(
      ` https://www.balldontlie.io/api/v1/teams
      `
    )
      .then((response) => response.json())
      .then((data) => {
        setTeams(data.data)
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (

    <Context.Provider value={{ teams, players }}>
      <App />
    </Context.Provider>

  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
