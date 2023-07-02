import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  padding: 0 0 20px 20px;
`;

export const PosterWrap = styled.div`
  flex-basis: 320px;
  margin-bottom: 20px;
  
`;

export const Poster = styled.img`
  min-width: 200px;
`;

export const InfoWrap = styled.div`
    width: calc(100% - 20px);
    padding: 20px;
`;

export const InfoText = styled.p`
  margin: 16px 0;
`;