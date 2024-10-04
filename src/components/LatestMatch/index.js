// Write your code here
import './index.css'

const LatestMatch = props => {
  const {TeamData} = props
  const {latestMatch} = TeamData

  if (!latestMatch) {
    return <p>Loading latest match details...</p>
  }

  const {
    id,
    competingTeam,
    competingTeamLogo,
    date,
    firstInn,
    secondInn,
    manOfTheMatch,
    matchStatus,
    result,
    umpires,
    venue,
  } = latestMatch

  return (
    <div className="latest-match-card-container">
      <div className="latest-match-card">
        <div className="latest-match-logo-container">
          <div className="latest-match-details-main">
            <p className="latest-match-team-name">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="latest-match-venue">{venue}</p>
            <p className="latest-match-status">{result}</p>
          </div>
          <img
            className="latest-match-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div className="latest-match-details-info">
          <div className="match-info-item">
            <p className="latest-match-details-label">First Innings</p>
            <p className="latest-match-details-value">{firstInn}</p>
          </div>
          <div className="match-info-item">
            <p className="latest-match-details-label">Second Innings</p>
            <p className="latest-match-details-value">{secondInn}</p>
          </div>
          <div className="match-info-item">
            <p className="latest-match-details-label">Man Of The Match</p>
            <p className="latest-match-details-value">{manOfTheMatch}</p>
          </div>
          <div className="match-info-item">
            <p className="latest-match-details-label">Umpires</p>
            <p className="latest-match-details-value">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
