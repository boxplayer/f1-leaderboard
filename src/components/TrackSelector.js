import React from 'react'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

//onKeyDown={(event) => event.keyCode === 37 ? selectNewTrack() : null }

function TrackSelector ({ selectTrack, currentTrack, data }) {

    const tracks = Object.keys(data.leaderboards.time_trials)

    const nextTrack = (currentTrack, tracks) => {
        const index = tracks.indexOf(currentTrack)
        if(index === tracks.length - 1) return tracks[0]
        return tracks[index+1]
    }

    const prevTrack = (currentTrack, tracks) => {
        const index = tracks.indexOf(currentTrack)
        if(index === 0) return tracks[tracks.length - 1]
        return tracks[index-1]
    }

    const selectNewTrack = () => {
        return selectTrack(prevTrack(currentTrack, tracks))
    }

    return (
        <div className='grid space-around container-sm'>
            <button
                onClick={() => selectNewTrack()}
            >
                <AiOutlineDoubleLeft   
                    color='red' 
                    className='arrow-icon'
                    size={30}
                />
            </button>
            <div className='current-track'>
                <h3 className='formula1-font' >{currentTrack}</h3>
            </div>
            <button
                onClick={() => selectNewTrack()}
            >
                <AiOutlineDoubleRight
                    color='red'
                    className='arrow-icon' 
                    size={30}
                    onClick={() => selectTrack(nextTrack(currentTrack,tracks))} 
                />
            </button>
        </div>
    )
}

export default TrackSelector