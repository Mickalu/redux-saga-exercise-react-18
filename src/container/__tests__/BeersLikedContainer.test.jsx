import React from "react";

import { render, queryBytestId } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { store } from "../../store";
import { addBeers } from "../../slice/beersSlice";
import { initListBeers } from "../../utils/__testsTools__/initValues";
import BeersLikedContainer from "../BeersLikedContainer";

it("Should not have beer title at the beginning", () => {
  render(<BeersLikedContainer />);

  expect(queryBytestId("beer-title")).not.toBeInTheDocument();
});

it("Should add beer title when beer is added", () => {
  store.dispatch(addBeers(initListBeers.data));
  store.dispatch({ type: "ADD_BEER_LIKED_BEERS" });

  render(<BeersLikedContainer />);

  expect(queryBytestId("beer-title")).toBeInTheDocument();
});
