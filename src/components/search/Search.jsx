import styled from "styled-components";

const Search = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search" />
      <ion-icon name="search-outline" size="large"></ion-icon>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: 32px 16px;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 1px black;

  position: absolute;
  left: 0;
  z-index: 999;
`;

const SearchInput = styled.input`
  font-size: 24px;
  width: 50vw;
  outline: none;
  border: none;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
`;
