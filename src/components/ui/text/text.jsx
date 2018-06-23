import React from 'react';
import PropTypes from 'prop-types';

import './text.scss';
import withTypography from '../with-typography';
import cn from '../../utils';

function Text({ className, children, size, italic, ...props }) {
  const classes = cn('text', `text--size-${size}`, className);

  return (
    <p className={classes} {...props}>{children}</p>
  );
}

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  className: PropTypes.string,
  italic: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Text.defaultProps = {
  size: 'medium'
};

export default withTypography(Text, { color: 'darkest', weight: 'regular' });