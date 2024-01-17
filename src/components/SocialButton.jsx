import React from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SocialButton = ({icono}) => {
  return (
    <Button>
<FontAwesomeIcon icon={icono} />
</Button>
  );
};

export default SocialButton;
