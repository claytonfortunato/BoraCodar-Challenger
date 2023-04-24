import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  height: 80.2vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  background: ${(props) => props.theme.black};
  border-radius: 12px;

  overflow: auto;

  position: relative;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.gray};
      border-radius: 999px;
    }
  }

  @media (min-width: 1310px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
