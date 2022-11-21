import styled from "styled-components";

const NavigationBar = ({ setShowSearch }) => {
  return (
    <Navbar>
      <NavItem>
        <ion-icon
          name="search-outline"
          onClick={() => setShowSearch((prev) => !prev)}
        ></ion-icon>
      </NavItem>
      <NavItem>Conferences</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Newsroom</NavItem>
      <NavItem>Conferences</NavItem>
      <NavItem>My Account</NavItem>
    </Navbar>
  );
};

export default NavigationBar;

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: #ced4da;
  padding: 8px 32px;
`;

const NavItem = styled.span`
  padding-left: 16px;
  border-left: 1px solid black;
  margin-right: 16px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  &:first-of-type {
    border: none;
  }
`;
