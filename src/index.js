import React from 'react';
import ReactDOM from 'react-dom';
import Leaderboards from './Components/Leaderboards'
import MainLogo from './Components/MainLogo'
import { database } from './config/Firebase'

import './App.css';
import './index.css';
import './fonts/Formula1-Regular.ttf'
import './fonts/Formula1-Bold.ttf'

import * as serviceWorker from './serviceWorker';


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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();