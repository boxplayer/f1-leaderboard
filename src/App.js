import React from 'react';
import './App.css';
import MainLogo from './components/MainLogo'
import Leaderboards from './components/Leaderboards.js'
import { database } from './config/Firebase'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      loading: true
    }

    this.getUserData = this.getUserData.bind(this)
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData = () => {
    let ref = database.ref('/');
    ref.on('value', snapshot => {
      const value = snapshot.val()
      this.setState({
        data: value,
        loading: false
      })
    })

    console.log('DATA RETRIEVED');
  }

  render () {
    const { data, loading } = this.state

    return (
      <div className="App">
        <MainLogo />
        {!loading &&
          <Leaderboards data={data}/>
        }
      </div>
    );
  }
}

export default App;
