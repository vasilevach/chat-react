import React from 'react';
import PropTypes from 'prop-types';

import './bubble.scss';
import cn from '../../utils';
import Text from '../text';
import Flex from '../flex';

function Bubble({ author, className, children, time, state, ...props }) {
  const classes = cn('bubble', `bubble--${state}`, className);
  const flexProps = state === 'self' ? { justify: 'flex-end' } : { justify: 'flex-start' };
  const titleProps = state === 'self' ? { justify: 'flex-end' } : { justify: 'flex-start' };

  return (
    <Flex margin="small" className="bubble-wrap" {...flexProps}>
      <Flex align="center" margin='none' padding='none' className="bubble__title" {...titleProps}>
        <Text size="small" align="right" color="medium" >{author}: &nbsp;</Text>
        <Text size="x-small" color="light">({time})</Text>
      </Flex>
      <Flex margin="none" className={classes} {...props}>
        <Text color="regular">{children}</Text>
      </Flex>
    </Flex>
  )
}

Bubble.propTypes = {
  author: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType('node', 'string'),
  time: PropTypes.string,
  state: PropTypes.oneOf('self', 'other')
};

Bubble.defaultProps = {
  state: 'self'
};

export default Bubble;