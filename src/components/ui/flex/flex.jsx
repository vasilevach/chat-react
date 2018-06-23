import React from 'react';
import PropTypes from 'prop-types';

import './flex.scss';
import cn from '../../utils';

function Flex({
  className,
  align,
  alignSelf,
  direction,
  justify,
  margin,
  padding,
  children,
  ...props
}) {
  const classes = cn(
    'flex',
    align && `flex--align-${align}`,
    alignSelf && `flex--align-self-${alignSelf}`,
    direction && `flex--direction-${direction}`,
    justify && `flex--justify-${justify}`,
    margin && `flex--margin-${margin}`,
    padding && `flex--padding-${padding}`,
    className
  );

  return (
    <div className={classes} {...props}>{children}</div>
  );
}

Flex.propTypes = {
  align: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'baseline', 'stretch']),
  alignSelf: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'baseline', 'stretch']),
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  margin: PropTypes.oneOf(['small', 'medium', 'large', 'none']),
  padding: PropTypes.oneOf(['small', 'medium', 'large', 'none'])
};

Flex.defaultProps = {
  align: 'flex-start',
  margin: 'medium',
  padding: 'medium'
};

export default Flex;