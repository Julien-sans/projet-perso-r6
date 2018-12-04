import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: null
    };
  }

  componentDidMount(cards) {
    axios.get('/api/stats/papipepite')
      .then(response => response.data)
      .then(stats => this.setState({ stats }));
  }

  render() {
    const { stats } = this.state;
    console.log(this.state)
    return(
      <div>
          <h1>{stats && stats.player.stats.ranked.kd}</h1>
      </div>
    );
  }
}

export default Cards;
