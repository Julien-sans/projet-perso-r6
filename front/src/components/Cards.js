import React, { Component } from 'react';
import CardStat from './CardStat';
import axios from 'axios';

class Cards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statsArray: []
    };
  }

  componentDidMount(){
    const urls =
    [
      '/api/stats/papipepite',
      '/api/stats/chlolien',
      '/api/stats/kirikou09',
      '/api/stats/valentino0939046',
      '/api/stats/Baku-Champloo',
    ]

    let promiseArray = urls.map(url => axios.get(url).then(response => response.data).catch(error => { console.error(error) }));

    Promise.all(promiseArray)
      .then(statsArray => this.setState({ statsArray }))
      }


  /*componentDidMount(username) {
    axios.get(`/api/stats/papipepite`)
      .then(response => response.data)
      .then(stats => this.setState({ stats }));
  }*/



  render() {
    const { statsArray } = this.state;
    console.log(this.state)
    return(
      <div>
        {
          statsArray.map((stat, index) =>
            <CardStat stats={stat}/>
          )
        }
      </div>
    );
  }
}

export default Cards;
