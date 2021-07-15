import React from "react";
import { Menu, Container, Segment } from "semantic-ui-react";

const Navbar = ({ active, current }) => {
  const handleItemClick = (name) => {
    active(name);
  };

  return (
    <Segment inverted textAlign="center" vertical>
      <Menu inverted pointing secondary fixed>
        <Menu.Item
          name="home"
          active={current === "home"}
          onClick={() => handleItemClick("home")}
        />
        <Menu.Item
          name="About Me"
          active={current === "about"}
          onClick={() => handleItemClick("about")}
        />
        <Menu.Item
          name="Contact"
          active={current === "contact"}
          onClick={() => handleItemClick("contact")}
        />
      </Menu>
    </Segment>
  );
};

export default Navbar;
