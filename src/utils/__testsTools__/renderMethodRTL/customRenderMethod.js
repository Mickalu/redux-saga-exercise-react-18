import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../store";

const getByTextCustom = (text) => (
  screen.getByText(text)
);

const queryAllByRoleCustom = (role, options) => (
  screen.queryAllByRole(role, options)
);

const queryByTestIdCustom = (testId) => (
  screen.queryByTestId(testId)
);

const getByTestIdCustom = (testId) => (
  screen.getByTestId(testId)
);

const getByDisplayValueCustom = (displayValue) => (
  screen.getByDisplayValue(displayValue)
);

const renderWithProviders = ({ children }) => (
  <Provider store={store}>
    { children }
  </Provider>
);

export const renderCustom = (ui, options = {}) => render(ui, { wrapper: renderWithProviders, ...options });

// re-export everything
export * from '@testing-library/react';

export { renderCustom as render };
export { getByTextCustom as getByText };
export { queryAllByRoleCustom as queryAllByRole };
export { queryByTestIdCustom as queryBytestId };
export { getByTestIdCustom as getByTestId };
export { getByDisplayValueCustom as getByDisplayValue };
