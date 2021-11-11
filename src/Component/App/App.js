// import { useState, useEffect } from 'react';
import s from './App.module.css';
import Container from '../Container';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import Footer from '../Footer';
// import initialContacts from '../../initialContacts.json';
// import { HookLS } from '../../hookLS/hookLS';
// import actions from '../../redux/phonebook/actions';

function App() {
    // const [contacts, setContacts] = HookLS('contacts') ?? initialContacts;
    // const [filter, setFilter] = useState('');
    //Зразок 2 як можна записати в локал сторідж--------------------------------
    // const [contacts, setContacts] = useState(() => {
    //     return JSON.parse(localStorage.getItem('contacts')) ?? initialContacts;
    // });

    // useEffect(() => {
    //     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    //     parsedContacts && setContacts(parsedContacts);
    // }, [setContacts]);

    // useEffect(() => {
    //     localStorage.setItem('contacts', JSON.stringify(contacts));
    // }, [contacts]);
    // //-----------------------------------------------------------------------

    // const formSubmitHandler = data => {
    //     if (
    //         contacts.some(
    //             element =>
    //                 element.name.toLowerCase() === data.name.toLowerCase(),
    //         )
    //     ) {
    //         return alert('This contact has already been added to the list');
    //     }

    //     setContacts([data, ...contacts]);
    // };

    // const changeFilter = e => {
    //     setFilter(e.target.value);
    // };

    // const getVisibleContact = () => {
    //     const contactFilter = filter.toLowerCase();
    //     return contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(contactFilter),
    //     );
    // };

    // const deleteContactList = contactId => {
    //     setContacts(contacts.filter(contact => contact.id !== contactId));
    // };

    return (
        <Container>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={s.title}>Contacts</h2>
            <Filter />
            <ContactList />
            <Footer />
        </Container>
    );
}

export default App;
