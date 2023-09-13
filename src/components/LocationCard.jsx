
const LocationInfo = ({ locationInfo }) => {

  console.log(locationInfo)

  return (
    <article className="location">
      <h2 className="location__dimension">{locationInfo?.dimension}</h2>
      <hr className="location__hr" />
      <ul className="location__list">
        <li className="location__list__element">
          <span className="location__element">Type: </span> <br/>
          <span className="location__description">{locationInfo?.type}</span>
        </li>
        <li className="location__list__element">
          <span className="location__element">Dimension: </span> <br/>
          <span className="location__description">{locationInfo?.dimension}</span>
        </li>
        <li className="location__list__element">
          <span className="location__element">Population: </span>  <br/>
          <span className="location__description">{locationInfo?.residents.length}</span>
        </li>
      </ul>
    </article> 
  )
}

export default LocationInfo