import { TooltipProps } from "@mui/material";

export type UITolltipType = 'yellow' | 'white';

export interface UITooltipProps extends TooltipProps {
  type?: UITolltipType;
}