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
import { compare } from './helperFunctions'

class ResultsTable extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        data: this.props.data
      }

      this.getTrackData = this.getTrackData.bind(this)
      this.handleClick = this.handleClick.bind(this)
  }

  getTrackData() {
    let rows = this.state.data.leaderboards.time_trials[this.props.currentTrack].leaderboard
    return rows.sort(compare)
  }

  handleClick(name, car, time) {
    this.props.onClick(name, car, time)
  }

  render() {
    const rows = this.getTrackData()

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
                <TableCell align="right">Delete</TableCell>
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
                  <TableCell align="right"><button onClick={() => this.handleClick(row.name, row.car, row.time)}>Delete</button></TableCell>
                </TableRow>
            ))}
            </TableBody>
          </Table>
          </TableContainer>
        </div>
    )
  }
}

export default ResultsTable