import React from 'react'
import { Link } from 'react-router'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFound = () => {
  return (
    <div style={{ 
        'display': 'flex',  
        'justifyContent' : 'center',
        'alignItems': 'center',
        'width' : '100%',
        'minHeight': '100vh',
        'flexDirection' : 'column',
        'gap': '10px'
    }}>
        <Typography variant="h3" align = 'center'>
            404 | Not Found
        </Typography>
        <Link to = '/'>
        <Button variant="outlined" color="error" startIcon = {<ArrowBackIcon/>}>
            Go To Home 
        </Button>
        </Link>
    </div>
  )
}

export default NotFound