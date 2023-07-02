import styled from "styled-components";
import { NavLink, Link  } from "react-router-dom";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right:16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  margin: 0 0 16px;
  
  box-shadow: 0px 15px 10px -15px #111;   
  background-color: #f5f5f5;

  > nav {
    display: flex;
    gap: 20px
  }
`;

export const HeaderLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: tomato;
  }
`;

export const ErrorMessage = styled.p`
  text-align: left;
  color: tomato;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const GoBackLink = styled(Link)`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid grey;
  text-decoration: none;
  color: black;
  font-size: 12px;
  font-weight: 500;
   

  &.active {
    color: white;
    background-color: tomato;
  }
  :hover {
    background-color: lightblue;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);

  
  }    
`;