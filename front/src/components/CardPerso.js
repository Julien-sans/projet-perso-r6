import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

class CardPerso extends Component {
  render() {

    const { perso } = this.props;

    return(
      <div>
        <Card outline color="primary">
          <CardBody>
              {perso && perso}
         </CardBody>
        </Card>
      </div>
    )
  }
}

export default CardPerso;
