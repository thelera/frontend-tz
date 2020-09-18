import * as React from "react";
import {connect} from "react-redux";
import ElementList from "../element-list/element-list";
import {TreeNode} from "../../types";

interface Props {
  tree: Array<TreeNode>;
}

const App: React.FunctionComponent<Props> = (props: Props) => {
  const {tree} = props;

  return (
    <div className="inner">
      <ElementList
        elements={tree}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tree: state.tree,
});

export {App};
export default connect(mapStateToProps)(App);
