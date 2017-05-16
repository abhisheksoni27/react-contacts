const initialState = {
    list: []
}

export default function reducer(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    state['list'] = state['list'].concat(action.detailsObject);
    return state;
}