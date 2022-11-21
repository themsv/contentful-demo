import { useState } from "react";
import NavigationBar from "../navbar/navbar";
import Search from "../search/Search";

import styled from "styled-components";

import logo from "../../assets/Wissen_Logo.jpg";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import NavDrawer from "../nav-drawer/NavDrawer";

const nav_data = [
  {
    label: "Industries",
    values: [
      "Banking & Financial Services",
      "Telecom",
      "Healthcare",
      "Manufacturing",
      "Energy",
    ],
  },
  {
    label: "Services",
    values: ["Application Development", "Cloud", "Mobility"],
  },
  {
    label: "Solutions",
    values: [
      "Products",
      "Interview Ninja",
      "Accelerators",
      "Intellisearch",
      "Docxtractor",
    ],
  },
  {
    label: "Insights",
    values: ["Success Stories", "Articles", "Downloads", "News and Articles"],
  },
];
const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <header>
        <NavigationBar setShowSearch={setShowSearch} />
        <HeadWrapper>
          <HeaderContainer>
            <Link to="/">
              <div className="header-logo">
                <img src={logo} width="150" alt="logo" />
                <span>Headless CMS demo</span>
              </div>
            </Link>
            {nav_data.map((eachNav) => (
              <NavDrawer key={eachNav.label} eachNav={eachNav} />
            ))}
          </HeaderContainer>
          <HeadButton to="/register">Become a Client</HeadButton>
        </HeadWrapper>
        {showSearch && <Search setShowSearch={setShowSearch} />}
      </header>
      <Outlet />
    </>
  );
};

export default Header;

const HeaderContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
`;

const HeadButton = styled(Link)`
  background-color: #fe530a;
  padding: 12px 32px;
  color: white;
  border: none;
  font-weight: bold;
  border: none;
  outline: none;
  text-decoration: none;

  &:hover {
    color: #fe530a;
    background-color: #fff;
    border: 1px solid #fe530a;
  }
`;

const HeadWrapper = styled.div`
  display: flex;
  padding: 16px 48px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 2px #002856;
`;
