import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise'
import reducers from './reducers';



// export const Context = createContext(null);

const Main = () => {


  // useEffect(() => {
  //   fetch(
  //     ` https://www.balldontlie.io/api/v1/players
  //     `
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPlayers(data)
  //     })
  //     .catch((error) => console.log(error.message));
  // }, []);

  // console.log(players)


  // useEffect(() => {
  //   fetch(
  //     ` https://www.balldontlie.io/api/v1/teams
  //     `
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTeams(data.data)
  //     })
  //     .catch((error) => console.log(error.message));
  // }, []);
  return (

    <Provider value={createStore(reducers, {}, applyMiddleware(reduxPromise))}>
      <App />

    </Provider>


  )
}

ReactDOM.render(
  
  <Provider store={createStore(reducers, {}, applyMiddleware(reduxPromise))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
