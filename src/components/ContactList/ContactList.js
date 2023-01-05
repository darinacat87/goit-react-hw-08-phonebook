import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ContactPhonebook } from 'components/ContactPhonebook/ContactPhonebook';

import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';

import { useSelector } from 'react-redux';

const ContactList = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterValue = useSelector(state => state.filter);

  const filterContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <List>
      {!isLoading &&
        filterContacts.reverse().map(({ name, id, number }) => {
          return (
            <ContactPhonebook
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteBtn={() => deleteContact(id)}
            />
          );
        })}
    </List>
  );
};

ContactList.prototypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteBtn: PropTypes.func.isRequired,
};

export default ContactList;
