import React, {useEffect, useState} from 'react';
import './App.css';
import {BASE_URL} from './constants/index';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [swData, setSwData] = useState([])

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then(res => {
        console.log('AW YEAH', res.data)
        setSwData(res.data)
       })
       .catch(error => {
       debugger
       console.log('OH NO', error)
       })
   }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
