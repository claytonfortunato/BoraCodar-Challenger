import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  color: ${(props) => props.theme.gray};

  display: flex;
  flex-direction: column;

  gap: 20px;

  max-width: 1280px;
  width: 100%;
  height: 82.5vh;

  padding: 5rem 5rem;

  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 1.8rem;
  }
`;
