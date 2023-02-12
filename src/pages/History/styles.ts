import styled from "styled-components";

export const Container = styled.main`

flex: 1;
padding: 3.5rem;
display: flex;
flex-direction: column;

`;

export const HistoryList = styled.div`

flex: 1;
overflow: auto;
margin-top: 2rem;

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 60rem;
}

  thead {
    font-weight: bold;
  }

  th {
    background-color: ${props => props.theme["gray-600"]};
    padding: 1.6rem;
    text-align: left;
    color: ${props => props.theme["gray-100"]};
    font-size: 1.4rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 2rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 2rem;
    }
  }

  td {
    background-color: ${props => props.theme["gray-700"]};
    border-top: 4px solid ${props => props.theme["gray-800"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;
    font-size: 1.4rem;
    line-height: 1.6;

    &:first-child {
      padding-left: 1.5rem;
      width: 50%;
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }


`;

const STATUS_COLOR =  {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500"
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    height: 8px;
    width: 8px;
    background-color: ${props => props.theme[STATUS_COLOR[props.statusColor]]};
    border-radius: 50%;
  }
`;
