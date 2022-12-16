import React from "react";
import { useSelector, useDispatch } from "react-redux";

import BeerContainer from "../BeerContainer";
import { render, queryBytestId, getByText } from "../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import { initListBeers  } from "../../utils/__testsTools__/initValues";
import { store } from "../../store";
import { addBeers } from "../../slice/beersSlice";

const reactRedux = { useSelector, useDispatch };

it("Should not display Beer.jsx if no state.beers", () => {
  render(<BeerContainer />);

  expect(queryBytestId("beer-container")).not.toBeInTheDocument();
});

it("Should change beer informations after click on like button", () => {
  const infoSecondBeer = initListBeers.data[1];

  store.dispatch(addBeers(initListBeers.data));
  store.dispatch({ type: "ADD_BEER_LIKED_BEERS" });

  render(<BeerContainer />);

  expect(getByText(infoSecondBeer.title));
});

it("Should match with the snapshot", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  useSelectorMock.mockReturnValue({
    beers: initListBeers.data ,
    currentIndex: 0,
  });

  useDispatchMock.mockReturnValue(jest.fn());

  const wrapper = render(<BeerContainer />);

  expect(wrapper).toMatchSnapshot();
});
