import React from 'react'
import f1_logo from '../f1_logo.svg'


function MainLogo () {
    return (
        <div>
            <img src={f1_logo} className="App-logo-f1" alt="f1_logo" />
            <h1 className='header-lg'>
                LEADERBOARD
            </h1>
        </div>
    )
}

export default MainLogo