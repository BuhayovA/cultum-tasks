import * as React from 'react';
// utils
import * as U from '@md-utils';
// libs
import { NetworkStatus, useQuery } from '@apollo/client';
// queries
import { GET_STARSHIPS_QUERY } from '@md-queries/starships';
// types
import { GetStarshipsResponse, GetStarshipsVariables, Starships } from '@md-queries/starships/types';
import { ClientError } from '@md-utils/errors/custom';


interface Context {
  starships: Starships;
  error?: ClientError;
  isLoading: boolean;
  endCursor: string | undefined;
  refetch: (variables?: GetStarshipsVariables) => Promise<ClientError | Starships>;
  hasNextPage: boolean;
  networkStatus: boolean;
  fetchMore: (variables?: GetStarshipsVariables) => void
}

const StarshipsAPIContext = React.createContext<Context>({
    starships: [],
    isLoading: false,
    hasNextPage: false,
    error: undefined,
    endCursor: undefined,
    refetch: () => Promise.resolve([] as Starships),
    networkStatus: false,
    fetchMore: () => {}
  }
);

const StarshipsAPIContextProvider: React.FC = ({ children }) => {
  const { data, loading, refetch, error, fetchMore, networkStatus } = useQuery<GetStarshipsResponse, GetStarshipsVariables>(
    GET_STARSHIPS_QUERY,
    {
      variables: { first: 3, after: undefined},
      notifyOnNetworkStatusChange: true,
    }
  );

  const fetchMoreStarships = async (variables?: GetStarshipsVariables) => {
    try {
      await fetchMore({
        variables,
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          fetchMoreResult.allStarships.starships = [
            ...prev.allStarships.starships,
            ...fetchMoreResult.allStarships.starships
          ];
          return fetchMoreResult;
        }
      })

    }catch (error){
      return U.errors.parseAndCreateClientError(error);
    }
  }

  const refetchStarships = async (variables?: GetStarshipsVariables) => {
    try {
      const result = await refetch(variables);

      return result.data ? result.data.allStarships.starships : [];
    } catch (error) {
      return U.errors.parseAndCreateClientError(error);
    }
  };

  const value = {
    starships: data ? data.allStarships.starships : [],
    hasNextPage: data ? data.allStarships.pageInfo.hasNextPage : false,
    endCursor: data ? data.allStarships.pageInfo.endCursor : '',
    error: error ? U.errors.parseAndCreateClientError(error) : undefined,
    networkStatus: networkStatus === NetworkStatus.fetchMore,
    isLoading: loading,
    refetch: refetchStarships,
    fetchMore: fetchMoreStarships,
  };

  return <StarshipsAPIContext.Provider value={value}>{children}</StarshipsAPIContext.Provider>;
};

export { StarshipsAPIContextProvider, StarshipsAPIContext };
