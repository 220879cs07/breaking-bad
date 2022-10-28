import { AutocompleteProps, PopperPlacementType, TextFieldProps } from "@mui/material";
import { ReactNode } from "react";

export interface SelectOption {
  label: string;
}

export interface UISelectProps<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined>
  extends Omit<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> {
  disableSearch?: boolean;
  theme?: 'product' | 'basic';
  required?: boolean;
  invalid?: boolean;
  label?: string;
  placeholder?: string;
  tooltip?: string;
  menuWidth?: string;
  popperPlacement?: PopperPlacementType;
  helperText?: ReactNode;
  allCheckbox?: boolean;
  InputProps?: TextFieldProps;
}

// export type UISelectProps<T = SelectOption> = Omit<Props<T>, 'renderInput'>