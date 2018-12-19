import React, { Component } from 'react';
import CardStat from './CardStat';
import { Container, Row, Col, Progress } from 'reactstrap';
import axios from 'axios';
import '../styles/Cards.css';
import loadingImage from '../images/loadingImage.gif';

class Cards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statsArray: [],
      statsSeason: [],
      loading: true
    };
  }

  componentDidMount(){

    const urls =
    [
      'api/stats/f763f92e-ad89-4d2e-bd2c-bdc72ed44d8a/',
      'api/stats/e44cbc00-3336-4e53-a2e7-e934ad9588be/',
      'api/stats/c0c2cad6-abe7-4026-91ac-dc1c5d29cb5f/',
      'api/stats/e180330f-e83f-43c3-abb2-bb3994108ae1/',
      'api/stats/a4c18ded-1f4d-4b60-9a8c-19a7d60ff6ef/',
      'api/stats/d91a1487-4427-4858-97ed-2f9c772bc17c/',
      'api/stats/f7734587-2bc6-42ff-a11a-024a347a5297/',
      'api/stats/98e0a69a-ac53-4461-862f-0e1471fe7ea5/',
      'api/stats/9307af34-bc74-4716-be66-97f642d55069/',
      'api/stats/dd52645c-c662-4e45-9cf4-90a1acb79a97/',
      'api/stats/c04310ce-b4b3-49d8-9672-8048698108f9/',
      'api/stats/d88f9352-d01c-4e91-a769-a4bbfbe5e0bd/'
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
    Promise.all(promiseArray).then(statsArray => this.setState({ loading: false, statsArray }))

    let promiseSeasons = urlsSeasons.map(url => axios.get(url).then(response => response.data).catch(error => { console.error(error) }));
    Promise.all(promiseSeasons).then(statsSeason => this.setState({ loading: false, statsSeason }))
  }

  render() {

    const { statsArray, statsSeason, loading } = this.state;

    const arrayPerso = statsArray.map(perso => perso.operators.sort((operateur1, operateur2) => operateur2.playtime - operateur1.playtime))

    const rageBarre =
    [
      <Progress animated style={{'height': '9px'}} value={90} color='danger'>90%</Progress>,
      <Progress animated style={{'height': '9px'}} value={90} color='danger'>90%</Progress>,
      <Progress animated style={{'height': '9px'}} value={70} color='danger'>70%</Progress>,
      <Progress animated style={{'height': '9px'}} value={30} color='success'>30%</Progress>,
      <Progress animated style={{'height': '9px'}} value={50} color='warning'>50%</Progress>,
      <Progress animated style={{'height': '9px'}} value={40} color='warning'>40%</Progress>,
      <Progress animated style={{'height': '9px'}} value={70} color='danger'>70%</Progress>,
      <Progress animated style={{'height': '9px'}} value={50} color='warning'>50%</Progress>,
      <Progress animated style={{'height': '9px'}} value={30} color='success'>30%</Progress>,
      <Progress animated style={{'height': '9px'}} value={50} color='warning'>50%</Progress>,
      <Progress animated style={{'height': '9px'}} value={10} color='success'>10%</Progress>,
      <Progress animated style={{'height': '9px'}} value={20} color='success'>20%</Progress>,
    ]

    return(
      <div className="Cards">
        <Container fluid>
          <Row>
            {
              loading ?
              <div className="loadingImage d-flex align-items-center mx-auto">
                <img src={loadingImage} alt={loadingImage} style={{maxWidth:'300px'}}/>
              </div>
              :
              statsArray.map((stat, index) =>
              <Col key={index} sm='12' md='4'>
                <CardStat className="mx-auto" stats={stat} perso={arrayPerso[index]} rageBarre={rageBarre[index]} statsSeason={statsSeason[index]} />
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
