import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem';

import { selectAllContacts } from 'redux/contacts/selectors';
// import selectFilter from 'redux/selectors';
// import Filter from 'components/Filter';

import { UL } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  // const filter = useSelector(selectFilter);
  // const lowerFilter = filter.toLowerCase();
  // const filteredContacts = contacts.filter(contact =>
  // contact.name.toLowerCase().includes(lowerFilter)
  // );
  const filteredContacts = useSelector(selectAllContacts);
  return (
    <>
      <h2>Contacts</h2>
      {/* <Filter /> */}
      {filteredContacts.length > 0 && (
        <UL>
          {filteredContacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </UL>
      )}
    </>
  );
};
export default ContactList;
