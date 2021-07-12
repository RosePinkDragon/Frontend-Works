import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import AdminUIClass from "components/Tasks/AdminUIClass";
import { logIn } from "components/Tasks/AdminUIClass/redux/actions/loginActions";

const mockStore = configureStore([thunk]);

describe("My Renders the expected page", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      loginReducers: {
        logged: false,
      },
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <AdminUIClass />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should render AdminUI", () => {
    store = mockStore({
      loginReducers: {
        logged: true,
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <AdminUIClass />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should dispatch an action on button click", () => {
    renderer.act(() => {
      component.root
        .findByType("form")
        .props.onSubmit({ preventDefault: jest.fn() });
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(logIn());
  });
});
