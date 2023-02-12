import styled from "styled-components";

export const Container = styled.div`
  max-width: 111rem;
  margin: 5rem auto;
  height: calc(100vh - 10rem);

  background-color: ${props => props.theme["gray-800"]};
  border-radius: 8px;
`;
