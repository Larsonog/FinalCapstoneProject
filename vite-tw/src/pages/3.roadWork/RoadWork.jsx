import MyComponent from './googleMaps/googleMapsReact';
import Construction from './Construction';

function RoadWork() {
  return (
    <div>
      <h1>Road Work</h1>
      <div className='row'>
        <MyComponent />
        <h2>Construction</h2>
        {/*<Construction/> */}
      </div>
    </div>
  )

}

export default RoadWork;

//https://www.here.com/docs/bundle/maps-api-for-javascript-developer-guide/page/topics/traffic.html
// how to get html page in jsx file https://stackoverflow.com/questions/50792942/how-to-import-html-file-into-react-component-and-use-it-as-a-component