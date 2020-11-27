import React from 'react'
import CoffeeCard from './CoffeeCard'
import {Grid} from '@material-ui/core'
import coffeMakerList from "./Constant";

export default function Content() {
  const getCoffeMakerCard = coffeMakerObj => {
    return (
      <Grid item xs={12} sm={4}>
        <CoffeeCard {...coffeMakerObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={2}>
    {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
  </Grid>
  )
}
