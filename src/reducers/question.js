import { 
    FETCH_WORDSETS_REQUEST,
    FETCH_WORDSETS_SUCCESS,
    FETCH_WORDSETS_ERROR,
    FETCH_QUESTION_REQUEST,
    FETCH_QUESTION_SUCCESS,
    FETCH_QUESTION_ERROR,
    SEND_QUESTION_RESPONSE_REQUEST,
    SEND_QUESTION_RESPONSE_SUCCESS,
    SEND_QUESTION_RESPONSE_ERROR,
    GENERATE_QUESTION_FEEDBACK,
    TOGGLE_VIEW_EXAMPLE,
    RESET_STATE,
    TOGGLE_MENU_VISIBLE,
    SELECT_WORD_SET,
    NEXT_QUESTION
} from '../actions/question';

const initialState = {
    wordSets: null,
    wordSetChosen: null,
    menuVisible: false,
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
    if (action.type === TOGGLE_MENU_VISIBLE) {
        return Object.assign({}, state, {
            menuVisible: !state.menuVisible
        })
    }
    
    else if (action.type === FETCH_WORDSETS_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	}

	else if (action.type === FETCH_WORDSETS_SUCCESS) {
		return Object.assign({}, state, {
			wordSets: action.wordSets,
			loading: false,
			error: null
		})
	}

	else if (action.type === FETCH_WORDSETS_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
    }

    if (action.type === SELECT_WORD_SET) {
        return Object.assign({}, state, {
            wordSetChosen: action.wordSet
        })
    }

    else if (action.type === FETCH_QUESTION_REQUEST) {
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
          viewExample: false,
          wordSetChosen: null,
          menuVisible: false
        })
    }

    else if (action.type === NEXT_QUESTION) {
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
