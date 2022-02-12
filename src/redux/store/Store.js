import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import ErrorFormsReducer from "../reducers/ErrorFormsReducer";
import LoginReducer from "../reducers/LoginReducer";
import OnlineReducer from "../reducers/OnlineReducer";
import RegisterReducer from "../reducers/RegisterReducer";

const reducers = combineReducers({
    session: LoginReducer,
    errorForms: ErrorFormsReducer,
    register: RegisterReducer,
    online: OnlineReducer
})

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        process.env.NODE_ENV==="development" ?
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
    )
)

export default store;