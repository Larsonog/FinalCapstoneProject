import React, { useEffect, useState }from'react';
import ConwayMap from './default/ConwayMap';
import MyComponent from './googleMaps/googleMapsReact';
//import  TrafficConstruct from './googleMaps/initMaps';


function RoadWork () {
  return(
    <MyComponent/>
  )

}


export default RoadWork;

//https://www.here.com/docs/bundle/maps-api-for-javascript-developer-guide/page/topics/traffic.html
// how to get html page in jsx file https://stackoverflow.com/questions/50792942/how-to-import-html-file-into-react-component-and-use-it-as-a-component