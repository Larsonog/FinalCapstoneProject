import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: 'Outdoor activities',
    href: '#',
    description:
      'This is a list that includes some nearby outdoor areas that you should explore!',
    date: '',
    datetime: '',
    category: { title: 'Outdoor', href: '#' },
    author: {}, // if I remove this, it gets angry
    image: './assets/Cadron.jpeg',
    list: <ul>
      <ul>Cadron Settlement Park</ul>
      <ul>Beaver Fork Park</ul>
      <ul> Hendrix Creek Preserve </ul>
      <ul>Don Owen Sport Complex</ul>
      <ul>Laurel Park</ul>
      <ul>Tucker Creek Walking Trail</ul>
      <ul>Jewel Moore Nature Reserve</ul>
      <ul>Martin Luther King Jr. Square</ul>
    </ul>
  },

  {
    id: 2,
    title: 'Recreation Leagues',
    href: '#',
    description:
      'Heres a list of organizations you can join!',
    date: '',
    datetime: '',
    category: { title: 'Group Activites', href: '#' },
    author: {},
    image: './assets/rec.jpeg',
    list: <ul>
      <ul className='blue-underline'> <Link to='https://conwayarkansas.gov/parks/programs/adult-softball/' >  Adult Softball league </Link> </ul>
      <ul className='blue-underline'> <Link to='https://conwayarkansas.gov/parks/programs/adult-kickball/' >  Adult Kickball league </Link> </ul>
      <ul className='blue-underline'> <Link to='https://conwayarkansas.gov/parks/programs/adult-basketball/'>  Adult Basketball league </Link> </ul>
      <ul className='blue-underline'> <Link to='https://conwayarkansas.gov/parks/programs/adult-volleyball/' >  Adult Volleyball league </Link> </ul>
      <ul className='blue-underline'> <Link to='https://conwayarkansas.gov/parks/programs/disc-golf/' >  Disc Golf </Link> </ul>
      <ul className='blue-underline'> <Link to='https://conwayarkansas.gov/parks/programs/youth-baseball/' >  Youth Baseball league </Link> </ul>
      <ul className='blue-underline'> <Link to='https://conwayarkansas.gov/parks/programs/youth-softball/' >  Youth Softball league </Link> </ul>
      <ul className='blue-underline'> <Link to='https://conwayarkansas.gov/parks/programs/youth-t-ball/' >  Youth T-ball </Link> </ul>
      <ul className='blue-underline'> <Link to='https://conwayarkansas.gov/parks/programs/youth-flag-football/' >  Youth flag football </Link> </ul>
      <ul className='blue-underline'> <Link to='https://conwayarkansas.gov/parks/programs/youth-softball/' >  Youth Fishing Derby </Link> </ul>
    </ul>
  },
  {
    id: 3,
    title: 'Miscelaneous',
    href: '#',
    description:
      'Additional activites',
    date: '',
    datetime: '',
    category: { title: 'Miscelaneous', href: '#' },
    author: {},
    image: './assets/downtown.jpeg',
    list:
      <ul>
        <ul className='blue-underline'> <Link to='https://www.kingslivemusic.com' > Grab a drink at Kings </Link> </ul>
        <ul className='blue-underline'> <Link to='https://fcl.org' > Check out Faulkner County public library </Link> </ul>
        <ul className='blue-underline'> <Link to='https://uca.edu/art/baum/' > Visit the Baum Gallery </Link> </ul>
        <ul className='blue-underline'> <Link to='https://www.windgatemuseum.org' > Visit the Windgate Museum </Link> </ul>
        <ul className='blue-underline'> <Link to='https://www.faulknercounty.org/faulknercountymuseum.org/' > Visit the Faulkner County Museum </Link> </ul>
        <ul className='blue-underline'> <Link to='https://www.conwayfamilybowl.com' > Go Bowling at Conway Family Bowl </Link> </ul>
        <ul className='blue-underline'> <Link to='https://www.climbconway.com' > Visit a climbing gym at Climb Conway </Link> </ul>
        
       
        
        
      </ul>
  },

  // More posts...
]

export default function Entertainment() {
  return (
    <div className="page-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Entertainment</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stuck on what you should do? Here are some fun activies you can do in Conway!.
          </p>
        </div>


        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div className='post-border'>
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div>
                  <img src={post.image} alt="" className="h-100 w-100 rounded bg-gray-50" style={{ height: 250, width: 400 }} />
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>

                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <Popup trigger=
                  {<div className='button-border'>
                    <div className='h2'>
                      <button> Click to see full list </button>
                    </div>
                  </div>}
                  modal nested>
                  {
                    close => (
                      <div className='modal'>
                        <div className='content'>
                          <h2>{post.title}</h2>
                          <div className='small-empty-space' />
                          <div className="container">

                            <p>{post.list}</p>
                          </div>
                        </div>
                        <div>
                          <button onClick=
                            {() => close()}>
                          </button>
                        </div>
                      </div>
                    )
                  }
                </Popup>

              </article>
            </div>
          ))}

        </div>


      </div>
    </div>

  )
}


//https://www.npmjs.com/package/react-clickable 
// to make the posts clickable into lists 