import * as React from 'react';
// components
import Link from 'next/link';

interface Props {
  pId: string;
}

const VehicleLink: React.FC<Props> = ({ pId, children }) => (
  <Link href='/vehicles/[id]' as={`/vehicles/${pId}`}>
    <a>{children}</a>
  </Link>
);

export { VehicleLink };
