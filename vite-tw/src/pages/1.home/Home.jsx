import CarouselonHome from "./Carousel"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="secondary-color">
        <CarouselonHome />

        <div className="home-padding">

          <div className="empty-space" />

          <div className="post-border">
            <div className="empty-space" />
            <div className="homepage-container3" >
              <h2>Welcome!</h2>
              <p>
                Welcome to Encylopedia Conway a webpage for anything and everything going on in Conway, Arkansas.
                This project is for my Senior Seminar class at Hendrix College. I am currently a senior there
                graduating in May 2024. This website has always been a passion project for me. As a lifetime Conway
                resident myself, I have always wanted to know what's going on and finding that information has always
                been difficult. This project is both for new and long time residents for Conway.
                Enjoy!
              </p>
            </div>
            <div className="empty-space" />
            <div className="homepage-container3">
              <h2>How to Navigate this website</h2>
              <p>
                This website has 7 pages with pertent information about the town of Conway.
                The events page has upcoming events in Conway. I've scoured the internet through facebook and other platforms for event information.
                The next page is for roadwork going on in town. The next page has entertaiment ideas such as good natural areas around
                and information about recreation leagues. The Second Hand Shops page has the location for all the thrift shops in town. The Restuarants page
                has the name and location for all the local restaurants in town. The voting page has information about upcoming bills and elections that you can vote on.
                And finally, the Walk-in clinics page has the name and location of walk-in clinics in town. Hopefully this helps. If you have any questions my contact information is below!
              </p>
            </div>


            <div className="empty-space" />
            <div className="homepage-container3">
              <h2>Want to make a website for your city?</h2>
              <p> You can follow a step by step tutorial.
                Additionally here is the source code for the website.
              </p>
              <div className="blue-underline"><Link to='https://github.com/Larsonog/FinalCapstoneProject' > Encyclopia Repository </Link> </div>
              
              <div/>
            </div>
            <div className="empty-space"/>
          </div>
        </div>




      </div>



    </div>


  )
}

export default Home