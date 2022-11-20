import styled from "styled-components";
import { useState } from "react";

const NavDrawer = ({ eachNav }) => {
  const [show, setShow] = useState(false);
  const { label, values } = eachNav;

  return (
    <>
      <HeaderItem
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div>{label}</div>
        {show && (
          <NavHover>
            {values.map((value) => (
              <li>
                {value} <ion-icon name="arrow-forward-outline"></ion-icon>
              </li>
            ))}
          </NavHover>
        )}
      </HeaderItem>
    </>
  );
};

export default NavDrawer;

const HeaderItem = styled.li`
  padding: 0 16px;
  border-left: 1px solid white;
  border-right: 1px solid white;
  &:hover {
    color: blue;
    border-left: 1px solid blue;
    border-right: 1px solid blue;
    cursor: pointer;
  }
  &:first-of-type {
    margin-left: 32px;
  }

  position: relative;
`;

const NavHover = styled.ul`
  position: absolute;
  top: 40px;
  left: 20px;
  list-style: none;
  background-color: white;
  width: 280px;
  z-index: 999999;
  box-shadow: rgb(0 0 0 / 16%) 0px 4px 24px;

  li {
    margin: 12px 0;
    color: #000;
    border-bottom: 1px solid #ccc;
    padding: 0.2rem 1rem;
    display: flex;
    align-items: center;
    gap: 8px;
    &:last-of-type {
      border: none;
      padding-bottom: 0;
    }
  }
`;
