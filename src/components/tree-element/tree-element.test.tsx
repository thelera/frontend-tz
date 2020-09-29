import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {TreeElement} from "./tree-element";
import {TreeNode} from "../../types";

const mockStore = configureStore([]);

const mock: TreeNode = {
  id: `0`,
  name: `acoustic`,
  children: [
    {id: `1`, name: `Kremona`},
    {id: `2`, name: `Epiphone`},
    {id: `3`, name: `Gibson`},
    {id: `4`, name: `Yamaha`},
  ],
};

const mockTree: Array<TreeNode> = [
  {
    id: `1`,
    name: `guitars`,
    children: [
      {
        id: `2`,
        name: `acoustic`,
        children: [
          {id: `3`, name: `Kremona`},
          {id: `4`, name: `Epiphone`},
          {id: `5`, name: `Gibson`},
          {id: `6`, name: `Yamaha`},
        ],
      },
      {
        id: `7`,
        name: `electric`,
        children: [
          {
            id: `8`,
            name: `Fender`,
            children: [
              {
                id: `9`,
                name: `Telecaster`,
              },
              {
                id: `10`,
                name: `Stratocaster`,
              },
              {
                id: `11`,
                name: `Jaguar`,
              },
            ],
          },
          {
            id: `12`,
            name: `Gibson`,
            children: [
              {
                id: `13`,
                name: `Les Paul`,
              },
              {
                id: `14`,
                name: `SG`,
              },
              {
                id: `15`,
                name: `ES-335`,
              },
              {
                id: `16`,
                name: `ES-339`,
              },
            ],
          },
        ],
      },
      {id: `17`, name: `acoustic bass`},
      {id: `18`, name: `electric bass`},
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
              children={mock.children}
              id={mock.id}
              key={mock.name}
              name={mock.name}
              tree={mockTree}
              onDeleteButtonClick={noop}
              onNewChildButtonClick={noop}
            />
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
