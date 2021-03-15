import React, { useCallback, useState } from 'react';

type InitialPage = 'first' | 'second' | 'third';

export const useScrollPagination = (totalCountPages: number, afterPage?: number, firstPositionPagination?: string) => {
  const [inProjectsPageArea, setInProjectsPageArea] = useState(false);
  const [positionPagination, setPositionPagination] = useState(firstPositionPagination);
  const [initialPage, setInitialPage] = useState<InitialPage>('first');
  const handleScroll = useCallback((e: React.UIEvent<HTMLElement>) => {
    //Checking if the user is in the pagination area
    e.currentTarget.scrollTop >=
      e.currentTarget.scrollHeight -
        (e.currentTarget.scrollHeight / totalCountPages) * (totalCountPages - (afterPage ? afterPage : 0)) &&
    e.currentTarget.scrollTop <
      e.currentTarget.scrollHeight - (e.currentTarget.scrollHeight / totalCountPages) * (totalCountPages - 3)
      ? setInProjectsPageArea(true)
      : setInProjectsPageArea(false);

    //set position planet
    if (
      e.currentTarget.scrollTop <=
      e.currentTarget.scrollHeight -
        (e.currentTarget.scrollHeight / totalCountPages) * (totalCountPages - (afterPage ? afterPage : 0)) +
        500
    ) {
      setInitialPage('first');
    } else if (
      e.currentTarget.scrollTop <=
      e.currentTarget.scrollHeight -
        (e.currentTarget.scrollHeight / totalCountPages) * (totalCountPages - (afterPage ? afterPage : 0) - 1) +
        500
    ) {
      setInitialPage('second');
    } else {
      setInitialPage('third');
    }

    //set position pagination
    e.currentTarget.scrollTop < (3 * e.currentTarget.scrollHeight) / totalCountPages
      ? setPositionPagination(
          `${
            (e.currentTarget.scrollHeight -
              (e.currentTarget.scrollHeight / totalCountPages) * (totalCountPages - (afterPage ? afterPage : 0))) /
            totalCountPages
          }px`
        )
      : setPositionPagination(`${(e.currentTarget.scrollHeight / totalCountPages) * 2 + 100}px`);
  }, []);
  return {
    handleScroll,
    inProjectsPageArea,
    positionPagination,
    initialPage
  };
};
