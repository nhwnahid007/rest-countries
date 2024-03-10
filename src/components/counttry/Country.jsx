import './Country.css'
// props k destructuring korbo ta {country diye dilam}
const Country = ({country}) => {
    const {name,maps,flags} = country; //country er name property destructure
    return (
      <div className="country">
        <h3>Name: {name?.common} </h3>
        <img src={flags.png} alt="" /> <br />
        <a href={maps.googleMaps}>Google maps</a>
      </div>
    );
};

export default Country;