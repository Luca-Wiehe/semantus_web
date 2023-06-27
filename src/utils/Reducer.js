const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LARGE_SCREEN':
            return {
                ...state,
                isLargeScreen: action.payload,
            };
        case 'SET_LOGGED_IN':
            return {
                ...state,
                logged_in: action.logged_in
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_COMPLETE':
            return {
                ...state,
                complete: action.complete
            };
        default:
            return state;
   }
};

export default Reducer;