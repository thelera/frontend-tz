import * as React from "react";
import TreeElement from "../tree-element/tree-element";
import {TreeNode} from "../../types";

interface Props {
  elements: Array<TreeNode>;
}

const ElementList: React.FunctionComponent<Props> = (props: Props) => {
  const {elements} = props;

  return (
    <ul className="element-list">
      {elements.map((element) => {
        const {id, name, children} = element;

        return (
          <TreeElement
            children={children}
            id={id}
            key={name}
            name={name}
          />
        );
      })}
    </ul>
  );
};

export default ElementList;
