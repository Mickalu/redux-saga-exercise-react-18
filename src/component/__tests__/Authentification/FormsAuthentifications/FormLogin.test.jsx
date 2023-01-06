import React from "react";
import * as redux from "react-redux";

import { render } from "../../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";
import FormLogin from "../../../Authentification/FormsAutentifications/FormLogin";

// const mockDispatch = jest.fn();
// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
//   useDispatch: () => mockDispatch
// }));

jest.mock("react-redux", () => ({
  __esModule: true,
  ...jest.requireActual('react-redux')
}));

it("FormLogin should match snapshot", () => {
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
  useDispatchSpy.mockReturnValue(jest.fn());
  const { container } = render(<FormLogin error_message={jest.fn()} />);
  expect(container).toMatchSnapshot();
});
