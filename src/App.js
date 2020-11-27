import './App.css';
import {Grid} from '@material-ui/core'
import Header from './Component/Header';
import Content from './Component/Content';
import Typo from './Component/Typo';
import Dark from './Component/Dark';

function App() {
  return (
<Grid container direction="column" spacing={0}>
  <Grid item><Header /></Grid>
  <Grid item>
    {/* <Typo /> */}
    <Dark />
  </Grid>
  <Grid item container >
  <Grid item xs={2}></Grid> 
  {/* <Grid item xs={8}><Content /></Grid> */}
  
  </Grid>
  </Grid>
  );
}

export default App;
