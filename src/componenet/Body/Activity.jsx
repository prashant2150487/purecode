import { Card, CardContent, Typography } from '@mui/material'

import React from 'react'

function Activity() {
  return (
    
    <Card sx={{ width: 350,p:2,mr:2 }}>
    <CardContent>
      <Typography variant="h4" component="div" sx={{mb:3}}>
        Activity
      </Typography>
      <div>
        <Typography variant="h6">
          Order #11639 was placed
        </Typography> 
        <Typography sx={{mb:1}}>a day ago</Typography> 
      </div>   
      <div>
        <Typography variant="h6">
          Order #11638 was placed
        </Typography> 
        <Typography sx={{mb:1}}>1 day ago</Typography> 
      </div> 
      <div>
        <Typography variant="h6">
          Order #11637 was placed
        </Typography> 
        <Typography sx={{mb:1}}>2 day ago</Typography> 
      </div> 
      <div>
        <Typography variant="h6">
          Order #11636 was placed
        </Typography> 
        <Typography sx={{mb:1}}>3 day ago</Typography> 
      </div> 
      <div>
        <Typography variant="h6">
          Order #11635 was placed
        </Typography> 
        <Typography sx={{mb:1}}>4 day ago</Typography> 
      </div> 
      <div>
        <Typography variant="h6">
          Order #11634 was placed
        </Typography> 
        <Typography sx={{mb:1}}>5 day ago</Typography> 
      </div> 
      <div>
        <Typography variant="h6">
          Order #11633 was placed
        </Typography> 
        <Typography sx={{mb:1}}>6 day ago</Typography> 
      </div>     
       
       

    </CardContent>
    
  </Card>
  )
}

export default Activity