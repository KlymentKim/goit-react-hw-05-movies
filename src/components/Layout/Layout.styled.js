import styled from "styled-components";
import { NavLink, Link  } from "react-router-dom";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right:16px;
  height: 100%;
 
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  margin: 0 0 16px;
  border-radius: 5px;
  
  box-shadow: 0px 15px 10px -15px #111;   
  background-color: #f5f5f5;

  background: linear-gradient(-45deg, #ee7759, #23d547, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  
  @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

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

export const Input= styled.input`
  background-image: linear-gradient(#13fc0c, #13fc0c), linear-gradient(#444444, #444444);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 0;
  transition: background 0s ease-out 0s;
  color: #444444;
  min-height: 35px;
  min-width: 50%;
  display: initial;
  outline: none;
  font-size: 20px;
  &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
      color: #525252;
    }
`;
