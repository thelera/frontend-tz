import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const App = () => {
  return (
    <h1>Hello</h1>
  );
}

App.propTypes = {
};

// const mapStateToProps = (state) => ({
//   step: state.step,
//   maxMistakes: state.maxMistakes,
//   questions: state.questions,
//   mistakes: state.mistakes,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onWelcomeButtonClick() {
//     dispatch(ActionCreator.incrementStep());
//   },
//   onUserAnswer(question, answer) {
//     dispatch(ActionCreator.incrementMistake(question, answer));
//     dispatch(ActionCreator.incrementStep());
//   },
//   resetGame() {
//     dispatch(ActionCreator.resetGame());
//   },
// });


//export {App};
//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
