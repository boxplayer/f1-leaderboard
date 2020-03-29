import React from 'react'
import TrackSelector from './TrackSelector'
import ResultsTable from './ResultsTable'
import AddTime from './AddTime'
import { createRow } from './helperFunctions'
import firebase from '../config/Firebase'

class Leaderboards extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentTrack: 'Monza',
            showAddTimeModal: false,
            data: this.props.data
        }

        this.selectTrack = this.selectTrack.bind(this)
        this.addTime = this.addTime.bind(this)
    }

    componentDidUpdate() {
        console.log("WRITING DATA")
        this.writeUserData();

        
    }

    writeUserData = () => {
        firebase.database().ref('/').set(this.state.data)
            .then(() => console.log('set the data'))
            .catch((error) => console.error("Error writing to db: ", error))
        console.log('DATA SAVED')
    }

    selectTrack(track) {
        this.setState({
            currentTrack: track,
            showAddTimeModal: false
        })
    }

    addTime(name, car, time) {
        let { data } = this.state
    
        let row = createRow(name, car, time)
        data.leaderboards.time_trials[this.state.currentTrack].leaderboard.push(row)
    
        this.setState({
          ...this.state,
          data,
          showAddTimeModal: false
        })
      }

    deleteTime(removeName, removeCar, removeTime) {
        let { data } = this.state
    
        let removeRow = createRow(removeName, removeCar, removeTime)
        let leaderboard = data.leaderboards.time_trials[this.state.currentTrack].leaderboard
        let newLeaderboard = leaderboard.filter(({name, car, time}) => {
            let row = createRow(name, car, time)
            if(JSON.stringify(row) !== JSON.stringify(removeRow)) return row
            return null
        })
        
        data.leaderboards.time_trials[this.state.currentTrack].leaderboard = newLeaderboard
        
        console.log('setting state')
        this.setState({
          data,
        })
    }

    render () {
        const { currentTrack, showAddTimeModal, data } = this.state

        return (
            <div>
                <TrackSelector 
                    currentTrack={currentTrack} 
                    selectTrack={this.selectTrack} 
                />
                <ResultsTable currentTrack={currentTrack} data={data} onClick={(name, car, time) => (this.deleteTime(name, car, time))}/>
                <div>
                    <button onClick={() => this.setState({showAddTimeModal: true})} className="dark-btn">Add Time</button>
                    <button className="dark-btn">Update Time</button>
                </div>
                <AddTime 
                    show={showAddTimeModal} 
                    onSubmit={(name, car, time) => (this.addTime(name, car, time))}
                />
            </div>
        )
    }
}

export default Leaderboards