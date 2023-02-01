import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;

  nav {
    display: flex;
    gap: 2rem;
    align-items: center;


    a {
      color: ${props => props.theme["gray-100"]};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${props => props.theme["gray-500"]}
      }

      &.active {
        color: ${props => props.theme["green-500"]};
      }
    }

  }
`;
