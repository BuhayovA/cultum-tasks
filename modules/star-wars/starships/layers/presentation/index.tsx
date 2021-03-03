import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Card } from '@md-sw-starships/compoonents/card';
// context
import { StarshipsAPIContext } from '@md-sw-starships/layers/api/starships';
import { StarshipsBLContext } from '@md-sw-starships/layers/business';
// views
import { ContentWrapper, Wrapper } from '@md-shared/views/common';

const StarshipsPresentation = () => {
  // add api logic here
  const { isLoading, error, networkStatus } = React.useContext(StarshipsAPIContext);
  // add business logic here
  const { starshipsList, handleScroll } = React.useContext(StarshipsBLContext);

  return (
      <ContentLoader isLoading={isLoading !== networkStatus} error={error}>
        <ContentWrapper onScroll={(e: any) => handleScroll(e)}>
            <Wrapper>
                {starshipsList.map((starship) => (
                  <Card {...starship} key={starship.id} />
                ))}
              <ContentLoader position={'relative'} isLoading={networkStatus} error={error}/>
            </Wrapper>
        </ContentWrapper>
      </ContentLoader>
  );
};

export { StarshipsPresentation };
