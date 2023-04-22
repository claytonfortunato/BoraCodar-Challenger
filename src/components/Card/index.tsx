import * as C from "./styles";

interface CardProps {
  title: string;
  img: string;
  description: string;
}

export const Card = ({ title, img, description }: CardProps) => {
  return (
    <C.Container>
      <img src={img} alt="" />
      <C.Wrapper>
        <h3>{title}</h3>
        {description}
      </C.Wrapper>
      <C.BoxWeb></C.BoxWeb>
    </C.Container>
  );
};
