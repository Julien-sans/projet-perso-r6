import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import '../styles/NavBar.css';

  export default class NavBar extends React.Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <Fragment>
          <Navbar color="dark" className="fixed-top" expand="md">
          <Link exact to='/Home' className="mr-3 logo"><strong className="text-white">STATS</strong></Link>
          <Link className="nav-item text-white lphLink text-danger font-weight-bold" exact to="/lph-stats">LPH</Link>
        </Navbar>
      </Fragment>
    );
  }
}
