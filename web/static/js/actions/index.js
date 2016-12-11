import fetch from 'isomorphic-fetch'

export const SELECT_ANSWER = 'SELECT_ANSWER'
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST'
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS'
export const FETCH_QUESTION_FAILURE = 'FETCH_QUESTION_FAILURE'

export function selectAnswer(choice_id) {
  return { type: SELECT_ANSWER, choice_id }
}

export function nextQuestion() {
  return { type: NEXT_QUESTION }
}

export function fetchQuestion() {
  return dispatch => {
    dispatch({ type: FETCH_QUESTION_REQUEST })

    return fetch('/api/question/next')
      .then(response => response.json())
      .then(json =>
        dispatch({ type: FETCH_QUESTION_SUCCESS, response: json })
      )
  }
}
