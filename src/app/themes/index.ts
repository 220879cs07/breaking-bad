import { createTheme } from '@mui/material';
import COLORS from 'app/constants/COLORS';
import FONTS from 'app/constants/FONTS';

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          font: `1.4rem ${FONTS.MEDIUM}`,
          color: '#8080A6',
          marginBottom: '8px',
        },
        asterisk: {
          color: '#FF4B4B',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          borderRadius: '8px',
          padding: '0 10px',
          height: '45px',
        },
        root: {
          border: `1px solid ${COLORS.GRAY}`,
          font: `1.5rem ${FONTS.MEDIUM}`,
          padding: '0',
          borderRadius: '11px',
          '&.Mui-error': {
            borderColor: COLORS.DANGER,
          },
          '& .MuiInputBase-inputMultiline': {
            height: '100px !important',
            padding: '5px 10px',
          },
          '& .MuiInputAdornment-root .MuiButtonBase-root': {
            marginRight: '8px',
          },
          '&.Mui-disabled': {
            background: COLORS.LIGHT,
            borderColor: COLORS.DARK_GRAY,
          },
        },
        notchedOutline: {
          border: 'none',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '& .MuiCheckbox-root': {
            paddingTop: 0,
            paddingBottom: 0,
          },
        },
        label: {
          font: `1.6rem ${FONTS.MEDIUM}`,
          userSelect: 'none',
        },
      },
    },
  },
});

export default theme;
