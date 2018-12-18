import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import {Button, SideNav} from 'react-materialize';
import profile from '../images/profile.jpg';


class Navbar extends Component {
  render() {
    return (
        <SideNav 
          trigger={<Button className='transparant-color btn-large btn-floating nav-button' waves='red'><i className="fas fa-bars white-text fa-3x"></i></Button>}
          options={{ closeOnClick: true }}
          className="warna"
          >
          <div className='center'><img src={profile} alt='i-gede-wicaksana' className='circle' height='150' width='150'/></div>
          <Link to='/' className='white-text'><h4><i className="fas fa-home orange-text fa-1x"></i> Home</h4></Link>
          <NavLink to='/about' className='white-text'><h4><i className="fas fa-user red-text fa-1x"></i> About Me </h4></NavLink>
          <NavLink to='/project' className='white-text'><h4><i className="fas fa-briefcase blue-text fa-1x"></i> My Project </h4></NavLink>
          <NavLink to='/contact' className='white-text'><h4><i className="fas fa-phone green-text fa-1x"></i> Contact Me </h4></NavLink>
        </SideNav>
    );
  }
}

export default Navbar;
