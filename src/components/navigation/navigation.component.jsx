import { AppBar, Typography } from '@mui/material'
import React from 'react'

const Navigation = () => {
  return (
    <AppBar component='nav'>
      <Typography
        variant='h6'
        component='h1'
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, backgroundColor:'pink', color:'black' }}
      >
        Colbys Trivia Game
      </Typography>
    </AppBar>
  )
}

export default Navigation
