import { SELECT_ANSWER, NEXT_QUESTION, FETCH_QUESTION_SUCCESS } from '../actions/index'

const initialState = {
  question: "Abrogate",
  choices: [
    {id: 1, text: "establish firmly in a position"},
    {id: 2, text: "cuddle; snuggle"},
    {id: 3, text: "cancel; deny; repeal"},
    {id: 4, text: "shun; eschew"}
  ],
  correctChoice: 3,
  selectedChoice: null,
  nextQuestion: null
}

function dictionApp(state = initialState, action) {
  switch (action.type) {
    case SELECT_ANSWER:
      return Object.assign({}, state, {
        selectedChoice: action.choice_id
      });
    case NEXT_QUESTION:
      return Object.assign({}, state, {
        question: state.nextQuestion.question,
        choices: state.nextQuestion.choices,
        correctChoice: state.nextQuestion.correctChoice,
        selectedChoice: null,
        nextQuestion: null
      })
    case FETCH_QUESTION_SUCCESS:
      return Object.assign({}, state, {
        nextQuestion: action.response
      })
    default:
      return state;
  }
}

module.exports = dictionApp;
