import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import ElementList from "./element-list";
import {Provider} from "react-redux";
import {TreeNode} from "../../types";

const mockStore = configureStore([]);

const mock: Array<TreeNode> = [
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

it(`Render ElementList`, () => {
  const store = mockStore({});

  const tree = renderer
      .create(
          <Provider store={store}>
            <ElementList
              elements={mock}
            />
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
