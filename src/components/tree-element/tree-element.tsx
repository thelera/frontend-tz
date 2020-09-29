import * as React from "react";
import {ActionCreator, Selector} from "../../reducer";
import {connect} from "react-redux";
import ElementList from "../element-list/element-list";
import {getPath, getRandomId} from "../../utils";
import {TreeNode} from "../../types";

interface Props {
  children: Array<TreeNode>;
  id: string;
  name: string;
  tree: Array<TreeNode>;
  onDeleteButtonClick: (string) => void;
  onNewChildButtonClick: (payload: {
    id: string;
    newElement: any;
  }) => void;
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

  _handleShowPathClick(tree, id) {
    const path = getPath(tree, id);

    console.log(path.join(` > `));
  }

  render() {
    const {children, id, name, tree, onDeleteButtonClick, onNewChildButtonClick} = this.props;
    const {isChildrenShown} = this.state;
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
              this._handleShowPathClick(tree, id);
            }}>
            Show path</button>

          <button
            className="element-list__button element-list__button--minus"
            onClick={() => {
              onDeleteButtonClick(id);
            }}>
            Delete</button>

          <form
            className="element-list__form"
            onSubmit={(evt) => {
              evt.preventDefault();
              const newChild = newElemenetRef.current.value;
              if (newChild) {
                const newElement = {
                  id: getRandomId(),
                  name: newChild,
                };
                onNewChildButtonClick({id, newElement});
              }
            }}>
            <input type="text" className="element-list__input" ref={newElemenetRef} placeholder="Type to add child node"/>
            <button type="submit" className="element-list__button element-list__button--plus" >Add</button>

          </form>
        </div>

        {isChildrenShown && children && children.length > 0 && <ElementList elements={children}/>}
      </li>
    );
  }
}
const mapStateToProps = (state) => ({
  tree: Selector.getTree(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteButtonClick(id) {
    dispatch(ActionCreator.deleteNode(id));
  },
  onNewChildButtonClick({id, newElement}) {
    dispatch(ActionCreator.addNode({id, newElement}));
  },
});

export {TreeElement};
export default connect(mapStateToProps, mapDispatchToProps)(TreeElement);
