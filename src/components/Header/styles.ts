import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.gray};

  display: flex;
  align-items: center;
  justify-content: space-around;

  box-shadow: 6px 2px 4px 0px rgba(0, 0, 0, 0.68);
`;

export const Logo = styled.div`
  h1 {
    font-size: 40px;
    font-weight: normal;
    font-family: "Rubik Dirt", cursive;
  }
`;

export const ContentPage = styled.div`
  display: flex;
  gap: 30px;

  a {
    font-size: 24px;
    transition: all 200ms linear;
    &:hover,
    &:focus-within {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const Box = styled.div`
  transition: all ease-in 0.2s;
  a {
    font-size: 16px;

    color: ${(props) => props.theme.pink};
  }

  &:hover {
    scale: 1.1;
  }
`;
