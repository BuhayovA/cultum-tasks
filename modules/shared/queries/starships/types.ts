import { Starship } from '@md-shared/types/starship';

export type Starships = Pick<Starship, 'id' | 'name'>[];

export interface GetStarshipsResponse {
  allStarships: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
    totalCount: number;
    starships: Starships;
  };
}

export interface GetStarshipsVariables {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}
