import {connect} from "react-redux";
import ElementList from "../element-list/element-list.jsx";
import React from "react";

const App = (props) => {
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
