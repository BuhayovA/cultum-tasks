import React from 'react';
import LandingHeader from '@md-ui/headers/landing-header';

const Header: React.FC = ({ children }) => {
  return (
    <div>
      <LandingHeader />
      {children}
    </div>
  );
};

export { Header };
