import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';

const ScrollbarRoot = styled("div")``;

export const Scrollbar = forwardRef((props, ref) => {
  return (
    <ScrollbarRoot
      ref={ref}
      {...props} />
  );
});
