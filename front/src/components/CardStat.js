import React, { Component } from 'react';
import { CardHeader } from 'reactstrap';

class CardStat extends Component {
  render() {

    const { stats, perso } = this.props;

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
            <div>
              {perso[0].operator.name}
              <img src={perso[0].operator.images.figure} alt="figures_perso" style={{maxWidth:'250px'}}/>
            </div>
         </CardHeader>


      </div>
    )
  }
}

export default CardStat;
