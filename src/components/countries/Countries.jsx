import { useEffect } from "react";
import { useState } from "react";
import Country from "../counttry/Country";
import './Countries.css'

const Countries = () => {
    const [countries,setCountries] =useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags,setVistedFlags] =useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then (res => res.json())
        .then (data => setCountries(data))
    },[])
    const handleVisitedCountry = country =>{
      console.log('country');
      const newVisitedCountrie=[...visitedCountries,country];
      setVisitedCountries(newVisitedCountrie)
    }
    const handleVisitedFlags =flag =>{
      const newVisitedFlags = [...visitedFlags,flag];
      setVistedFlags(newVisitedFlags)
    }
    //remove item from an arrray in a state  
    //use filter to select all the elements 



    return (
      <div>
        <h3>Total Countries:{countries.length} </h3>
        <div>
          <h5>Visited Countries: {visitedCountries.length} </h5>
          {/* Visited country */}
        </div>
        <div>
          <ul>
            {
              visitedCountries.map(country=> <li key={country.cca3}>{country.name.common}</li>)
            }
          </ul>
        </div>
        <div className="flag-container">
            {
              visitedFlags.map((flag,idx)=> <img key={idx} src={flag}></img>)
            }
        </div>
        {/* display countries */}
        <div className="country-container">
          {
            countries.map((country) => (
              <Country
                key={country.cca3}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags ={handleVisitedFlags}
                country={country}
              ></Country>
            ))
            // key na dile eslint error dekhaabe ejnno unique jinis key hisebe set kore dite hobe
            // props pathate hobe tai country k pathiye dilam
          }
        </div>
      </div>
    );
};

export default Countries;