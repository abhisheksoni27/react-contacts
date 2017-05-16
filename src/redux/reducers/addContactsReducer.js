import {addContacts} from '../actions/contactActions';

const initialState = {
    list: []
}

function todoApp(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    state['list'] = state['list'].concat(data);
    return state;
}