import React from 'react'
import { TextField } from '@mui/material';

interface Props{
    selectedContent: string;
}
const ContentText:React.FC<Props> = ({selectedContent}) => {
  return (
    <TextField
    id="filled-read-only-input filled-multiline-static"
    label="Content"
    value={selectedContent}
    InputProps={{
      readOnly: true,
    }}
    variant="filled"
    fullWidth
    rows={10}
    multiline
    
  />
  )
}
export default ContentText
