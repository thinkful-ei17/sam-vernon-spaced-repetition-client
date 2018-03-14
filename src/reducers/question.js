import { 
    FETCH_QUESTION_REQUEST,
    FETCH_QUESTION_SUCCESS,
    FETCH_QUESTION_ERROR,
    SEND_QUESTION_RESPONSE_REQUEST,
    SEND_QUESTION_RESPONSE_SUCCESS,
    SEND_QUESTION_RESPONSE_ERROR,
    GENERATE_QUESTION_FEEDBACK,
    TOGGLE_VIEW_EXAMPLE,
    RESET_STATE
} from '../actions/question';

const initialState = {
    loading: false,
    error: null,
    question: null,
    word: null,
    definition: null,
    correctAnswer: null,
    shuffledArray: null,
    prompt: null,
    correct: null,
    viewExample: false
}

export const reducer = (state = initialState, action) => {
    if (action.type === FETCH_QUESTION_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	}

	else if (action.type === FETCH_QUESTION_SUCCESS) {
		return Object.assign({}, state, {
			question: action.question,
			loading: false,
			error: null
		})
	}

	else if (action.type === FETCH_QUESTION_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
    }
    
    else if (action.type === SEND_QUESTION_RESPONSE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	}

	else if (action.type === SEND_QUESTION_RESPONSE_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: null
		})
	}

	else if (action.type === SEND_QUESTION_RESPONSE_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	}
    
    else if (action.type === GENERATE_QUESTION_FEEDBACK) {
          return Object.assign({}, state, {
            word: action.word,
            definition: action.definition,
            correctAnswer: action.correctAnswer,
            shuffledArray: action.shuffledArray,
            prompt: action.prompt,
            correct: action.correct
          })
    }
    
    else if (action.type === TOGGLE_VIEW_EXAMPLE) {
        return Object.assign({}, state, {
            viewExample: !state.viewExample
        })
    }

    else if (action.type === RESET_STATE) {
        return Object.assign({}, state, {
          question: null,
          word: null,
          definition: null,
          correctAnswer: null,
          shuffledArray: null,
          prompt: null,
          correct: null,
          viewExample: false
        })
    }

    return state
}
