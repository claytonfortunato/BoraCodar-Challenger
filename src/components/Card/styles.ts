import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.4rem;
  background: ${(props) => props.theme.gray300};
  border-radius: 10px;
  transition: all ease-in 0.4s;

  &:hover {
    scale: 1.1;
  }

  .bg-img {
    width: 400px;
    height: 190px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  h3 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1.7rem;
    line-height: 130%;
  }
`;

export const BoxWeb = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  margin: 1rem;

  a {
    display: flex;

    gap: 1rem;
    background: ${(props) => props.theme.black02};
    padding: 0.4rem 2rem;
    border-radius: 6px;
    transition: all ease-in 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.gray600};
      color: ${(props) => props.theme.black};
    }

    img {
      width: 2.4rem;
    }
  }
`;
