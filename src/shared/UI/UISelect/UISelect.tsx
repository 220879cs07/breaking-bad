import { Autocomplete, Popper, PopperProps, TextField } from '@mui/material';
import { Box } from '@mui/system';
import cn from 'classnames';
import React, { useCallback } from 'react';
import UITooltip from 'shared/UI/UITooltip/UITooltip';
import UICheckbox from '../UICheckbox/UICheckbox';
import { UISelectProps } from './types';
import './UISelect.sass';

function UISelect<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>({
  menuWidth,
  className = '',
  value,
  tooltip = '',
  disableSearch,
  theme = 'basic',
  placeholder,
  label,
  onChange,
  popperPlacement,
  invalid,
  helperText,
  inputValue,
  allCheckbox,
  InputProps,
  classes,
  ...rest
}: UISelectProps<T, Multiple, DisableClearable, FreeSolo>) {
  const PopperComp = useCallback(
    (props: PopperProps) => (
      <Popper {...props} {...(menuWidth ? { style: { width: menuWidth } } : {})} placement={popperPlacement ?? 'bottom-start'} />
    ),
    [menuWidth, popperPlacement]
  );

  const ListComp = React.memo(
    React.forwardRef<{}, React.HTMLAttributes<HTMLElement>>(({ children, ...props }, ref) => (
      <ul {...props}>
        {allCheckbox && rest.multiple && (
          <Box
            component='li'
            className='select-v2__option MuiAutocomplete-option'
            sx={{
              pl: '7px !important',
            }}
            ref={ref}
          >
            <UICheckbox
              style={{ marginRight: 8 }}
              //@ts-ignore
              checked={rest.options.length === value?.length}
              //@ts-ignore
              onChange={(event, checked) => {
                if (checked) {
                  //@ts-ignore
                  onChange?.(event, rest.options, 'selectOption');
                } else {
                  //@ts-ignore
                  onChange?.(event, [], 'removeOption');
                }
              }}
            />
            All
          </Box>
        )}
        {children}
      </ul>
    ))
  );

  return (
    <UITooltip title={tooltip}>
      <Autocomplete
        fullWidth
        onInput={() => {
          if (disableSearch) {
            return;
          }
        }}
        classes={{
          input: cn('select-v2__input', {
            'select-v2__input--search-disabled': disableSearch,
            [`select-v2--${theme}`]: theme,
          }),
          root: cn('select-v2', {
            [`select-v2--${theme}`]: theme,
            [`${className}`]: className,
          }),
          option: 'select-v2__option',
          clearIndicator: 'select-v2__clear-indicator',
          popupIndicator: 'select-v2__popup-indicator',
          inputRoot: 'select-v2__input--root',
          ...classes,
        }}
        onChange={onChange}
        ListboxComponent={ListComp}
        PopperComponent={PopperComp}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              {...InputProps}
              disabled={disableSearch}
              placeholder={placeholder}
              label={label}
              error={invalid}
              helperText={helperText}
            />
          );
        }}
        defaultValue={value}
        value={value}
        inputValue={inputValue}
        ChipProps={{
          sx: {
            height: '26px',
          },
        }}
        {...rest}
      />
    </UITooltip>
  );
}

export default UISelect;
