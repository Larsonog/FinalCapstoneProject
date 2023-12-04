import ConwayMap from "./ConwayMap"
import { rList } from "./List"
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
  crossorigin="" />

function submitMoreR() {
  let x = document.getElementById("moreRList").value;
  document.getElementById("demo").innerHTML = x;
}

const Restaurants = () => {


  return (
    <div>
      <h1>
        Restaurants
      </h1>
      <div className="row">
        <ConwayMap rList={rList} />
        <div className="border">x
          <div className="container">
            {rList.map((shop, index) => (
              <ul> {shop.name} </ul>
            ))}
          </div>
        </div>
      </div>
 
    
    </div >
  )
}

export default Restaurants