// authActions.js

export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_IMAGE_CHANGED = 'SET_IMAGE_CHANGED';

export const setLoggedIn = (isLoggedIn) => ({
    type: SET_LOGGED_IN,
    payload: isLoggedIn,
});

export const setImageChanged = (imageChanged) => ({
    type: SET_IMAGE_CHANGED,
    payload: imageChanged,
});

// authReducer.js

const initialState = {
    isLoggedIn: false,
    imageChanged: false,
};

export const ChangeImageStatesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload,
            };
        case SET_IMAGE_CHANGED:
            return {
                ...state,
                imageChanged: action.payload,
            };
        default:
            return state;
    }
};