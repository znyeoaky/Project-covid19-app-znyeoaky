import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountriesData(await fetchCountries());
    }
    fetchAPI();
  }, [setCountriesData])

  // console.log(countriesData);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
        <option value="" > Global </option>
        {
          countriesData.map((country, i) => <option key={i} value={country}>
            {country}
          </option>)
        }
      </NativeSelect>
    </FormControl>
  )
};

export default CountryPicker;