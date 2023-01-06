export const INIT_BEERS_LIKED_STATE_VALUE = {
  data: [],
};

export const STATE_BEERS_LIKED_WITH_BEERS = {
  data: [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
  ],
}

export const beersLikedStateWithIds = (listIds) => ({data: listIds});
