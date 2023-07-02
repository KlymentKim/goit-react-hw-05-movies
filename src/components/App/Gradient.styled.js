import styled from "styled-components";

export const GradientGlobalSet = styled.div`
  background: linear-gradient(-45deg, #ee7759, #23d547, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
  width:100%

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
`