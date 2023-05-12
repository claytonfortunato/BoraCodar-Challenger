import { RocketLaunch } from "phosphor-react";
import { GithubLogo } from "phosphor-react";

import * as C from "./styles";

interface CardProps {
  title: string;
  img: string;
  description: string;
  site: string;
  git: string;
}

export const Card = ({ title, img, description, site, git }: CardProps) => {
  return (
    <C.Container>
      <img src={img} alt="" className="bg-img" />
      <C.Wrapper>
        <h3>{title}</h3>
        <p>{description}</p>
      </C.Wrapper>
      <C.BoxWeb>
        <a href={site} target="_blank">
          <RocketLaunch size={22} />
          Deploy
        </a>
        <a href={git} target="_blank">
          <GithubLogo size={22} />
          Github
        </a>
      </C.BoxWeb>
    </C.Container>
  );
};
