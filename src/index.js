import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise'
import reducers from './reducers';
import { fetchPlayers, fetchTeams } from './actions';

export const Context = createContext(null);

export function Main() {

  const dispatch = useDispatch();

  const [pageTeams, setPageTeams] = useState(1);
  const [selectValue, setSelectValue] = useState(10);

  const [pagePlayers, setPagePlayers] = useState(1);
  const [selectValuePlayers, setSelectValuePlayers] = useState(8);

  const teams = useSelector(state => state.teams);
  const players = useSelector(state => state.players);


  useEffect(() => {
    dispatch(fetchTeams(pageTeams, selectValue));
  },
    [dispatch, pageTeams, selectValue]);


  useEffect(() => {
    dispatch(fetchPlayers(pagePlayers, selectValuePlayers));

  },
    [dispatch, pagePlayers, selectValuePlayers]);

  const onHandleNextClick = (p, func) => {
    func(p + 1);
  }
  const onHandlePrevCliсk = (p, func) => {
    func(p - 1);
  }


  function getArrPerPAges(num) {
    const newArr = [];
    for (let i = 0; i < num; i++) {
      newArr.push(i + 1)
    }
    return newArr;
  }

  function getArrSelecValue(arr, curr, total, num) {
    let newArr = [];
    if (arr.length < 10 && curr === total) {
      for (let i = 0; i < arr.length; i++) {
        newArr.push(i + 1);
      }
      return newArr
    } else {
      for (let i = 0; i < num; i++) {
        newArr.push(i + 1);
      }
      return newArr;
    }

  }



  return (
    <Context.Provider value={{
      teams,
      pageTeams,
      setPageTeams,
      selectValue,
      setSelectValue,
      players,
      pagePlayers,
      setPagePlayers,
      setSelectValuePlayers,
      onHandleNextClick,
      onHandlePrevCliсk,
      getArrPerPAges,
      getArrSelecValue
    }} >
      <App />
    </Context.Provider>
  )
}



ReactDOM.render(

  <Provider store={createStore(reducers, {}, applyMiddleware(reduxPromise))}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
