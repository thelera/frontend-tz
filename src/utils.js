const addElementToArrayByKeyName = (array, name, newElement) => {
  array.forEach((it) => {
    if (it.name === name) {
      if (!it.children) {
        it.children = [];
      }
      it.children.push(newElement);
      return;
    }
    if (it.children) {
      addElementToArrayByKeyName(it.children, name, newElement);
    }
  });
};

const addChildNodeToTree = (tree, node, newNode) => {
  let clonedTree = deepClone(tree);

  addElementToArrayByKeyName(clonedTree, node, newNode);

  return clonedTree;
};

const deepClone = (items) => items.map((item) => Array.isArray(item) ? deepClone(item) : item);

const findElementInArrayByName = (array, name) => {
  const findByName = (acc, element) => {
    if (acc) {
      return acc;
    } else {
      if (element.name === name) {
        return element;
      }
      if (element.children) {
        return element.children.reduce(findByName, acc);
      }
    }

    return acc;
  };
  return array.reduce(findByName, null);
};

const getPath = (array, name) => {
  let element = findElementInArrayByName(array, name);
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

const removeElementFromArrayByKeyName = (array, name) => {
  array.forEach((it, index, arr) => {
    if (it.name === name) {
      arr.splice(index, 1);
      return;
    }
    if (it.children) {
      removeElementFromArrayByKeyName(it.children, name);
    }
  });
};

const removeNodeFromTree = (tree, nodeName) => {
  let clonedTree = deepClone(tree);

  removeElementFromArrayByKeyName(clonedTree, nodeName);

  return clonedTree;
};

export {addChildNodeToTree, findElementInArrayByName, getPath, removeNodeFromTree};
