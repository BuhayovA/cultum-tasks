import * as React from 'react';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle, ViewButton } from './views';
// view components
import { VehicleLink } from '../vehicle-link';

interface Props {
  id: string;
  name: string;
}

const Card: React.FC<Props> = ({ id, name }) => (
  <CardWrapper key={id}>
    <CardImgWrapper>
      <CardImg src={'/static/images/vehicles.png'} alt={`${name}-${id}`} />
    </CardImgWrapper>
    <CardFooter>
      <VehicleLink pId={id}>
        <CardFooterTitle>{name}</CardFooterTitle>
      </VehicleLink>
      <VehicleLink pId={id}>
        <ViewButton>Details</ViewButton>
      </VehicleLink>
    </CardFooter>
  </CardWrapper>
);

export { Card };
