import { Wrapper, ItemWrapper, ImageWrapper, Title } from './views';
import React from 'react';
import Description from '@md-ui/description';

interface Props {
  image: string;
  description: string;
  title: string;
}
/*TODO change name*/
const SkillItem: React.FC<Props> = ({ image, description, title }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={image} alt={image} />
      </ImageWrapper>
      <ItemWrapper>
        <Title>{title}</Title>
        <Description fontSize='1.2em' color='black'>
          {description}
        </Description>
      </ItemWrapper>
    </Wrapper>
  );
};

export default SkillItem;
