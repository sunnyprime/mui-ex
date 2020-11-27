import React from 'react'
import {Switch,Grid, Typography,Button,Paper} from "@material-ui/core"
import {ThemeProvider,createMuiTheme} from "@material-ui/core/styles"



export default function Dark() {
  const [darkMode,setDarkMode] = React.useState(false)

  const theme = createMuiTheme({
    palette:{
      type:darkMode?"dark":"light",
    },
  })
  return (
<ThemeProvider theme={theme}>
<Paper style={{height:"100vh"}}>
  <Grid container direction="column">
    <Typography variant="h1">This is my App!</Typography>
    <Button variant="contained" color="primary">
      This is a button
    </Button>
    <Button variant="contained" color="secondary">
      This is another button
    </Button>
    <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)} />
  </Grid>
</Paper>
</ThemeProvider>
  )
}
