// import PropTypes from 'prop-types';
import {
  ContactPhonebooks,
  Name,
  Phone,
  DeleteBtn,
} from './ContactPhonebook.styled';

export const ContactPhonebook = ({ name, phone, id, onDeleteBtn }) => {
  return (
    <ContactPhonebooks>
      <Name>{name}</Name>
      <Phone>{phone}</Phone>
      <DeleteBtn type="button" id={id} onClick={onDeleteBtn}>
        Delete
      </DeleteBtn>
    </ContactPhonebooks>
  );
};

//ContactPhonebook.propTypes = {
//name: PropTypes.string.isRequired,
// number: PropTypes.string.isRequired,
//id: PropTypes.string.isRequired,
//onDeleteBtn: PropTypes.func.isRequired,
//};
