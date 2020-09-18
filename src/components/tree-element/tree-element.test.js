import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {TreeElement} from "./tree-element.jsx";
import renderer from "react-test-renderer";
import React from "react";

const mockStore = configureStore([]);

const mock = {
  name: `acoustic`,
  children: [
    {name: `Kremona`},
    {name: `Epiphone`},
    {name: `Gibson`},
    {name: `Yamaha`},
  ],
};

it(`Render TreeElement`, () => {
  const store = mockStore({});

  const tree = renderer
      .create(
          <Provider store={store}>
            <TreeElement
              key={mock.name}
              name={mock.name}
              render={() => {}}
            />
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
