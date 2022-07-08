import React, { useEffect } from 'react';
// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/index';

function App() {
  // class App extends React.Component {

  // async componentDidMount() {
  //   const data = await fetchData();
  //   console.log(data);
  // }

  useEffect(() => {
    const dataa = fetchData();
    console.log(dataa);
  });

  // render() {
  return (
    <div className={styles.container}>
      <h1>APPP</h1>
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
  // }
};

export default App;
