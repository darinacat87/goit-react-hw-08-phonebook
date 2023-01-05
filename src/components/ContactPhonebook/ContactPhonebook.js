import {
  ContactPhonebooks,
  Name,
  Number,
  DeleteBtn,
} from './ContactPhonebook.styled';

export const ContactPhonebook = ({ name, number, id, onDeleteBtn }) => {
  return (
    <ContactPhonebooks>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <DeleteBtn type="button" id={id} onClick={onDeleteBtn}>
        Delete
      </DeleteBtn>
    </ContactPhonebooks>
  );
};
