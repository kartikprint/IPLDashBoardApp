// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const {
    umpires,
    competingTeam,
    result,
    competingTeamLogo,
    matchStatus,
  } = eachItem
  console.log(eachItem)

  return (
    <li className={`recent-card ${matchStatus}`}>
      <img
        className="img-1"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="header">{competingTeam}</p>
      <p className="para">{result}</p>
      <p className="header-1">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
