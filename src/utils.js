const addElementToArrayById = (array, id, newElement) => {
  array.forEach((it) => {
    if (it.id === id) {
      if (!it.children) {
        it.children = [];
      }
      it.children.push(newElement);
      return;
    }
    if (it.children) {
      addElementToArrayById(it.children, id, newElement);
    }
  });
};

const addChildNodeToTree = (tree, id, newNode) => {
  let clonedTree = deepClone(tree);

  addElementToArrayById(clonedTree, id, newNode);

  return clonedTree;
};

const getRandomId = () => {
  return String(Date.now() + Math.random());
};

const addIdToArray = (array) => {
  let clonedArray = deepClone(array);

  clonedArray.forEach((it) => {
    it.id = getRandomId();
    if (it.children) {
      addIdToArray(it.children);
    }
  });

  return clonedArray;
};

const deepClone = (items) => items.map((item) => Array.isArray(item) ? deepClone(item) : item);

const findElementInArrayById = (array, id) => {
  const findById = (acc, element) => {
    if (acc) {
      return acc;
    } else {
      if (element.id === id) {
        return element;
      }
      if (element.children) {
        return element.children.reduce(findById, acc);
      }
    }

    return acc;
  };
  return array.reduce(findById, null);
};

const getPath = (array, id) => {
  let element = findElementInArrayById(array, id);
  let parents = [];

  const findParents = (acc, el) => {
    if (el.children && el.children.some((child) => child === element)) {
      parents.push(el.name);
      element = el;

      return array.reduce(findParents, null);
    }
    if (el.children) {
      return el.children.reduce(findParents, acc);
    }
    return acc;
  };

  array.reduce(findParents, null);
  return parents.reverse();
};

const removeElementFromArrayById = (array, id) => {
  array.forEach((it, index, arr) => {
    if (it.id === id) {
      arr.splice(index, 1);
      return;
    }
    if (it.children) {
      removeElementFromArrayById(it.children, id);
    }
  });
};

const removeNodeFromTree = (tree, nodeId) => {
  let clonedTree = deepClone(tree);

  removeElementFromArrayById(clonedTree, nodeId);

  return clonedTree;
};

export {addChildNodeToTree, addIdToArray, getPath, getRandomId, removeNodeFromTree};
