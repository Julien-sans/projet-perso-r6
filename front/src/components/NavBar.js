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
          <Link exact to='/Home' className="mr-3"><strong className="text-white">STATS</strong></Link>
          <Link className="nav-item text-white" exact to="/lph-stats">LPH</Link>
        </Navbar>
      </Fragment>
    );
  }
}
