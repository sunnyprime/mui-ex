import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import ShareIcon from "@material-ui/icons/Share";



export default function CoffeeCard(props) {
  const {title,price,description,avatarUrl,imageUrl} = props
  return (
    <Card>
      <CardHeader avatar={<Avatar src={avatarUrl}/>} 
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={description}
      />
       <CardMedia style={{ height: "150px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>

      </Card>
 )
}
