import React from 'react';
//views
import { Wrapper, DWrapper, ImgWrapper, Image, TitleWrapper } from './views';

interface Props {
  id: string;
  name: string;
  passengers: string;
  maxAtmospheringSpeed: number;
}

const VehicleInfo: React.FC<Props> = ({ name, maxAtmospheringSpeed, passengers }) => {
  return (
    <>
      <TitleWrapper>{name}</TitleWrapper>
      <Wrapper>
        <ImgWrapper>
          <Image src='/static/images/vehicles.png' />
        </ImgWrapper>
        <DWrapper>
          <p>Max Atmosphering Speed: {maxAtmospheringSpeed}</p>
          <p>Count passengers: {passengers}</p>
        </DWrapper>
      </Wrapper>
    </>
  );
};

export default VehicleInfo;
