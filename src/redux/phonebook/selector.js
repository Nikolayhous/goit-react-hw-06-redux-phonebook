export const getContacts = state => state.contacts.contactList;
export const getFilter = state => state.contacts.filter;
export const getFilteredContacts = state => {
    const lowerContactsFilter = getFilter(state).toLowerCase();
    const filteredContacts = getContacts(state).filter(({ name }) =>
        name.toLowerCase().includes(lowerContactsFilter),
    );
    return filteredContacts;
};
