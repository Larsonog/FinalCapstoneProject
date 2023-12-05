import MyComponent from './googleMaps/googleMapsReact';
import { CList } from './ConList';
import Construction2 from './Construction2';
function RoadWork() {
  return (
    <div className='page-background'>
     
      <h1>Road Work</h1>
      <div className='center'>
      <div className='row'>
        
          <MyComponent />
          <div className='empty-space'/>

          <div className='border'>
            <div className='container'>
              <h2>Construction</h2>
              <Construction2 conList={CList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default RoadWork;

