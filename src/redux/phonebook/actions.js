// ------ vanilla-redux---------
// import { v4 as uuidv4 } from 'uuid';
// import actionTypes from './contactsType';

// const addContact = (name, number) => ({
//     type: actionTypes.ADD,
//     payload: { id: uuidv4(), name, number },
// });

// const deleteContact = contactId => ({
//     type: actionTypes.DELETE,
//     payload: contactId,
// });

// const filterContact = value => ({
//     type: actionTypes.FILTER,
//     payload: value,
// });

// const actions = { addContact, deleteContact, filterContact };

// export default actions;

// ------ redux/toolkit---------

import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contact/add', ({ name, number }) => ({
    payload: { name, number, id: uuidv4() },
}));

const deleteContact = createAction('contact/delete');

const filterContact = createAction('contact/filter');

const actions = { addContact, deleteContact, filterContact };

export default actions;
