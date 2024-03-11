import { useState } from 'react';
import './Country.css'
// props k destructuring korbo ta {country diye dilam}
const Country = ({country}) => {
    const {name,maps,flags,population,area,cca3} = country; //country er name property destructure
    const [visited,setVisited] = useState(false)
    const handleVisited=()=>{
     setVisited(!visited);
    }
    return (
      <div className="country">
        <h3>Name: {name?.common} </h3>
        <img src={flags.png} alt="" /> <br />
        <p>population: {population} {}</p>
        <p>Area: {area}</p><p><small>Code: {cca3}</small></p>
        <a href={maps.googleMaps}><button>Google map</button> </a> <br />
        <button onClick={handleVisited}>{visited? 'Visited': 'Not visited'}</button>
        {visited ? ' This country' : 'Not visited'}
        {/* visited jodi true hoy */}
      </div>
      
    );
};

export default Country;