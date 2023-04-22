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
      <img src={img} alt="" />
      <C.Wrapper>
        <h3>{title}</h3>
        <p>{description}</p>
      </C.Wrapper>
      <C.BoxWeb>
        <a href={site} target="_blank">
          Deploy
        </a>
        <a href={git} target="_blank">
          Github
        </a>
      </C.BoxWeb>
    </C.Container>
  );
};
