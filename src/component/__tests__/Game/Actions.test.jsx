import React from "react";

import Actions from "../../Game/Actions";
import { render, getByTestId } from "../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";

const reactRedux = { useDispatch };

it("Should have a button like", () => {
  render(<Actions />);

  expect(getByTestId("like-button")).toBeInTheDocument();
});

it("Should have a dislike button", () => {
  render(<Actions />);

  expect(getByTestId("dislike-button")).toBeInTheDocument();
});

it("Should match with snapShot", () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  useDispatchMock.mockReturnValue(jest.fn());

  const wrapper = render(<Actions />);

  expect(wrapper).toMatchSnapshot();
});
