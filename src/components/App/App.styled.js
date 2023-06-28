import styled from "styled-components";

export const Container=styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`

export const Header = styled.header`
  display:flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  cursor:pointer;
  list-style:none;
  text-decoration: none;

    > nav, ul, li {
        display: flex;
        
    }
  
`;