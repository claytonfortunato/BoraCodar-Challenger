import { Link } from "react-router-dom";

import * as C from "./styles";

export const Header = () => {
  return (
    <C.Container>
      <C.Logo>
        <h1>#BoraCodar</h1>
      </C.Logo>
      <C.ContentPage>
        <Link to="/">Home</Link>

        <Link to="/challenges">Challenges</Link>
      </C.ContentPage>
      <C.Box>
        <a href="#">Participe também! 🚀</a>
      </C.Box>
    </C.Container>
  );
};
