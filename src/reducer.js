import {addChildNodeToTree, removeNodeFromTree} from "./utils.js";
import tree from "./mocks/tree.js";

const initialState = {
  tree,
};

const ActionType = {
  ADD_NODE: `ADD_NODE`,
  DELETE_NODE: `DELETE_NODE`,
};

const ActionCreator = {
  addNode: (element) => ({
    type: ActionType.ADD_NODE,
    payload: element,
  }),
  deleteNode: (name) => ({
    type: ActionType.DELETE_NODE,
    payload: name,
  }),
};

const Selector = {
  getTree: (state) => state.tree,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_NODE:
      return Object.assign({}, state, {
        tree: addChildNodeToTree(state.tree, action.payload.id, {id: action.payload.newElement.id, name: action.payload.newElement.name}),
      });

    case ActionType.DELETE_NODE:
      return Object.assign({}, state, {
        tree: removeNodeFromTree(state.tree, action.payload),
      });

    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Selector};
