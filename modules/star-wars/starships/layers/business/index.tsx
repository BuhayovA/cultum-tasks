import * as React from 'react';
// context
import { StarshipsAPIContext } from '@md-sw-starships/layers/api/starships';
// types
import { Starship } from '@md-shared/types/starship';

type ListItem = Pick<Starship, 'id' | 'name'>;

interface Context {
  starshipsList: ListItem[];
  handleScroll: (e: React.SyntheticEvent<EventTarget>) => void;
}

const StarshipsBLContext = React.createContext<Context>({
  starshipsList: [],
  handleScroll: () => {}
});

const StarshipsBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { starships, fetchMore, endCursor, hasNextPage, isLoading, } = React.useContext(StarshipsAPIContext);

  // when user scroll container
  const handleScroll = (e: React.SyntheticEvent<EventTarget>) => {
    // @ts-ignore
    if (e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100 && hasNextPage && !isLoading) {
      fetchMore({
        first: 3,
        after: endCursor,
        })
    }
  };

  const starshipsList = React.useMemo<ListItem[]>(
    () =>
      starships.map(({ id, name }) => ({
        name,
        id
      })),
    [starships.length]
  );

  return (
    <StarshipsBLContext.Provider
      value={{
        starshipsList,
        handleScroll
      }}
    >
      {children}
    </StarshipsBLContext.Provider>
  );
};

export { StarshipsBLContextProvider, StarshipsBLContext };
