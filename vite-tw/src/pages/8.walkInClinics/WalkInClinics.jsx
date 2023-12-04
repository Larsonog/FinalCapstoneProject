
import ConwayMap from "./ConwayMap"
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
crossorigin=""/>
import { walkInClinicsLoc } from "./WList"

const WalkInClinics = () => {
  return (
    <div className="page-background">
      <h1>Walk-in Clinics
      </h1>
      <ConwayMap walkInClinicsLoc={walkInClinicsLoc}/>
    </div>
  )
}

export default WalkInClinics