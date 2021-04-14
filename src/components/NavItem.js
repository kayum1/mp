import React from 'react';

const NavItem = (props) => {
  const sendSection = (section) => {
    props.setSection(section);
  };

  return (
    <li>
      <a
        className={props.navItem === props.section ? 'active' : ''}
        href={`#${props.navItem}`}
        onClick={() => sendSection(props.navItem)}
      >
        {props.navItem}
      </a>
    </li>
  );
};
export default NavItem;
