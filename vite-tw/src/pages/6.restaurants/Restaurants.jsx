import ConwayMap from "./ConwayMap"
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
crossorigin=""/>

const Restaurants = () => {
  return (
    <div>
      <h1>
        Restaurants
      </h1>
      <div className="row">
      <ConwayMap/>
      <div className= "container">
        <h2>List of local restaurants</h2>
        <ul>
          <li>
            Cross Creek Sandwhiches
          </li>
          <li>
          Stobys 
          </li>
          <li>
            BMB bakery 
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Restaurants