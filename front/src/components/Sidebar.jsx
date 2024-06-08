import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./SideNav.css";
import { useNavigate } from "react-router-dom";

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
        expanded={this.state.isVisible}
        onSelect={(selected) => {
          console.log(selected);
          this.props.history.push(selected);
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
            <NavIcon>
              <i className="bi bi-house-door-fill"></i>
            </NavIcon>
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
