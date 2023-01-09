import React, { useEffect } from "react";
import * as redux from "react-redux";

import { render } from "../../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import FormLogin from "../../../Authentification/FormsAutentifications/FormLogin";

const reactUseEffect = { useEffect };

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn(),
}));

jest.mock("react-redux", () => ({
  __esModule: true,
  ...jest.requireActual('react-redux')
}));

const useEffectMock = jest.spyOn(reactUseEffect, "useEffect");
useEffectMock.mockReturnValue(jest.fn());

it("FormLogin should match snapshot", () => {
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
  useDispatchSpy.mockReturnValue(jest.fn());
  const { container } = render(<FormLogin error_message={jest.fn()} />);
  expect(container).toMatchSnapshot();
});
