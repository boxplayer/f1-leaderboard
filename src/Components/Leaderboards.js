import React from 'react'
import TrackSelector from './TrackSelector'
import ResultsTable from './ResultsTable'

class Leaderboards extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentTrack: 'Monza'
        }

        this.selectTrack = this.selectTrack.bind(this)
    }

    selectTrack(track) {
        this.setState({
            currentTrack: track
        })
    }

    render () {
        const { currentTrack } = this.state
        const { data } = this.props

        return (
            <div>
                <TrackSelector 
                    currentTrack={currentTrack} 
                    selectTrack={this.selectTrack} 
                />
                <ResultsTable currentTrack={currentTrack} data={data}/>
            </div>
        )
    }
}

export default Leaderboards