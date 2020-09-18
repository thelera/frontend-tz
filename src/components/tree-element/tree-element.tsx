import * as React from "react";
import {ActionCreator, Selector} from "../../reducer";
import {connect} from "react-redux";
import {findElementInArrayByName, getPath} from "../../utils";
import {TreeNode} from "../../types";

interface Props {
  name: string;
  tree: Array<TreeNode>;
  onDeleteButtonClick: (string) => void;
  onNewChildButtonClick: (names: {
    name: string;
    newElementName: string;
  }) => void;
  render: (boolean) => React.ReactNode;
}

interface State {
  isChildrenShown: boolean;
}

class TreeElement extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isChildrenShown: false,
    };

    this._handleNameClick = this._handleNameClick.bind(this);
    this._handleShowPathClick = this._handleShowPathClick.bind(this);

  }

  _handleNameClick() {
    this.setState((state) => ({
      isChildrenShown: !state.isChildrenShown,
    }));
  }

  _handleShowPathClick(tree, name) {
    const path = getPath(tree, name);

    console.log(path.join(` > `));
  }

  render() {
    const {name, tree, onDeleteButtonClick, onNewChildButtonClick} = this.props;
    const newElemenetRef: React.RefObject<HTMLInputElement> = React.createRef();

    return (
      <li className="element-list__item">
        <div className="element-list__inner">
          <h2
            className="element-list__title"
            onClick={this._handleNameClick}>
            {name}</h2>

          <button
            className="element-list__button element-list__button--show"
            onClick={() => {
              this._handleShowPathClick(tree, name);
            }}>
            Show path</button>

          <button
            className="element-list__button element-list__button--minus"
            onClick={() => {
              onDeleteButtonClick(name);
            }}>
            Delete</button>

          <form
            className="element-list__form"
            onSubmit={(evt) => {
              evt.preventDefault();
              const newChild = newElemenetRef.current.value;
              if (newChild) {
                if (findElementInArrayByName(tree, newChild)) {
                  console.log(`Choose another name`);
                } else {
                  onNewChildButtonClick({name, newElementName: newChild});
                }
              }
            }}>
            <input type="text" className="element-list__input" ref={newElemenetRef} placeholder="Type to add child node"/>
            <button type="submit" className="element-list__button element-list__button--plus" >Add</button>

          </form>
        </div>

        {this.props.render(this.state.isChildrenShown)}
      </li>
    );
  }
}
const mapStateToProps = (state) => ({
  tree: Selector.getTree(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteButtonClick(name) {
    dispatch(ActionCreator.deleteNode(name));
  },
  onNewChildButtonClick({name, newElementName}) {
    dispatch(ActionCreator.addNode({name, newElementName}));
  },
});

export {TreeElement};
export default connect(mapStateToProps, mapDispatchToProps)(TreeElement);
