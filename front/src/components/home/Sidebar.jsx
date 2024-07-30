import { Sidenav, Nav } from "rsuite";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import "./SideNav.css";
import { Justify } from "react-bootstrap-icons";
import userService from "../../services/userService";

function SideBar() {
  const [expanded, setExpanded] = useState(false);
  const [activeKey, setActiveKey] = useState();

  const cambioToggle = () => {
    setExpanded(!expanded);
  };

  const logout = () => {
    userService.logout();
    window.location.reload();
  };

  return (
    <div style={{ width: expanded ? 300 : 60 }}>
      <button onClick={cambioToggle} style={{ background: "#f7f7fa" }}>
        <Justify
          style={{
            width: expanded ? 290 : 45,
            color: expanded ? "#1675e0" : "inherit",
            transition: "width 0.25s, color 0.5s",
          }}
        />
      </button>
      <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />} as={NavLink} to="/">
              Home
            </Nav.Item>
            <Nav.Item
              eventKey="2"
              icon={<GroupIcon />}
              as={NavLink}
              to="/jugadores"
            >
              Jugadores
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<GroupIcon />} onClick={logout}>
              logout
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}

export default SideBar;
