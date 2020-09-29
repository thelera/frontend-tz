import {addIdToArray} from "../utils";

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

export default addIdToArray(tree);
