import React from 'react';
import PropTypes from 'prop-types';

import './bubble.scss';
import cn from '../../utils';
import Text from '../text';

function Bubble({ author, className, children, time, ...props }) {
  const classes = cn('bubble', className);
  return (
    <div className={classes} {...props}>
      <Text size="small" align="right" color="light" >{author}</Text>
      <Text size="small" align="right" color="light">{time}</Text>
      <Text color="regular">{children}</Text>
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