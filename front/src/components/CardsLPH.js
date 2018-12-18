import React, { Component } from 'react';
import CardStatLPH from './CardStatLPH';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

class CardsLPH extends Component {

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
      'api/stats/edfbf879-57c1-41fb-8ca2-6e4a1fec4018/',
      'api/stats/a331cdd8-141d-43b9-bccb-736e465563f5/',
      'api/stats/a862a9bf-ad4c-45cb-b120-fed004a62b14/',
      'api/stats/89ecba3d-6339-425a-9bf5-0a1cc22a3a64/',
      'api/stats/3e6c3af6-8d7f-4c92-93db-0037659c5459/',
      'api/stats/17097edb-a4db-4067-932e-bf7f54cfb950/',
      'api/stats/754c4cb6-459e-4d4e-9b77-7960c02cec0c/',
      'api/stats/44640287-bcf4-4021-b855-037748cd0962/'
    ]

    const urlsSeasons =
    [
      'api/stats/edfbf879-57c1-41fb-8ca2-6e4a1fec4018/seasonal',
      'api/stats/a331cdd8-141d-43b9-bccb-736e465563f5/seasonal',
      'api/stats/a862a9bf-ad4c-45cb-b120-fed004a62b14/seasonal',
      'api/stats/89ecba3d-6339-425a-9bf5-0a1cc22a3a64/seasonal',
      'api/stats/3e6c3af6-8d7f-4c92-93db-0037659c5459/seasonal',
      'api/stats/17097edb-a4db-4067-932e-bf7f54cfb950/seasonal',
      'api/stats/754c4cb6-459e-4d4e-9b77-7960c02cec0c/seasonal',
      'api/stats/44640287-bcf4-4021-b855-037748cd0962/seasonal'
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

  const arrayPerso = statsArray.map(perso => perso.operators.sort((operateur1, operateur2) => operateur2.playtime - operateur1.playtime))
console.log(arrayPerso)

return(
  <div>
    <Container fluid>
      <Row>
        {
          statsArray.map((stat, index) =>
          <Col key={index} sm='12' md='4'>
            <CardStatLPH className="mx-auto" stats={stat} perso={arrayPerso[index]} statsSeason={statsSeason[index]} />
          </Col>
        )
      }
    </Row>
  </Container>

</div>
);
}
}

export default CardsLPH;
