import React, { Component } from 'react'

class IdeasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/ideas')
    .then(response => response.json())
    .then(idea => this.setState({ideas: idea}))
  }

  render() {
    return (
      <div>
        Ideas
      </div>
    )
  }
}

export default IdeasContainer
