import styled from "styled-components";

export const Container = styled.div`
  max-width: 405px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.6rem;

  background: ${(props) => props.theme.gray300};
  border-radius: 10px;

  img {
    width: 400px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

export const Wrapper = styled.div``;

export const BoxWeb = styled.div``;
