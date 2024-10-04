// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {IPLData: [], isLoading: true}

  componentDidMount = () => {
    this.getDataIPL()
  }

  getDataIPL = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const db = await response.json()
    const update = db.teams.map(each => ({
      name: each.name,
      id: each.id,
      imageUrl: each.team_image_url,
    }))
    this.setState({IPLData: update, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  renderTeam = () => {
    const {IPLData} = this.state
    return (
      <ul className="team-ipl">
        {IPLData.map(each => (
          <TeamCard IPLData={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home">
        <div className="text">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="header">IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderTeam()}
      </div>
    )
  }
}
export default Home
