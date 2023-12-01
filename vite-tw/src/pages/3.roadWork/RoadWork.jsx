import React, { useEffect, useState } from 'react';
import MyComponent from './googleMaps/googleMapsReact';



function RoadWork() {
  return (
    <div>
      <h1>Road Work</h1>
      <span><MyComponent/></span>
      <span>
        <h2>Construction</h2>
        <p>list of construction incidents. I should add into firebase </p>
      </span>
    </div>
  )

}


export default RoadWork;

//https://www.here.com/docs/bundle/maps-api-for-javascript-developer-guide/page/topics/traffic.html
// how to get html page in jsx file https://stackoverflow.com/questions/50792942/how-to-import-html-file-into-react-component-and-use-it-as-a-component