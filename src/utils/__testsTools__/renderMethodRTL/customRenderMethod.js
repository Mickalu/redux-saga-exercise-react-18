import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "../../../store";

const renderWithProviders = ({ children }) => (
  <Provider store={store}>
    { children }
  </Provider>
);

export const renderCustom = (ui, options = {}) => render(ui, { wrapper: renderWithProviders, ...options });

// re-export everything
export * from '@testing-library/react';

export { renderCustom as render };
