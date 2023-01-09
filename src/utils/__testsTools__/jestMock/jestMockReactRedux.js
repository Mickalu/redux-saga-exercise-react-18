export const mockDispatchAndSelector = () => (
    jest.mock("react-redux", () => ({
      ...jest.requireActual("react-redux"),
      useDispatch: jest.fn(),
      useSelector: jest.fn(),
    }))
);
