const LOGIN = "LOGIN";
//export const logIn = (userName, password) => {
//    console.log(userName, password);
    
//    return ({ type: LOGIN, success: true });
//}

export const logIn = (userName, password) => async (dispatch) => {
    const url = `api/Login?userName=${userName}&passWord=${password}`;
    const response = await fetch(url);
    const loginStatus = await response.json();

    dispatch({ type: LOGIN, success: loginStatus });
}

const initialState = { success: null };


export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === LOGIN) {
        return { ...state, success: action.success };
    }

    return state;
};
