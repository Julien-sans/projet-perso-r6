import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class CardPerso extends Component {
  render() {

    const { perso } = this.props;

    return(
      <div>
        <Card outline color="primary">
          <CardBody>
              {perso && perso[0].operator.name}
         </CardBody>
        </Card>
      </div>
    )
  }
}

export default CardPerso;
