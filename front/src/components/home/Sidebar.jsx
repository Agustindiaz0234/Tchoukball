import { Sidenav, Nav, Toggle } from "rsuite";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import "./SideNav.css";

function SideBar() {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState();

  return (
    <div style={{ width: 240 }}>
      <Toggle
        onChange={setExpanded}
        checked={expanded}
        icon={<DashboardIcon />}
      />
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
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}

export default SideBar;
