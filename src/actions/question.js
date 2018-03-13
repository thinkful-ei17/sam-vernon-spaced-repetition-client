export const GENERATE_QUESTION_FEEDBACK = 'GENERATE_QUESTION_FEEDBACK';
export const generateQuestionFeedback = (word, definition, rightAnswer, shuffledArray, prompt, correct) => ({
    type: GENERATE_QUESTION_FEEDBACK,
    word,
    definition,
    rightAnswer,
    shuffledArray,
    prompt,
    correct
})