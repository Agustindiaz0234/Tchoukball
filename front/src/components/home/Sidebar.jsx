import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./SideNav.css";

import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  render() {
    return (
      <SideNav
        className="SideNavPrincipal"
        onSelect={(selected) => {
          console.log(selected);
        }}
      >
        <SideNav.Toggle
          className="sidenav-toggle"
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />
        <SideNav.Nav defaultSelected="home">
          <NavItem className="NavItem" eventKey="home">
            <NavIcon></NavIcon>
            <NavText className="navText">Home</NavText>
          </NavItem>
          <NavItem eventKey="jugadores">
            <NavIcon>
              <i className="bi bi-person-wheelchair"></i>
            </NavIcon>
            <NavText>Jugadores</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavBar;
