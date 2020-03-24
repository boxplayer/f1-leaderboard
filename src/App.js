import React from 'react';
import './App.css';
import MainLogo from './Components/MainLogo'
import Leaderboards from './Components/Leaderboards.js'
import firebase from './firebaseConfig.js'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData = () => {
    let ref = firebase.database().ref('/');
    ref.on('value', snapshot => {
      const value = snapshot.val();
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
        {!loading && <Leaderboards data={data}/>}
      </div>
    );
  }
}

export default App;
