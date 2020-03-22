import React from 'react';
import { 
  Table, 
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'
import AddTime from './AddTime'

function compare(a, b) {
  if (a.time > b.time) return 1;
  if (b.time > a.time) return -1;
  return 0;
}

function createRow(name, car, time) {
  return { name, car, time };
}

class ResultsTable extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        showAddTimeModal: false,
        showUpdateTimeModal: false,
        data: this.props.data
      }

      this.getTrackData = this.getTrackData.bind(this)
      this.addTime = this.addTime.bind(this)
  }

  getTrackData() {
    let rows = this.state.data.leaderboards.time_trials[this.props.currentTrack].leaderboard
    return rows.sort(compare)
  }

  addTime(name, car, time) {
    let { data } = this.state

    let row = createRow(name, car, time)
    data.leaderboards.time_trials[this.props.currentTrack].leaderboard.push(row)

    this.setState({
      ...this.state,
      data,
      showAddTimeModal: false
    })
  }


  render() {
    const rows = this.getTrackData()
    const { showAddTimeModal } = this.state

    return (
        <div className="container-sm">
          <TableContainer component={Paper}>
          <Table size="small" aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Position</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Car</TableCell>
                <TableCell align="left">Time</TableCell>
                <TableCell align="right">Difference</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                      {index + 1}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.car}</TableCell>
                  <TableCell align="left">{row.time}</TableCell>
                  <TableCell align="right">0</TableCell>
                </TableRow>
            ))}
            </TableBody>
          </Table>
          </TableContainer>

          <div>
            <button onClick={() => this.setState({showAddTimeModal: true})} className="dark-btn">Add Time</button>
            <button className="dark-btn">Update Time</button>
            <AddTime 
              show={showAddTimeModal} 
              onSubmit={(name, car, time) => (this.addTime(name, car, time))}/>
          </div>
        </div>
    )
  }
}

export default ResultsTable