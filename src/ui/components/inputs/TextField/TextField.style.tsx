import { TextField, styled } from "@mui/material";

export const TextFieldStyle = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }

  .MuiOutlineInput-notcheOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
