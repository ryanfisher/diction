export const SELECT_ANSWER = 'SELECT_ANSWER'

export function selectAnswer(choice_id) {
  return { type: SELECT_ANSWER, choice_id }
}
