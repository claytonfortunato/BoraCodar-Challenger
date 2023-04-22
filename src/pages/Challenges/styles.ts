import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: ${(props) => props.theme.black};
  border-radius: 12px;
`;
