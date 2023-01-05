import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/Filter/Filter';
import { Section } from 'components/SectionForm/SectionForm.styled';
import { useGetContactsQuery } from 'redux/contactsApi';

export default function Contacts() {
  const { data: contacts, isLoading } = useGetContactsQuery();
  return (
    <Section>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      {contacts?.length > 0 && (
        <>
          <ContactFilter />
        </>
      )}
      {isLoading && <p>Loading...</p>}
      {contacts?.length === 0 && !isLoading && <p>Contact list is empty</p>}
      <ContactList />
    </Section>
  );
}
