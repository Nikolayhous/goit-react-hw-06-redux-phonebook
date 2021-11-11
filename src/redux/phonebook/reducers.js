import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import initialContacts from '../../initialContacts.json';
import actions from './actions';

// -------vanilla-redux-----------
// const contactList = (state = initState, action) => {
//     switch (action.type) {
//         case actionTypes.ADD:
//             return [...state, action.payload];
//         case actionTypes.DELETE:
//             return state.filter(contact => contact.id !== action.payload.id);
//         default:
//             return state;
//     }
// };

// const contactFilter = (state = '', action) => {
//     switch (action.type) {
//         case actionTypes.FILTER: {
//             return action.payload;
//         }
//         default:
//             return state;
//     }
// };

// const contactReducer = combineReducers({
//     contacts: contactList,
//     filter: filter,
// });
// export default contactReducer;

// ---------------toolkit-redux-----------------

const contactList = createReducer(initialContacts, {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
        state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ contactList, filter });
