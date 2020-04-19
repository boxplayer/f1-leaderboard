import React from 'react'

let cars = [
  'Mercedes',
  'Ferrari',
  'Red Bull',
  'Renault', 
  'Haas', 
  'McLaren',
  'Racing Point',
  'Alfa Romeo',
  'Toro Rosso',
  'Williams'
]

class AddTime extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      name: null,
      team: 'Mercedes',
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
        <form onSubmit={this.handleSubmit}>
           <div id='container'>
            <div className='field'>
              <input
                type='text'
                id='name'
                placeholder='Name'
                autoComplete='off'
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <select name='select' onChange={this.setCar}>
                {cars.map((car, index) => {
                  return (<option value={car} key={index} selected={this.state.team === car}>{car}</option>);
                })}
              </select>
            </div>
            <div className='field'>
              <input
                type='text'
                id='time'
                placeholder='Time'
                autoComplete='off'
                value={this.state.time}
                onChange={this.handleChange}
              />
            </div>
            <div className='field'>
              <button
                className='dark-btn round-btn'
                type='submit'
                disabled={!this.state.name || !this.state.time || !this.state.team}
              >
              Submit
            </button>
          </div>
          </div>
        </form>
      
      
    )
  }
}

export default AddTime