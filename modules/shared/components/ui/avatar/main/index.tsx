import * as React from 'react';
//views
import { Image } from './views';

interface Props {
  avatarImg: string;
  onClick?: () => void;
  active?: boolean;
}

const Avatar: React.FC<Props> = ({ avatarImg, onClick, active }) => (
  <Image active={active} onClick={onClick} src={avatarImg} />
);

export { Avatar };
