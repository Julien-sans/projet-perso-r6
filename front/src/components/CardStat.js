import React, { Component, Fragment } from 'react';
import { CardHeader, CardBody, Card, Col, Row, Progress, Tooltip } from 'reactstrap';
import '../styles/cardsStats.css';
import cuivre4 from '../images/RANKS/CUIVRE4.png';
import cuivre3 from '../images/RANKS/CUIVRE3.png';
import cuivre2 from '../images/RANKS/CUIVRE2.png';
import cuivre1 from '../images/RANKS/CUIVRE1.png';
import bronze4 from '../images/RANKS/BRONZE4.png';
import bronze3 from '../images/RANKS/BRONZE3.png';
import bronze2 from '../images/RANKS/BRONZE2.png';
import bronze1 from '../images/RANKS/BRONZE1.png';
import argent4 from '../images/RANKS/ARGENT4.png';
import argent3 from '../images/RANKS/ARGENT3.png';
import argent2 from '../images/RANKS/ARGENT2.png';
import argent1 from '../images/RANKS/ARGENT1.png';
import or4 from '../images/RANKS/OR4.png';
import or3 from '../images/RANKS/OR3.png';
import or2 from '../images/RANKS/OR2.png';
import or1 from '../images/RANKS/OR1.png';
import platine3 from '../images/RANKS/PLATINE3.png';
import platine2 from '../images/RANKS/PLATINE2.png';
import platine1 from '../images/RANKS/PLATINE1.png';
import diamant from '../images/RANKS/DIAMANT.png';

let Rank = (number, arrayImage) => arrayImage[number - 1]
const Abandon = (number) => {
  if(number > 1){
    return 'abandons'
  }
  else{
    return 'abandon'
  }
}

class CardStat extends Component {

  render() {

    const { stats, perso, statsSeason, rageBarre } = this.props;

    let rankNumber = statsSeason && statsSeason.seasons.wind_bastion.regions.emea[0].rank
    let rankNumberTwo = statsSeason && statsSeason.seasons.grim_sky.regions.emea[0].rank
    const arrayImage =
    [
      <img src={cuivre4} alt={cuivre4} style={{maxWidth:'50px'}}/>,
      <img src={cuivre3} alt={cuivre3} style={{maxWidth:'50px'}}/>,
      <img src={cuivre2} alt={cuivre2} style={{maxWidth:'50px'}}/>,
      <img src={cuivre1} alt={cuivre1} style={{maxWidth:'50px'}}/>,
      <img src={bronze4} alt={bronze4} style={{maxWidth:'50px'}}/>,
      <img src={bronze3} alt={bronze3} style={{maxWidth:'50px'}}/>,
      <img src={bronze2} alt={bronze2} style={{maxWidth:'50px'}}/>,
      <img src={bronze1} alt={bronze1} style={{maxWidth:'50px'}}/>,
      <img src={argent4} alt={argent4} style={{maxWidth:'50px'}}/>,
      <img src={argent3} alt={argent3} style={{maxWidth:'50px'}}/>,
      <img src={argent2} alt={argent2} style={{maxWidth:'50px'}}/>,
      <img src={argent1} alt={argent1} style={{maxWidth:'50px'}}/>,
      <img src={or4} alt={or4} style={{maxWidth:'50px'}}/>,
      <img src={or3} alt={or3} style={{maxWidth:'50px'}}/>,
      <img src={or2} alt={or2} style={{maxWidth:'50px'}}/>,
      <img src={or1} alt={or1} style={{maxWidth:'50px'}}/>,
      <img src={platine3} alt={platine3} style={{maxWidth:'50px'}}/>,
      <img src={platine2} alt={platine2} style={{maxWidth:'50px'}}/>,
      <img src={platine1} alt={platine1} style={{maxWidth:'50px'}}/>,
      <img src={diamant} alt={diamant} style={{maxWidth:'50px'}}/>
    ]

    let abandons = statsSeason && statsSeason.seasons.wind_bastion.regions.emea[0].abandons

    return(
      <Fragment>
        <Card className="my-4 mx-1 carteStat">
          <CardHeader className="d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-column">
              <div>{stats && stats.username} - {stats && stats.progression.level}</div>
              <div>E/M {stats && stats.stats[0].queue.ranked.kd}</div>
              <div>V/D {stats && stats.stats[0].queue.ranked.wl}</div>
            </div>
            <div>
              <img src={perso[0].operator.images.badge} alt="figures_perso" style={{maxWidth:'70px'}}/>
            </div>
          </CardHeader>
          <Fragment>
            {rageBarre}
          </Fragment>
          <CardBody className="text-center seasonCard1">
            <div className="d-flex flex-row justify-content-between align-items-center pl-5">
              <div className="w-80">
                <div><h4 className="noms">{statsSeason && statsSeason.seasons.wind_bastion.name}</h4></div>
                <div>{statsSeason && statsSeason.seasons.wind_bastion.regions.emea[0].wins} victoires</div>
                <div>{statsSeason && statsSeason.seasons.wind_bastion.regions.emea[0].losses} défaites</div>
                <div>{abandons} {Abandon(abandons)}</div>
              </div>
              <div className="pr-5">
                {Rank(rankNumber, arrayImage)}
              </div>
            </div>
          </CardBody>
          <CardBody className="text-center seasonCard2">
            <div className="d-flex flex-row justify-content-between align-items-center pl-5">
              <div>
                <div><h4 className="noms">{statsSeason && statsSeason.seasons.grim_sky.name}</h4></div>
                <div>{statsSeason && statsSeason.seasons.grim_sky.regions.emea[0].wins} victoires</div>
                <div>{statsSeason && statsSeason.seasons.grim_sky.regions.emea[0].losses} défaites</div>
                <div>{statsSeason && statsSeason.seasons.grim_sky.regions.emea[0].abandons} abandon</div>
              </div>
              <div className="pr-5">
                {Rank(rankNumberTwo, arrayImage)}
              </div>
            </div>
          </CardBody>
          <CardBody className="text-center seasonCard2">
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div>
                <div><h4 className="noms">Ratio par Mode de jeu</h4></div>
                <div>Bombe &emsp; {statsSeason && stats && stats.stats[0].gamemode.bomb.wl}</div>
                <div>Otage &emsp; {statsSeason && stats && stats.stats[0].gamemode.hostage.wl}</div>
                <div>Sécu de Zone &emsp; {statsSeason && stats && stats.stats[0].gamemode.secure_area.wl}</div>
              </div>
            </div>
          </CardBody>
          <CardBody className="text-center">
            <Row>
              <Col md='6' className="perso1 my-2">
                <div><h4 className="noms">{(perso[0].operator.name).toUpperCase()} - {(perso[0].operator.role).toUpperCase()}</h4></div>
                <div>Ratio E/M - {perso[0].kd}</div>
                <div>Eliminations - {perso[0].kills}</div>
                <div>Morts - {perso[0].deaths}</div>
                <div>Headshots - {perso[0].headshots}</div>
                <div>
                  <img src={perso[0].operator.images.figure} alt="figures_perso" style={{maxWidth:'150px'}}/>
                </div>
              </Col>
              <Col md='6' className="my-2">
                <div><h4 className="noms">{(perso[1].operator.name).toUpperCase()} - {(perso[1].operator.role).toUpperCase()}</h4></div>
                <div>Ratio E/M - {perso[1].kd}</div>
                <div>Eliminations - {perso[1].kills}</div>
                <div>Morts - {perso[1].deaths}</div>
                <div>Headshots - {perso[1].headshots}</div>
                <div>
                  <img src={perso[1].operator.images.figure} alt="figures_perso" style={{maxWidth:'150px'}}/>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Fragment>
    )
  }
}

export default CardStat;
