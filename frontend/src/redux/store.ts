import { combineReducers} from "redux";
import quizReducer from './reducers';
import userReducer from "userReducer/userReducer";

export const rootReducer = combineReducers({
    quiz: quizReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;