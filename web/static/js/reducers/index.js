import { SELECT_ANSWER } from '../actions/index'

const initialState = {
  question: "What is the correct choice?",
  choices: [
    {id: 1, text: "Choice 1"},
    {id: 2, text: "Choice 2"},
    {id: 3, text: "Choice 3"},
    {id: 4, text: "Choice 4"}
  ],
  selectedChoice: null
}

function dictionApp(state = initialState, action) {
  switch (action.type) {
    case SELECT_ANSWER:
      return Object.assign({}, state, {
        selectedChoice: action.choice_id
      });
    default:
      return state;
  }
}

module.exports = dictionApp;