import React, { Component } from 'react';
import CardStat from './CardStat';
import { Container, Row, Col, Card } from 'reactstrap';
import axios from 'axios';

class Cards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statsArray: [],
      statsSeason: []
    };
  }

  componentDidMount(){
    const urls =
    [
      'api/stats/e180330f-e83f-43c3-abb2-bb3994108ae1/',
      'api/stats/c0c2cad6-abe7-4026-91ac-dc1c5d29cb5f/',
      'api/stats/f763f92e-ad89-4d2e-bd2c-bdc72ed44d8a/',
      'api/stats/dd52645c-c662-4e45-9cf4-90a1acb79a97/',
      'api/stats/d88f9352-d01c-4e91-a769-a4bbfbe5e0bd/',
      'api/stats/d91a1487-4427-4858-97ed-2f9c772bc17c/',
      'api/stats/9307af34-bc74-4716-be66-97f642d55069/',
      'api/stats/98e0a69a-ac53-4461-862f-0e1471fe7ea5/',
      'api/stats/f7734587-2bc6-42ff-a11a-024a347a5297/',
      'api/stats/a4c18ded-1f4d-4b60-9a8c-19a7d60ff6ef/',
      'api/stats/c04310ce-b4b3-49d8-9672-8048698108f9/',
      'api/stats/e44cbc00-3336-4e53-a2e7-e934ad9588be/'
    ]

    const urlsSeasons =
    [
      'api/stats/f763f92e-ad89-4d2e-bd2c-bdc72ed44d8a/seasonal',
      'api/stats/e44cbc00-3336-4e53-a2e7-e934ad9588be/seasonal',
      'api/stats/c0c2cad6-abe7-4026-91ac-dc1c5d29cb5f/seasonal',
      'api/stats/e180330f-e83f-43c3-abb2-bb3994108ae1/seasonal',
      'api/stats/a4c18ded-1f4d-4b60-9a8c-19a7d60ff6ef/seasonal',
      'api/stats/d91a1487-4427-4858-97ed-2f9c772bc17c/seasonal',
      'api/stats/f7734587-2bc6-42ff-a11a-024a347a5297/seasonal',
      'api/stats/98e0a69a-ac53-4461-862f-0e1471fe7ea5/seasonal',
      'api/stats/9307af34-bc74-4716-be66-97f642d55069/seasonal',
      'api/stats/dd52645c-c662-4e45-9cf4-90a1acb79a97/seasonal',
      'api/stats/c04310ce-b4b3-49d8-9672-8048698108f9/seasonal',
      'api/stats/d88f9352-d01c-4e91-a769-a4bbfbe5e0bd/seasonal'
    ]

    let promiseArray = urls.map(url => axios.get(url).then(response => response.data).catch(error => { console.error(error) }));
    Promise.all(promiseArray).then(statsArray => this.setState({ statsArray }))

    let promiseSeasons = urlsSeasons.map(url => axios.get(url).then(response => response.data).catch(error => { console.error(error) }));
    Promise.all(promiseSeasons).then(statsSeason => this.setState({ statsSeason }))
  }


  /*componentDidMount(username) {
    axios.get(`/api/stats/e180330f-e83f-43c3-abb2-bb3994108ae1/seasonal`)
      .then(response => response.data)
      .then(stats => this.setState({ stats }));
  }*/

  render() {

    const { statsArray, statsSeason } = this.state;
    console.log(this.state)

    const arrayPerso = statsArray.sort((player1, player2) =>
      player2.progression.level - player1.progression.level
    ).map(perso => perso.operators.sort((operateur1, operateur2) => operateur2.playtime - operateur1.playtime))
    console.log(arrayPerso)

    const decreasingLevel = statsArray.sort((player1, player2) =>
      player2.progression.level - player1.progression.level
    )

    return(
      <div>
        <Container fluid>
          <Row>
            {
              decreasingLevel.map((stat, index) =>
                <Col key={index} sm='12' md='4'>
                    <CardStat className="mx-auto" stats={stat} perso={arrayPerso[index]} statsSeason={statsSeason[index]} />
                </Col>
              )
            }
          </Row>
        </Container>

      </div>
    );
  }
}

export default Cards;
