let initialState = [];

export default function reducer(state = initialState, action) {
    console.log(state);
    if (action.type === 'ADD_TO_CONTACTS') {

        state= state.concat(action.detailsObject);
        return state;
    }

    return state;
}