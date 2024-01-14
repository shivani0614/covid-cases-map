import React, { useState,useEffect } from "react";
import Loading from "./Loading";
import CoMaps from "./CoMaps";
import Legend from "./Legend";
import LoadCountries from "../tasks/LoadCountries";

const Covid = () => {
  const [countries, setCountries] = useState([]);
  const load = () => {
    const loadCountries = new LoadCountries();
    // loadCountries.load(setCountries);
    loadCountries.load((countries)=>setCountries(countries));
    // console.log(loadCountries);
  }
  console.log("countries:",countries);
  
  useEffect(load,[]); // helps to track the page load
  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          {" "}
          <CoMaps countries={countries}/>
          <Legend />
        </div>
      )}
    </div>
  );
};

export default Covid;
