import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.gray};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  h1 {
    font-size: 30px;
    font-weight: normal;
    font-family: "Rubik Dirt", cursive;
  }
`;

export const ContentPage = styled.div``;

export const Box = styled.div``;
