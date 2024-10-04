// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {TeamData: [], isLoading: true}

  componentDidMount = () => {
    this.getIPLTeamData()
  }

  getIPLTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const db = await response.json()

    const updateData = {
      teamUrl: db.team_banner_url,
      latestMatch: {
        id: db.latest_match_details.id,
        competingTeam: db.latest_match_details.competing_team,
        competingTeamLogo: db.latest_match_details.competing_team_logo,
        date: db.latest_match_details.date,
        firstInn: db.latest_match_details.first_innings,
        secondInn: db.latest_match_details.second_innings,
        manOfTheMatch: db.latest_match_details.man_of_the_match,
        matchStatus: db.latest_match_details.match_status,
        result: db.latest_match_details.result,
        umpires: db.latest_match_details.umpires,
        venue: db.latest_match_details.venue,
      },
      recentMatches: db.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }
    this.setState({TeamData: updateData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="loader" color="#00BFFF" height={80} width={80} />
    </div>
  )

  renderLatestMatch = () => {
    const {TeamData} = this.state
    const {teamUrl} = TeamData

    return (
      <div>
        <img className="img-2" src={teamUrl} alt="team banner" />
        <LatestMatch TeamData={TeamData} />
        {this.renderRecentMatches()}
      </div>
    )
  }

  renderRecentMatches = () => {
    const {isLoading, TeamData} = this.state
    const {teamUrl, recentMatches} = TeamData

    return (
      <ul className="recent-match">
        {recentMatches.map(eachItem => (
          <MatchCard eachItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, TeamData} = this.state
    const {teamUrl} = TeamData
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`app-team-matches-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderLatestMatch()}
      </div>
    )
  }
}

export default TeamMatches
