import React from 'react';
import PropTypes from 'prop-types';

import './field.scss';
import cn from '../../utils';

function Field({ className, fieldType, ...props}) {
  const classes = cn(
    'field',
    `field__${fieldType}`,
    className
  );

  return React.createElement(
    fieldType,
    Object.assign({}, { className: classes }, props)
  )
}

Field.propTypes = {
  className: PropTypes.string,
  fieldType: PropTypes.oneOf('input', 'textarea'),
  type: PropTypes.oneOf('checkbox', 'radio', 'password', 'email', 'text')
};

Field.defaultProps = {
  fieldType: 'input',
  type: 'text'
};

export default Field;