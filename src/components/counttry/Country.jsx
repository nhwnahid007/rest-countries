import { useState } from "react";
import "./Country.css";
// props k destructuring korbo ta {country diye dilam}
const Country = ({ country, handleVisitedCountry, handleVisitedFlags}) => {
  const { name, maps, flags, population, area, cca3 } = country; //country er name property destructure
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div  className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "gray" }}>
        Name: {name?.common}{" "}
      </h3>
      <img src={flags.png} alt="" /> <br />
      <p>
        population: {population} {}
      </p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <a target="_blank" href={maps.googleMaps}>
        <button style={{ backgroundColor: visited ? "orange" : "yellow" }}>
          Google map
        </button>{" "}
      </a>{" "}
      <br />
      <button className="gap"
        onClick={() => {
          handleVisitedCountry(country);
        }}
      >
        Mark as visited
      </button> <br />
      <button onClick={()=>handleVisitedFlags(country.flags.png)} className="gap">Add flag</button>
      <br />
      <button className="gap" onClick={handleVisited}>
        {visited ? "Visited" : "Not visited"}
      </button>
      {visited ? " This country" : "Not visited"}
      {/* visited jodi true hoy */}
    </div>
  );
};

export default Country;
