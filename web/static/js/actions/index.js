export const SELECT_ANSWER = 'SELECT_ANSWER'
export const NEXT_QUESTION = 'NEXT_QUESTION'

export function selectAnswer(choice_id) {
  return { type: SELECT_ANSWER, choice_id }
}

export function nextQuestion() {
  return { type: NEXT_QUESTION }
}
