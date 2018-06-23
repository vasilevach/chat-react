import React from 'react';
import PropTypes from 'prop-types';

import './text.scss';
import withTypography from '../with-typography';
import cn from '../../utils';

function Text({ className, children, color, size, ...props }) {
  const classes = cn(
    'text',
    `text--size-${size}`,
    `text--color-${color}`,
    className);

  return (
    <p className={classes} {...props}>{children}</p>
  );
}

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  className: PropTypes.string,
  color: PropTypes.oneOf(['light', 'regular', 'dark-grey']),
  size: PropTypes.oneOf(['x-small','small', 'medium', 'large'])
};

Text.defaultProps = {
  size: 'medium',
  color: 'regular'
};

export default withTypography(Text, { weight: 'regular' });