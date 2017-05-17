let initialState = [];

export default function reducer(state = initialState, action) {
    if (action.type === 'ADD_TO_CONTACTS') {
        state = state.concat(action.detailsObject);
        return state;

    }

    return state;
}