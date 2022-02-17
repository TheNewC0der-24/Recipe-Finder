import styled from 'styled-components';

export const Header = styled.div`
  color: #fff;
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

export const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;

export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
  width: 100%;
  overflow: auto;
`;