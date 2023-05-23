import { AddBtn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <AddBtn type="button" onClick={onClick}>
      Add more
    </AddBtn>
  );
};


Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};