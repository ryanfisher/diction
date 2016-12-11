import { SELECT_ANSWER, NEXT_QUESTION } from '../actions/index'

const initialState = {
  question: "Abrogate",
  choices: [
    {id: 1, text: "establish firmly in a position"},
    {id: 2, text: "cuddle; snuggle"},
    {id: 3, text: "cancel; deny; repeal"},
    {id: 4, text: "shun; eschew"}
  ],
  correctChoice: 3,
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
