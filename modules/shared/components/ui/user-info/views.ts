import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 400px;
  max-height: 35px;
  display: flex;
  position: relative;
  align-items: center;
  font-size: 12px;
  color: rgb(255, 128, 118);
  cursor: pointer;
  transition: opacity 0.2s ease-in-out 0s;
  padding-bottom: 20px;
  margin-top: 60px;
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
export const Text = styled.span`
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 30px;
  margin-left: 10px;
`;
