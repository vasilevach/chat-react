import React from 'react';
import PropTypes from 'prop-types';

import './bubble.scss';
import cn from '../../utils';

function Bubble({ author, className, children, time, ...props }) {
  const classes = cn('bubble', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

Bubble.propTypes = {
  author: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType('node', 'string'),
  time: PropTypes.string
};

Bubble.defaultProps = {

};

export default Bubble;