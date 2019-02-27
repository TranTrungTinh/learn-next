import React, { Component } from 'react'
import ProgressBar from 'react-progress';

export default class Progress extends Component {
  state = {
    percent: 10
  }

  componentDidMount() {
    setTimeout(() => this.setState({ percent: 100 }), 300);
  }
  
  render() {
    return (
      <ProgressBar percent={this.state.percent} height="3"/>
    )
  }
}
