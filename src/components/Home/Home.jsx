import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
        <Grid container spacing={2} style = {{
          'marginTop' : '20px',
        }}>
            <Grid item sm = {3} md = {6} lg = {4}>
              <Link to = '/product/12' style={{'textDecoration': 'none'}}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions style={{
                    'display' : 'flex',
                    'justifyContent': 'space-between'
                  }}>
                    <Button size="small">Add To Cart</Button>
                    <Typography variant='h6'>
                      100$
                    </Typography>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
            
        </Grid>
    </div>
  )
}

export default Home