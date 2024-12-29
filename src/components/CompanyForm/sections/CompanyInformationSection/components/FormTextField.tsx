import { TextField, TextFieldProps } from '@mui/material'

export function FormTextField(props: TextFieldProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      {...props}
      sx={{
        '& .MuiOutlinedInput-root': {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          '&:hover fieldset': {
            borderColor: '#33B0B0',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#5D9B9B',
          },
        },
        '& .MuiInputLabel-root': {
          color: '#333333',
          '&.Mui-focused': {
            color: '#5D9B9B',
          },
        },
        ...props.sx
      }}
    />
  )
}