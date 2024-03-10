import { useEffect } from "react";
import { useState } from "react";
import Country from "../counttry/Country";


const Countries = () => {
    const [countries,setCountries] =useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then (res => res.json())
        .then (data => setCountries(data))
    },[])
    return (
      <div>
        <h3>Total Countries:{countries.length} </h3>
        {
          countries.map((country) => (
            <Country key={country.cca3} country={country}></Country>
          ))
          // key na dile eslint error dekhaabe ejnno unique jinis key hisebe set kore dite hobe 
          // props pathate hobe tai country k pathiye dilam
        }
      </div>
    );
};

export default Countries;