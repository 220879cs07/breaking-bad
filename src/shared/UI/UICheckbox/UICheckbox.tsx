import { Checkbox } from '@mui/material';
import COLORS from 'app/constants/COLORS';
import React from 'react';
import { UICheckboxProps } from './types';

const UICheckbox: React.FC<UICheckboxProps> = ({ ...rest }) => {
  return (
    <Checkbox
      disableRipple
      {...rest}
      sx={{
        color: COLORS.DARK_GRAY,
        '&.Mui-checked': {
          color: COLORS.PRIMARY,
        },
        '& svg': {
          fontSize: '2rem',
        },
      }}
    />
  );
};

export default UICheckbox;
