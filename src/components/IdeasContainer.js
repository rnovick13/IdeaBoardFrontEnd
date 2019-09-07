import React, { Component } from 'react'
import Idea from './Idea'

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
        {this.state.ideas.map((idea) => {
          return(
            <Idea idea={idea} key={idea.id} />
          )
        })}
      </div>
    )
  }
}

export default IdeasContainer
