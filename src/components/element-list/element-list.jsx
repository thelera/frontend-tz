import React from "react";
import TreeElement from "../tree-element/tree-element.jsx";

const ElementList = (props) => {
  const {elements} = props;

  return (
    <ul className="element-list">
      {elements.map((element) => {
        const {name, children} = element;

        return (
          <TreeElement
            key={name}
            name={name}
            render={(isChildrenShown) => {
              if (isChildrenShown && children && children.length > 0) {
                return <ElementList elements={children}/>;
              } else {
                return null;
              }
            }}
          />
        );
      })}
    </ul>
  );
};

export default ElementList;
