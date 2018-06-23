import React from 'react';
import PropTypes from 'prop-types';

import cn from '../../utils';
import './with-typography.scss';

function withTypography(Component, defaults = {}) {
  const WithTypography = ({
    align = defaults.align,
    className,
    transform = defaults.transform,
    weight = defaults.weight,
    style = defaults.style,
    ...props
  }) => {
    const classes = cn(
     'typography',
    align && `typography--align-${align}`,
    transform && `typography--transform-${transform}`,
    weight && `typography--weight-${weight}`,
    style && `typography--style-${style}`,
    className
  );

    return <Component className={classes} {...props} />;
  };

  WithTypography.propTypes = Object.assign(Component.propTypes, {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    className: PropTypes.string,
    transform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase']),
    weight: PropTypes.oneOf(['light', 'regular', 'medium', 'bold', 'extra-bold']),
    style: PropTypes.oneOf(['italic', 'normal', 'oblique'])
});

  return WithTypography;
}

export default withTypography;