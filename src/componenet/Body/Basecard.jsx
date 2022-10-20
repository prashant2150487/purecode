import { Card,CardContent, Typography } from '@mui/material';
import React from 'react'



function Basecard() {
  return (
    <Card sx={{ minWidth: 200 ,mt:2}}>
      <CardContent>       
        <Typography variant="h3" fontSize={25} component="div" sx={{mb:9,ml:3,mt:2}}>
          Top Products
        </Typography> 
        <Typography component="div" sx={{ml:3}}>
          No products found
        </Typography>   

      </CardContent>
      
    </Card>
  )
}

export default Basecard