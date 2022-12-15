import React from "react";
import { useDispatch, useSelector } from 'react-redux';
const reactRedux = { useDispatch, useSelector };

import { render, queryBytestId, getByDisplayValue } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
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

// it("Should remove beer title when beer is dislike", () => {
//   const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
//   const useDispachMock = jest.spyOn(reactRedux, 'useDispatch');

//   useSelectorMock.mockReturnValue({
//     beersLiked: [initListBeers.data[0].id],
//     beersState: initListBeers
//   });

//   useDispachMock.mockReturnValue({

//   });

//   store.dispatch({ type: "ADD_BEER_LIKED_BEERS" });

//   render(<BeersLikedContainer />);
//   expect(getByDisplayValue(initListBeers.data[0].title)).not.toBeInTheDocument();
// });

