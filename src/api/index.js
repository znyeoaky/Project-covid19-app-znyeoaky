import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };

    // console.log(response);
  } catch (error) {

  }
}
/*
try{
  ////// method 1 //////
  const response = await axios.get(url);
  return response;

  ////// method 2 //////
  const { data } = await axios.get(url);
  const modifiedData = {
    confirmed: data.confirmed,
    recovered: data.recovered,
    deaths: data.deaths,
    lastUpdate: data.lastUpdate,
  }
  return modifiedData;

  ////// method 3 //////
  

}*/