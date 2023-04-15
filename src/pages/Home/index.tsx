import { Header } from "../../components/Header";
import * as C from "./styles";

export const Home = () => {
  return (
    <C.Container>
      <C.Content>
        <h1>#BoraCodar</h1>
        <p>
          O boracodar é um projeto da Rocketseat, onde se estabelece um desafio
          para a semana, toda semana sai um desafio como projeto na Rocketseat!
          é uma proposta muito bacana, principalmente pra quem está começãndo
          agora e não tem ideias em mente para praticar.
        </p>
      </C.Content>
    </C.Container>
  );
};
