import React, { Component } from 'react';
import { Card, CardHeader } from 'reactstrap';

class CardStat extends Component {
  render() {

    const { stats, attaquants } = this.props;

    return(
      <div>
          <CardHeader>
              {stats && stats.username}
            <div>
              {stats && stats.progression.level}
            </div>
            <div>
              {stats && stats.stats[0].queue.ranked.kd}
            </div>
            <div>
              {stats && stats.stats[0].queue.ranked.wl}
            </div>
         </CardHeader>


      </div>
    )
  }
}

export default CardStat;
