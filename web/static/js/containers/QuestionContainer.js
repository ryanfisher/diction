import { connect } from 'react-redux'
import { selectAnswer } from '../actions/index'
import QuestionSection from '../components/QuestionSection'

const mapStateToProps = (state) => {
  return {
    question: state.question,
    choices: state.choices,
    selectedChoice: state.selectedChoice,
    correctChoice: state.correctChoice
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChoiceSelect: (choiceId) => {
      dispatch(selectAnswer(choiceId))
    }
  }
}

const QuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionSection)

module.exports = QuestionContainer;
