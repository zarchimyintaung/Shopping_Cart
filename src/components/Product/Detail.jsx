import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Detail = () => {
  return (
    <div>
        <Container maxWidth="sm">
            <img src="https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" alt="" style={{
                'width' : '100%',
                'height': '70vh'
            }}/>
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
            <Button size="small">Add To Cart</Button>
        </Container>
    </div>
  )
}   

export default Detail