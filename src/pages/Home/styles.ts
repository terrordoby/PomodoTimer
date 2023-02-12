import styled from "styled-components";

export const Container = styled.div`

  max-width: 65rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  font-size: 1.8rem;
  padding: 1rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

`;

export const ContainerHeader = styled.div`

  display: flex;
  gap: 1rem;
  width: 100%;

  span {
    margin: 0 8px;
    color: ${props => props.theme["gray-500"]};
  }

  small {
    color: ${props => props.theme["gray-500"]};
    margin: 0 8px;
  }
`;

export const baseInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${props => props.theme["gray-500"]};
  color: ${props => props.theme["gray-100"]};
  font-weight: bold;
  font-size: 1.3rem;
  padding: 0 0.5rem;

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme["green-500"]};
  }
`;

export const TaskInput = styled(baseInput)`
  flex: 1;
`;

export const MinutesAmountInput = styled(baseInput)`
  width: 4rem;
`;

export const ContainerBody = styled.main`
  display: flex;
  gap: 2rem;
  max-width: 100%;

  span {
    display: flex;
    padding: 0 2rem;
    align-items: center;
    justify-content: center;
    font-size: 16rem;
    background-color: ${props => props.theme["gray-700"]};
    text-align: center;
    border-radius: 8px;
  }

  div {
    font-size: 16rem;
  }

`;

export const ContainerFooter = styled.footer`
  width: 100%;

  button {
    width: 100%;
    background-color: ${props => props.theme["green-500"]};
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: ${props => props.theme["gray-100"]};
    font-size: 1.6rem;
    font-weight: bold;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &:not(:disabled):hover {
      background-color: ${props => props.theme["green-300"]};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;

    }
  }

   .interrupt {
    width: 100%;
    background-color: ${props => props.theme["red-500"]};
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: ${props => props.theme["gray-100"]};
    font-size: 1.6rem;
    font-weight: bold;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &:not(:disabled):hover {
      background-color: ${props => props.theme["red-700"]};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;

    }
}
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${props => props.theme["green-500"]};
  width: 6rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
`;
