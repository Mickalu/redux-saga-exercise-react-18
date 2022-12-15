import React from "react";

import BeerContainer from "../BeerContainer";
import { render, queryBytestId, getByText } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { initListBeers  } from "../../utils/__testsTools__/initValues";
import { store } from "../../store";
import { addBeers } from "../../slice/beersSlice";

it("Should not display Beer.jsx if no state.beers", () => {
  render(<BeerContainer />);

  expect(queryBytestId("beer-container")).not.toBeInTheDocument();
});

// it("Should display the first beer at the beginning", () => {
//   const infoFirstBeer = initListBeers.data[0];
//   // store.dispatch(addBeers(initListBeers.data));

//   const component = <BeerContainer.WrappedComponent
//     beers={initListBeers.data}
//     currentIndex={ {currentIndex: 0}}
//   />;

//    expect(component).toHaveTextContent(infoFirstBeer.title);

//   // expect(getByText(infoFirstBeer.title));
// });

it("Should change beer informations after click on like button", () => {
  const infoSecondBeer = initListBeers.data[1];

  store.dispatch(addBeers(initListBeers.data));
  store.dispatch({ type: "ADD_BEER_LIKED_BEERS" });

  render(<BeerContainer />);

  expect(getByText(infoSecondBeer.title));
});
