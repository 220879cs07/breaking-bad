import { Tooltip } from '@mui/material';
import cn from 'app/helpers/cn';
import React from 'react';
import { UITooltipProps } from './types';
import './UITooltip.sass';

const UITooltip: React.FC<UITooltipProps> = ({ type = 'yellow', ...rest }) => {
  return (
    <Tooltip
      classes={{
        tooltip: cn('ui-tooltip__tooltip', {
          [`ui-tooltip__tooltip--${type}`]: type,
        }),
        arrow: cn('ui-tooltip__arrow', {
          [`ui-tooltip__arrow--${type}`]: type,
        }),
      }}
      arrow
      disableInteractive
      placement='top'
      {...rest}
    />
  );
};

export default UITooltip;
