import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};
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
  above
}*/

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    // return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      recovered: dailyData.recovered.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;

  } catch (error) {
    return error;
  }
};

// // method 2: Instead of Global, it fetches the daily data for the US
// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
//     return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
//   } catch (error) {
//     return error;
//   }
// };

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);
    // console.log({ data: { countries } });
    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};