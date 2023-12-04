import ConwayMap from "./ConwayMap"
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
crossorigin=""/>
import { secondHandShops } from "./SList"

const SecondHandShops = () => {
  return (
    <div>
      <h1>SecondHandShops
      
      </h1>
      <ConwayMap secondHandShops={secondHandShops}/>
    </div>
  )
}

export default SecondHandShops