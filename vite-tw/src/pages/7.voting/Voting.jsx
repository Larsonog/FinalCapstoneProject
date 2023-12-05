//import UpcomingElections from "./UpComingElections"
import VotingDocs from "./UpcomingElections"
import { Link } from 'react-router-dom'

const Voting = () => {
  return (
    <div className="voting-page-background">

      <h1> Upcoming Voting Events! </h1>
      <div className="empty-space" />
      <div className="row">
        <div className="bigger-container">
          <img src="./assets/ballot.jpeg" />
          <div className="empty-space" />
          <div className="title"> Why Voting is important</div>
          <p>Voting in your local communities is important. It makes you an active
            member of your community and helps direct change happen!
            Local elections impact issues that affect daily life, such as education,
            public safety, infrastructure, and community services. Electing public officials
            influences the quality of local schools, the safety of neighborhoods,
            and the overall well-being of the community.  </p>
          <div className="empty-space" />
          <div className="border">
            <div className="container">
              <div className="title"> Why you should vote resources</div>
              <div className="blue-underline"><Link to='https://education.nationalgeographic.org/resource/why-voting-important/' >  Why Voting is Important- National Geographic</Link> </div>
              <div className="blue-underline"><Link to='https://civilrights.org/value/voting-rights/' > Voting Rights- Leadership Conference for Human Rights and Civil Rights</Link></div>
              <div className="empty-space" />
              <div className="title">Where you can find more info about upcoming elections</div>
              <div className="blue-underline"><Link to='https://www.votefaulkner.com/index.php/upcoming-elections' > Upcoming Elections for Faulkner County</Link></div>
              <div className="blue-underline"><Link to="https://ballotpedia.org/Conway,_Arkansas">Ballotpedia </Link></div>
              </div>
            </div>
          </div>
          <VotingDocs />
        </div>
      </div>
      )
}

      export default Voting