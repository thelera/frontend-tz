import {reducer, ActionCreator, ActionType} from "./reducer.js";

const tree = [
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

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    tree,
  });
});

it(`Reducer should remove node with given name from tree`, () => {
  expect(reducer({
    tree: [
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
    ],
  }, {
    type: ActionType.DELETE_NODE,
    payload: `acoustic`,
  })).toEqual({
    tree: [
      {
        name: `guitars`,
        children: [
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
    ],
  });

  expect(reducer({
    tree: [
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
    ],
  }, {
    type: ActionType.DELETE_NODE,
    payload: `Yamaha`,
  })).toEqual({
    tree: [
      {
        name: `guitars`,
        children: [
          {
            name: `acoustic`,
            children: [
              {name: `Kremona`},
              {name: `Epiphone`},
              {name: `Gibson`},
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
    ],
  });
});

it(`Reducer should add given node to tree`, () => {
  expect(reducer({
    tree: [
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
    ],
  }, {
    type: ActionType.ADD_NODE,
    payload: {
      name: `acoustic`,
      newElementName: `Ultimate`,
    },
  })).toEqual({
    tree: [
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
              {name: `Ultimate`},
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
    ],
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator adding node returns correct action`, () => {
    expect(ActionCreator.addNode({
      name: `acoustic`,
      newElementName: `Ultimate`,
    })).toEqual({
      type: ActionType.ADD_NODE,
      payload: {
        name: `acoustic`,
        newElementName: `Ultimate`,
      }
    });
  });

  it(`Action creator deleting node returns correct action`, () => {
    expect(ActionCreator.deleteNode(`bass guitar`)).toEqual({
      type: ActionType.DELETE_NODE,
      payload: `bass guitar`,
    });
  });
});
