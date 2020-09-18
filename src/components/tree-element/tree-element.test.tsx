import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {TreeElement} from "./tree-element";
import {TreeNode} from "../../types";

const mockStore = configureStore([]);

const mock: TreeNode = {
  name: `acoustic`,
  children: [
    {name: `Kremona`},
    {name: `Epiphone`},
    {name: `Gibson`},
    {name: `Yamaha`},
  ],
};

const mockTree: Array<TreeNode> = [
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

const noop = () => {
  // do nothing
};

it(`Render TreeElement`, () => {
  const store = mockStore({});

  const tree = renderer
      .create(
          <Provider store={store}>
            <TreeElement
              key={mock.name}
              name={mock.name}
              render={() => null}
              tree={mockTree}
              onDeleteButtonClick={noop}
              onNewChildButtonClick={noop}
            />
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
