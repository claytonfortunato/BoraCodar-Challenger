import * as C from "./styles";

export const Header = () => {
  return (
    <C.Container>
      <C.Logo>
        <h1>#BoraCodar</h1>
      </C.Logo>
      <C.ContentPage>
        <h1>Home</h1>

        <h1>Challenges</h1>
      </C.ContentPage>
      <C.Box>
        <a href="#">Participe também! 🚀</a>
      </C.Box>
    </C.Container>
  );
};
