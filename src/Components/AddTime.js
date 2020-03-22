import React from 'react'

let cars = [
  'Mercedes-AMG',
  'Scuderia Ferrari',
  'Red Bull Racing',
  'Renault', 
  'Rich Energy Haas', 
  'McLaren',
  'Racing Point',
  'Alfa Romeo Racing',
  'Toro Rosso Honda',
  'Rokit Williams'
]

class AddTime extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      name: null,
      team: null,
      time: null
    }

    this.setCar = this.setCar.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setCar(event) {
    this.setState({
      ...this.state,
      team: event.target.value,
    })
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.id]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    const { name, team, time } = this.state

    this.props.onSubmit(name, team, time)

    this.setState({
      name: null,
      team: null,
      time: null
    })
  }

  render (){
    if(!this.props.show){
      return null;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            id='name'
            className='input-light'
            placeholder='Name'
            autoComplete='off'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <select name="select" onChange={this.setCar}>
            {cars.map((car, index) => {
              return (<option value={car} key={index} selected={this.state.team === car}>{car}</option>);
            })}
          </select>
          <input
            type='text'
            id='time'
            className='input-light'
            placeholder='Time'
            autoComplete='off'
            value={this.state.time}
            onChange={this.handleChange}
          />
          <button
            className='dark-btn'
            type='submit'
            disabled={!this.state.name || !this.state.time || !this.state.team}
          >
            Submit
          </button>
        </form>
      </div>
      
      
    )
  }
}

export default AddTime