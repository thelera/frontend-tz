import {reducer, ActionCreator, ActionType} from "./reducer.js";

const tree = [
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

it(`Reducer should remove node with given id from tree`, () => {
  expect(reducer({
    tree: [
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
    ],
  }, {
    type: ActionType.DELETE_NODE,
    payload: `4`,
  })).toEqual({
    tree: [
      {
        id: `1`,
        name: `guitars`,
        children: [
          {
            id: `2`,
            name: `acoustic`,
            children: [
              {id: `3`, name: `Kremona`},
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
    ],
  });

  expect(reducer({
    tree: [
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
    ],
  }, {
    type: ActionType.DELETE_NODE,
    payload: `10`,
  })).toEqual({
    tree: [
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
    ],
  });
});

it(`Reducer should add given node to tree`, () => {
  expect(reducer({
    tree: [
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
    ],
  }, {
    type: ActionType.ADD_NODE,
    payload: {
      id: `8`,
      newElement: {
      id: `100`,
      name: `Ultimate`,}
    },
  })).toEqual({
    tree: [
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
                  {
                    id: `100`,
                    name: `Ultimate`,
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
    ],
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator adding node returns correct action`, () => {
    expect(ActionCreator.addNode({
      name: `acoustic`,
      newElement: {
        id: `100`,
        name: `Ultimate`,
      },
    })).toEqual({
      type: ActionType.ADD_NODE,
      payload: {
        name: `acoustic`,
        newElement: {
          id: `100`,
          name: `Ultimate`,
        },
      }
    });
  });

  it(`Action creator deleting node returns correct action`, () => {
    expect(ActionCreator.deleteNode(`500`)).toEqual({
      type: ActionType.DELETE_NODE,
      payload: `500`,
    });
  });
});
