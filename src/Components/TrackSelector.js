import React from 'react'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

function TrackSelector ({ selectTrack, currentTrack }) {
    const tracks = [
        'Albert Park',
        'Bahrain International Circuit',
        'Monza',
    ]

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

    return (
        <div className='grid space-around container-sm'>
            <AiOutlineDoubleLeft   
                color='red' 
                className='arrow-icon'
                size={30}
                onClick={() => selectTrack(prevTrack(currentTrack, tracks))}
            />
            <div className='current-track'>
                <h3>{currentTrack}</h3>
            </div>
            <AiOutlineDoubleRight
                color='red'
                className='arrow-icon' 
                size={30}
                onClick={() => selectTrack(nextTrack(currentTrack,tracks))} 
            />
        </div>
    )
}

export default TrackSelector