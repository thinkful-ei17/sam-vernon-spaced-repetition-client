import { GENERATE_QUESTION_FEEDBACK } from '../actions/question';

const initialState = {
    word: null,
    definition: null,
    rightAnswer: null,
    shuffledArray: null,
    prompt: null,
    correct: null
}

export const reducer = (state = initialState, action) => {
    if (action.type === GENERATE_QUESTION_FEEDBACK) {
          return Object.assign({}, state, {
            word: action.word,
            definition: action.definition,
            rightAnswer: action.rightAnswer,
            shuffledArray: action.shuffledArray,
            prompt: action.prompt,
            correct: action.correct
          })
    }

    return state
}
