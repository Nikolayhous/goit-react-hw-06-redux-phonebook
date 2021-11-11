// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/phonebook/selector';
import actions from '../../redux/phonebook/actions';
import s from './ContactList.module.css';

function ContactList() {
    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();
    const totalNumber = contacts.length;

    return (
        <div className={s.contactList}>
            {contacts.length > 0 && (
                <ul className={s.list}>
                    {contacts.map(({ name, number, id }) => (
                        <li className={s.item} key={id}>
                            <p className={s.text}>{name}:</p>
                            <p className={`${s.text} ${s.number}`}>{number}</p>
                            <button
                                className={s.btn}
                                type="button"
                                onClick={() =>
                                    dispatch(actions.deleteContact(id))
                                }
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <p className={s.total__number}>
                Total number of subscribers:{totalNumber}
            </p>
        </div>
    );
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//             id: PropTypes.string.isRequired,
//         }),
//     ),

//     onDeleteContactList: PropTypes.func.isRequired,
// };

export default ContactList;
