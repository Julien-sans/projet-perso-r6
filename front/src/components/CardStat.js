import React, { Component } from 'react';
import { Card, CardHeader, CardTitle } from 'reactstrap';

class CardStat extends Component {
  render() {

    const { stats } = this.props;

    return(
      <div>
        <Card outline color="primary">
          <CardHeader>
              {stats && stats.player.username}
          </CardHeader>
        </Card>
    
        <h1>{stats && stats.player.stats.ranked.kd}</h1>
      </div>
    )
  }
}

export default CardStat;
