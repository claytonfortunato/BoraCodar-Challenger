import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  margin-top: 4rem;
  background-color: ${(props) => props.theme.black};
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.gray};

  box-shadow: 2px 4px 2px 6px rgba(0, 0, 0, 0.68);

  a {
    color: ${(props) => props.theme.pink};

    &:hover {
      text-decoration: underline;
    }
  }
`;
