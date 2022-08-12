import { QuestionAction } from "../Reducers/question.reducer";
import { quizAPI } from "../../API/API";


export const QuestionThunks = {
    getQueston: (idCategory=false) => async (dispatch) => {
        try {
            if (idCategory) {
                const response = await quizAPI.getCategoriesQuestion(idCategory)
            }
            else {
                const response = await quizAPI.getRandomQuestion()
            }
            if (response.error) return
            let data = response.json()
            dispatch(QuestionAction.setQuestion(data))
        } catch(error) {
            console.log(error)
        } finally {

        }

    }
}