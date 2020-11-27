import React from 'react'
import {makeStyles} from  '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

const useStyle = makeStyles({
  typographyStyle: {
    color:"blue"
  }
})

export default function Typo() {
  const classes = useStyle()
  return (
    <>
    <Typography 
    align="right"
    
    className={classes.typographyStyle}
    >
      Data
      </Typography>
      <Button variant="contained">Default</Button>
<Button variant="contained" color="testry">
  Primary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
      </>

  )
}
