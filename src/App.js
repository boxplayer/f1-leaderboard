import React from 'react';
import './App.css';
import MainLogo from './Components/MainLogo'
import Leaderboards from './Components/Leaderboards.js'


const data = {
  'leaderboards':{
    'time_trials':{
      'Albert Park': {
        'leaderboard':[
          {'name': 'Posejdon', 'car':'Racing Point', 'time': '1:20.043'},
          {'name':'Silver', 'car':'Rokit Williams', 'time':'1:15.043'},
          {'name':'Jan', 'car':'Mercedes', 'time':'1:22.043'}
        ]
      },
      'Bahrain International Circuit': {
        'leaderboard':[
          {'name': 'Posejdon', 'car':'Williams', 'time': '1:26.043'},
          {'name':'Silver', 'car':'Ferrari', 'time':'1:27.043'},
          {'name':'Jan', 'car':'HAAS', 'time':'1:25.043'}
        ]
      },
      'Monza': {
        'leaderboard':[
          {'name': 'Posejdon', 'car':'Torro Rosso', 'time': '1:27.043'},
          {'name':'Silver', 'car':'HAAS', 'time':'1:24.968'},
          {'name':'Jan', 'car':'HAAS', 'time':'1:24.985'}
        ]
      },
    }
  }
}

function App() {
  return (
    <div className="App">
      <MainLogo />
      <Leaderboards data={data}/>
    </div>
  );
}

export default App;
