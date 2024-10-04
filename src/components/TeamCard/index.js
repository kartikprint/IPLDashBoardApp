// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {IPLData} = props
  const {name, id, imageUrl} = IPLData
  const {match} = props
  console.log(id)

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="ipl-team">
        <img className="team-img" src={imageUrl} alt={name} />
        <p className="header1">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
