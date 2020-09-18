import * as React from "react";
import * as renderer from "react-test-renderer";
import {App} from "./app";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {TreeNode} from "../../types";

const mockStore = configureStore([]);

const mock: Array<TreeNode> = [
  {
    name: `guitars`,
    children: [
      {
        name: `acoustic`,
        children: [
          {name: `Kremona`},
          {name: `Epiphone`},
          {name: `Gibson`},
          {name: `Yamaha`},
        ],
      },
      {
        name: `electric`,
        children: [
          {
            name: `Fender`,
            children: [
              {
                name: `Telecaster`,
              },
              {
                name: `Stratocaster`,
              },
              {
                name: `Jaguar`,
              },
            ],
          },
          {
            name: `Gibson`,
            children: [
              {
                name: `Les Paul`,
              },
              {
                name: `SG`,
              },
              {
                name: `ES-335`,
              },
              {
                name: `ES-339`,
              },
            ],
          },
        ],
      },
      {name: `acoustic bass`},
      {name: `electric bass`},
    ],
  },
];

it(`Render App`, () => {
  const store = mockStore({
  });

  const tree = renderer
      .create(
          <Provider store={store}>
            <App
              tree={mock}
            />
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});