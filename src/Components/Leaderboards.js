import React from 'react'
import TrackSelector from './TrackSelector'
import ResultsTable from './ResultsTable'
import AddTime from './AddTime'
import { createRow } from './helperFunctions'
import firebase from './../firebaseConfig'

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

    componentDidUpdate(prevState) {
        if (prevState !== this.state) {
            this.writeUserData();
        }
    }

    writeUserData = () => {
        firebase.database().ref('/').set(this.state.data);
        console.log('DATA SAVED');
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

    render () {
        const { currentTrack, showAddTimeModal, data } = this.state

        return (
            <div>
                <TrackSelector 
                    currentTrack={currentTrack} 
                    selectTrack={this.selectTrack} 
                />
                <ResultsTable currentTrack={currentTrack} data={data}/>
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