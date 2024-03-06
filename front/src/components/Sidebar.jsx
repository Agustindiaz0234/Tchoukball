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
      <SideNav className="SideNavPrincipal" expanded={this.state.isVisible}>
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
          <NavItem eventKey="placed orders">
            <NavIcon>
              <i className="bi bi-person-wheelchair"></i>
            </NavIcon>
            <NavText>Jugadores</NavText>
          </NavItem>
          <NavItem eventKey="Redes">
            <NavIcon>
              <i className="bi bi-chat-text"></i>
            </NavIcon>
            <NavText>Redes</NavText>
          </NavItem>
          <NavItem eventKey="Sponsors">
            <NavIcon>
              <i className="bi bi-handbag"></i>
            </NavIcon>
            <NavText>Sponsors</NavText>
          </NavItem>
          <NavItem eventKey="Fixture">
            <NavIcon>
              <i className="bi bi-calendar"></i>
            </NavIcon>
            <NavText>Fixture</NavText>
          </NavItem>
          <NavItem eventKey="Fotos">
            <NavIcon>
              <i className="bi bi-camera"></i>
            </NavIcon>
            <NavText>Fotos</NavText>
          </NavItem>
          <NavItem eventKey="Colaboraciones">
            <NavIcon>
              <i className="bi bi-gift"></i>
            </NavIcon>
            <NavText>Colaboracion</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavBar;
