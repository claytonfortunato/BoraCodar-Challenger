import { useState } from "react";

import { ChallengesList } from "../../data/challenges";
import { CardChallenges } from "../../@types/type";

import * as C from "./styles";
import { Card } from "../../components/Card";

export const Challenges = () => {
  const [cards, setCards] = useState<CardChallenges[]>(ChallengesList);

  return (
    <C.Container>
      <C.Wrapper>
        {cards.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            img={item.image}
            description={item.description}
            site={item.site}
            git={item.github}
          />
        ))}
      </C.Wrapper>
    </C.Container>
  );
};
